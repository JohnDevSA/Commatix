<template>
  <div class="grid gap-4 p-4 grid-cols-[220px,_1fr]">
    <LayoutSidebar />
    <!-- Main Content -->
    <div class="bg-white rounder-lg pb-4 shadow h-[200vh]" >
      <h1 class="text-4xl font-bold text-blue-600">
        Tailwind CSS is working!
      </h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Test Button
      </button>
        <slot />
    </div>
  </div>
</template>
