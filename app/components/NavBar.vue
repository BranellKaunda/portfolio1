<script setup lang="ts">
const links = [
  { label: "Home", href: "#hero" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <nav
    class="sticky top-0 z-50 border-b border-purple-500/10 bg-canvas/80 backdrop-blur-xl"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#hero" class="text-xl font-bold text-white">Branell</a>
      <ul class="flex items-center gap-8 text-sm font-medium text-gray-400">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="transition-colors hover:text-purple-400">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
