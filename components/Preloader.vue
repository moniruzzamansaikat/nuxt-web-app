<!-- components/Preloader.vue -->
<template>
  <div v-if="isLoading" class="preloader">
    <!-- You can customize your preloader content here -->
    <div class="spinner"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useNuxtApp } from '#app';

// Set up a reactive variable to control the loading state
const nuxtApp = useNuxtApp();
const isLoading = ref(false);

// Watch the loading state of the app
watch(
  () => nuxtApp.$loading,
  (loading) => {
    isLoading.value = loading;
  },
);
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8); /* Adjust background color */
  z-index: 9999; /* Make sure it overlays other elements */
}

.spinner {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
