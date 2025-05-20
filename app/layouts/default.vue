<template>
  <LayoutNavigation />
  <div
      class="bg-stone-500 text-stone-950  gap-2 p-4 overflow-auto h-[calc(100vh-3.5rem)]"
      :class="{
      'grid grid-cols-[250px_1fr]': showSidebar,
      'grid grid-cols-1': !showSidebar
    }"
  >
    <LayoutSidebar />
    <!-- Main Content -->
    <div class="bg-white rounded-lg pb-4 shadow h-[90vh] " >
        <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
  const showSidebar = ref(true);
</script>