<script setup lang="ts">
import { ref } from "vue";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Technologies", href: "/#technologies" },
  { label: "Projects", href: "/#projects" },
  /* { label: "Blog", href: "/blog" }, */
  { label: "Contact", href: "/#contact" },
];

const mobileOpen = ref(false);

function close() {
  mobileOpen.value = false;
}
</script>

<template>
  <nav
    class="sticky top-0 z-50 border-b border-purple-500/10 bg-canvas/80 backdrop-blur-xl"
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:justify-center"
    >
      <a href="/" class="text-lg font-bold text-white lg:hidden">Branell</a>

      <ul
        class="hidden items-center gap-8 text-base font-medium text-gray-400 lg:flex"
      >
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="transition-colors hover:text-purple-400">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button
        class="rounded-md p-2 text-gray-400 transition-colors hover:bg-surface hover:text-white lg:hidden"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line v-if="!mobileOpen" x1="3" y1="6" x2="21" y2="6" />
          <line v-if="!mobileOpen" x1="3" y1="12" x2="21" y2="12" />
          <line v-if="!mobileOpen" x1="3" y1="18" x2="21" y2="18" />
          <line v-if="mobileOpen" x1="18" y1="6" x2="6" y2="18" />
          <line v-if="mobileOpen" x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="border-t border-purple-500/10 px-6 pb-4 lg:hidden"
      >
        <ul
          class="flex flex-col gap-3 pt-3 text-base font-medium text-gray-400"
        >
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-md px-3 py-2 transition-colors hover:bg-surface hover:text-purple-400"
              @click="close"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
