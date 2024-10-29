<template>
  <nav class="navbar">
    <Menubar :model="items" class="menu-bar">
      <template #start>
        <img src="/img/logo.svg" alt="Logo" class="navbar-logo" />
      </template>
    </Menubar>
  </nav>
</template>

<script setup>
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";

const router = useRouter();

const items = [
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "About",
    icon: "pi pi-info-circle",
    command: () => {
      router.push("/about");
    },
  },
  {
    label: "Services",
    icon: "pi pi-briefcase",
    items: [
      {
        label: "Consulting",
        icon: "pi pi-comments",
        to: "/services/consulting",
      },
      {
        label: "Development",
        icon: "pi pi-cog",
        to: "/services/development",
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    command: () => {
      router.push("/contact");
    },
  },
];
</script>

<style scoped>
.menu-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
