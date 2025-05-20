<template>
  <MainLayout>
    <div id = "ShoppingCartPage"class="mt-4 max-w-[1200px] mx-auto px-2">
      <div v-if = "true" class = "h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <img
          class="mx-auto"
          width="250"
          src = "/public/cart-empty.png"
          >
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>