<template>
  <div ref="containerRef" class="fixed inset-0 z-0 pointer-events-none" />
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useTheme } from '@/composables/useTheme'
import * as THREE from 'three'
import logoVert from '../../shaders/logo.vert?raw'
import logoFrag from '../../shaders/logo.frag?raw'
import logoLightFrag from '../../shaders/logo-light.frag?raw'
import entelecheiaLogo from '@res/logos/entelecheia.webp'

const containerRef = ref<HTMLDivElement>()
const { theme } = useTheme()

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.OrthographicCamera
let logoMesh: THREE.Mesh
let logoMaterial: THREE.ShaderMaterial
let lightMaterial: THREE.ShaderMaterial
let starMaterial: THREE.PointsMaterial
let twinkleMaterial: THREE.PointsMaterial
let starPoints: THREE.Points
let starTwinkle: THREE.Points
let animationId: number
let clock: THREE.Clock
let visible = true

watch(theme, (t) => {
  if (!logoMesh) return
  if (t === 'dark') {
    logoMesh.material = logoMaterial
    starPoints.visible = true
    starTwinkle.visible = true
    clock = new THREE.Clock()
    clock.start()
  } else {
    logoMesh.material = lightMaterial
    starPoints.visible = false
    starTwinkle.visible = false
  }
})

function createStarfield() {
  const count = 1200
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 3 + Math.random() * 2
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = -r * Math.cos(phi)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
  gradient.addColorStop(0.15, 'rgba(200, 200, 255, 0.6)')
  gradient.addColorStop(0.5, 'rgba(140, 140, 220, 0.15)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)

  const texture = new THREE.CanvasTexture(canvas)
  texture.generateMipmaps = false
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter

  starMaterial = new THREE.PointsMaterial({
    size: 0.035,
    map: texture,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    transparent: true,
    opacity: 0.45,
  })

  starPoints = new THREE.Points(geometry, starMaterial)
  scene.add(starPoints)

  const count2 = 600
  const positions2 = new Float32Array(count2 * 3)
  for (let i = 0; i < count2; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 5 + Math.random() * 3
    positions2[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions2[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions2[i * 3 + 2] = -r * Math.cos(phi)
  }
  const geometry2 = new THREE.BufferGeometry()
  geometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3))

  const canvas2 = document.createElement('canvas')
  canvas2.width = 32
  canvas2.height = 32
  const ctx2 = canvas2.getContext('2d')!
  const gradient2 = ctx2.createRadialGradient(16, 16, 0, 16, 16, 16)
  gradient2.addColorStop(0, 'rgba(160, 160, 255, 0.7)')
  gradient2.addColorStop(0.5, 'rgba(100, 100, 200, 0.25)')
  gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx2.fillStyle = gradient2
  ctx2.fillRect(0, 0, 32, 32)

  twinkleMaterial = new THREE.PointsMaterial({
    size: 0.022,
    map: new THREE.CanvasTexture(canvas2),
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    transparent: true,
    opacity: 0.28,
  })

  starTwinkle = new THREE.Points(geometry2, twinkleMaterial)
  scene.add(starTwinkle)
}

function createLogoPlane() {
  const geometry = new THREE.PlaneGeometry(2.4, 2.4)

  logoMaterial = new THREE.ShaderMaterial({
    uniforms: {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_scale: { value: 1.0 },
    },
    vertexShader: logoVert,
    fragmentShader: logoFrag,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.NormalBlending,
  })

  const lightTex = new THREE.TextureLoader().load(entelecheiaLogo)
  lightTex.generateMipmaps = false
  lightTex.minFilter = THREE.LinearFilter
  lightTex.magFilter = THREE.LinearFilter

  lightMaterial = new THREE.ShaderMaterial({
    uniforms: {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_scale: { value: 1.0 },
      u_texture: { value: lightTex },
    },
    vertexShader: logoVert,
    fragmentShader: logoLightFrag,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.NormalBlending,
  })

  logoMesh = new THREE.Mesh(geometry, theme.value === 'dark' ? logoMaterial : lightMaterial)
  logoMesh.position.z = -1
  scene.add(logoMesh)
}

function init() {
  if (!containerRef.value) return

  clock = new THREE.Clock()
  clock.start()

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)
  containerRef.value.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
  camera.position.z = 1

  createStarfield()
  createLogoPlane()

  if (theme.value !== 'dark') {
    starPoints.visible = false
    starTwinkle.visible = false
  }

  logoMaterial.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)

  updateScale()

  animate()
}

function animate() {
  animationId = requestAnimationFrame(animate)

  if (!visible) return

  if (theme.value === 'dark') {
    const t = clock.getElapsedTime()

    logoMaterial.uniforms.u_time.value = t

    starPoints.rotation.y += 0.00018
    starPoints.rotation.x += 0.00006
    starMaterial.opacity = 0.38 + 0.12 * Math.sin(t * 0.7)

    starTwinkle.rotation.y -= 0.00012
    starTwinkle.rotation.z += 0.00004
    twinkleMaterial.opacity = 0.22 + 0.12 * Math.sin(t * 0.5 + 1)
  } else {
    const t = clock.getElapsedTime()
    lightMaterial.uniforms.u_time.value = t
  }

  renderer.render(scene, camera)
}

function getScale(w: number, h: number) {
  const aspect = w / h
  if (aspect < 1.0) return Math.min(5.0, 1.6 / aspect)
  return 1.0
}

function updateScale() {
  if (!renderer || !logoMaterial || !lightMaterial) return
  const s = getScale(window.innerWidth, window.innerHeight)
  logoMaterial.uniforms.u_scale.value = s
  lightMaterial.uniforms.u_scale.value = s
}

function onResize() {
  if (!renderer) return
  renderer.setSize(window.innerWidth, window.innerHeight)
  if (logoMaterial) {
    logoMaterial.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)
    lightMaterial!.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)
  }
  updateScale()
}

onMounted(() => {
  init()
  window.addEventListener('resize', onResize)

  const observer = new IntersectionObserver(
    ([entry]) => { visible = entry.isIntersecting },
    { threshold: 0 }
  )
  if (containerRef.value) observer.observe(containerRef.value)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  if (renderer) {
    renderer.dispose()
    containerRef.value?.removeChild(renderer.domElement)
  }
  starPoints?.geometry.dispose()
  starMaterial?.dispose()
  starTwinkle?.geometry.dispose()
  twinkleMaterial?.dispose()
  logoMaterial?.dispose()
  lightMaterial?.dispose()
  logoMesh?.geometry.dispose()
})
</script>
