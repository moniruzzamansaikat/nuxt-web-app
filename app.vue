<script>
import Navbar from "@/components/Navbar.vue";
 
export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <NuxtLayout>
    <Navbar />
    <!-- <Preloader />  -->
    <NuxtPage />
  </NuxtLayout>
</template>
