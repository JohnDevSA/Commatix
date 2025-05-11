<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Mobile sidebar backdrop -->
    <div
        v-if="isSidebarOpen"
        class="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
        @click="toggleSidebar"
    ></div>

    <!-- Sidebar -->
    <aside
        class="fixed inset-y-0 left-0 z-30 w-64 transform bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0"
        :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex items-center justify-between h-16 px-4 border-b dark:border-gray-700">
        <div class="flex items-center">
          <UIcon name="i-heroicons-cube" class="w-6 h-6 text-primary" />
          <span class="ml-2 text-lg font-semibold dark:text-white">Admin Portal</span>
        </div>
        <button
            class="p-1 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="toggleSidebar"
        >
          <UIcon name="i-heroicons-x-mark" class="w-6 h-6 dark:text-white" />
        </button>
      </div>

      <nav class="p-4 space-y-1">
        <UButton
            v-for="(item, index) in menuItems"
            :key="index"
            :icon="item.icon"
            block
            variant="ghost"
            class="justify-start mb-1 text-left"
            :class="item.active ? 'bg-gray-100 dark:bg-gray-700 text-primary' : ''"
        >
          {{ item.name }}
        </UButton>
      </nav>
    </aside>

    <!-- Main content -->
    <div
        class="transition-all duration-300 ease-in-out"
        :class="isSidebarOpen ? 'lg:ml-64' : ''"
    >
      <!-- Header -->
      <header class="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
        <div class="flex items-center justify-between h-16 px-4">
          <button
              class="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              @click="toggleSidebar"
          >
            <UIcon
                :name="isSidebarOpen ? 'i-heroicons-bars-3-bottom-left' : 'i-heroicons-bars-3'"
                class="w-6 h-6 dark:text-white"
            />
          </button>

          <div class="flex items-center space-x-4">
            <UButton icon="i-heroicons-bell" variant="ghost" />
            <UDropdown :items="userMenuItems">
              <UAvatar src="https://i.pravatar.cc/150" />
            </UDropdown>
          </div>
        </div>
      </header>

      <!-- Page content -->
      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Close sidebar on mobile when clicking outside
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      isSidebarOpen.value = false;
    } else {
      isSidebarOpen.value = true;
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // Initialize on mount

  return () => {
    window.removeEventListener('resize', handleResize);
  };
});

const menuItems = [
  { name: 'Dashboard', icon: 'i-heroicons-home', active: true },
  { name: 'Users', icon: 'i-heroicons-users' },
  { name: 'Products', icon: 'i-heroicons-shopping-bag' },
  { name: 'Orders', icon: 'i-heroicons-shopping-cart' },
  { name: 'Reports', icon: 'i-heroicons-chart-bar' },
  { name: 'Settings', icon: 'i-heroicons-cog-6-tooth' }
];

const userMenuItems = [
  [
    { label: 'Profile', icon: 'i-heroicons-user-circle' },
    { label: 'Settings', icon: 'i-heroicons-cog-6-tooth' }
  ],
  [
    { label: 'Logout', icon: 'i-heroicons-arrow-right-on-rectangle' }
  ]
];
</script>