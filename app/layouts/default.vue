<template>
  <div class="bg-stone-500 text-stone-950 grid gap-2 p-5 grid-cols-[250px_1fr]">
    <LayoutSidebar />
    <!-- Main Content -->
    <div class="bg-white rounded-lg pb-4 shadow h-[200vh] " >
        <slot />
    </div>
  </div>
</template>
