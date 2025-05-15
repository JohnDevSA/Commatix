<template>
  <!-- Sidebar -->
<!--  <aside-->
<!--      class="transition-all duration-300 text-black"-->
<!--      :class="sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'"-->
<!--      style="border: 2px solid green"-->
<!--  >-->
    <div class="overflow-y-scroll sticky top-4 h-[calc(90vh-32px-48px)]">
      <p>Hi therex</p>
<!--      <div class="text-xl font-bold">Commatixx</div>-->
<!--      <nav class="space-y-2">-->
<!--        <NuxtLink-->
<!--            v-for="link in links"-->
<!--            :key="link.to"-->
<!--            :to="link.to"-->
<!--            class="block px-4 py-2 rounded hover:bg-gray-800 transition-colors"-->
<!--        >-->
<!--            <span class="inline-flex items-center space-x-2">-->
<!--              <i :class="link.icon" class="w-5 h-5"></i>-->
<!--              <span>{{ link.label }}</span>-->
<!--            </span>-->
<!--        </NuxtLink>-->
<!--      </nav>-->
    </div>
<!--  </aside>-->
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const sidebarOpen = ref(true)

// if (process.client) {
//   const stored = localStorage.getItem('sidebar')
//   sidebarOpen.value = stored !== 'false'
//
//   watch(sidebarOpen, (val) => {
//     localStorage.setItem('sidebar', val.toString())
//   })
// }

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

// Example navigation links
const links = [
  { label: 'Dashboard', icon: 'i-heroicons-home', to: '/' },
  { label: 'Users', icon: 'i-heroicons-user-group', to: '/users' },
  { label: 'Settings', icon: 'i-heroicons-cog-6-tooth', to: '/settings' }
]
</script>