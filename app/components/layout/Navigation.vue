<template>
  <UContainer>
    <div>
      <header class="sticky top-0 z-50  shadow">
        <NavigationMenu>
          <UNavigationMenu
              :items="items"
              class="ml-5 pl-5 h-20 w-full"
          />
        </NavigationMenu>
      </header>
    </div>

  </UContainer>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Guidex',
      icon: 'i-lucide-book-open',
      to: '/getting-started'
    },
    {
      label: 'Composables',
      icon: 'i-lucide-database',
      to: '/composables'
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      to: '/components',
      active: true
    }
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      badge: '3.8k',
      to: 'https://github.com/nuxt/ui',
      target: '_blank'
    }
  ]
])
</script>


<style scoped>

</style>