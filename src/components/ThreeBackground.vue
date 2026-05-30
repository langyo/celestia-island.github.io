<template>
  <div ref="containerRef" class="fixed inset-0 z-0 pointer-events-none" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import logoVert from '../../shaders/logo.vert?raw'
import logoFrag from '../../shaders/logo.frag?raw'

const containerRef = ref<HTMLDivElement>()

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.OrthographicCamera
let logoMaterial: THREE.ShaderMaterial
let starMaterial: THREE.PointsMaterial
let twinkleMaterial: THREE.PointsMaterial
let starPoints: THREE.Points
let starTwinkle: THREE.Points
let animationId: number
let clock: THREE.Clock

function createStarfield() {
  const count = 3000
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
  gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.9)')
  gradient.addColorStop(0.3, 'rgba(200, 200, 255, 0.5)')
  gradient.addColorStop(0.6, 'rgba(150, 150, 255, 0.1)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)

  const texture = new THREE.CanvasTexture(canvas)

  const material = new THREE.PointsMaterial({
    size: 0.03,
    map: texture,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    transparent: true,
    opacity: 0.5,
  })
  starMaterial = material

  starPoints = new THREE.Points(geometry, material)
  scene.add(starPoints)

  // Second layer of stars (further back, different color)
  const count2 = 1500
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
  gradient2.addColorStop(0, 'rgba(180, 180, 255, 0.8)')
  gradient2.addColorStop(0.5, 'rgba(100, 100, 200, 0.3)')
  gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx2.fillStyle = gradient2
  ctx2.fillRect(0, 0, 32, 32)

  const material2 = new THREE.PointsMaterial({
    size: 0.02,
    map: new THREE.CanvasTexture(canvas2),
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    transparent: true,
    opacity: 0.3,
  })
  twinkleMaterial = material2

  starTwinkle = new THREE.Points(geometry2, material2)
  scene.add(starTwinkle)
}

function createLogoPlane() {
  const geometry = new THREE.PlaneGeometry(1.8, 1.8)

  logoMaterial = new THREE.ShaderMaterial({
    uniforms: {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    },
    vertexShader: logoVert,
    fragmentShader: logoFrag,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.NormalBlending,
  })

  const mesh = new THREE.Mesh(geometry, logoMaterial)
  mesh.position.z = -1
  scene.add(mesh)
}

function init() {
  if (!containerRef.value) return

  clock = new THREE.Clock()
  clock.start()

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)
  containerRef.value.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
  camera.position.z = 1

  createStarfield()
  createLogoPlane()

  logoMaterial.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)

  animate()
}

function animate() {
  animationId = requestAnimationFrame(animate)

  const t = clock.getElapsedTime()

  logoMaterial.uniforms.u_time.value = t
  logoMaterial.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)

  starPoints.rotation.y += 0.0002
  starPoints.rotation.x += 0.00008
  starMaterial.opacity = 0.4 + 0.15 * Math.sin(t * 0.7)

  starTwinkle.rotation.y -= 0.00015
  starTwinkle.rotation.z += 0.00005
  twinkleMaterial.opacity = 0.25 + 0.15 * Math.sin(t * 0.5 + 1)

  renderer.render(scene, camera)
}

function onResize() {
  if (!renderer) return
  renderer.setSize(window.innerWidth, window.innerHeight)
  if (logoMaterial) {
    logoMaterial.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)
  }
}

onMounted(() => {
  init()
  window.addEventListener('resize', onResize)
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
})
</script>
