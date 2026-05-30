<template>
  <div class="relative min-h-screen">
    <ThreeBackground />
    <NavBar />
    <main class="relative z-10">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import ThreeBackground from './components/ThreeBackground.vue'
import NavBar from './components/NavBar.vue'
</script>
