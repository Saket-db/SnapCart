<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <!-- Top Menu -->
    <div id="TopMenu" class="w-full bg-[#FAFAFA] border-b md:block hidden">
      <ul class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px]">
        <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
          Sell on SnapCart
        </li>
        <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
          Cookie Preferences
        </li>
        <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
          Help
        </li>
        <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
          Buyer Protection
        </li>
        <li class="px-3 hover:text-[#FF4646] cursor-pointer flex items-center">
          <Icon name="ic:sharp-install-mobile" size="17" />
          App
        </li>
        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="relative flex items-center px-2.5 hover:text-[#FF4646] h-full cursor-pointer"
          :class="isAccountMenu ? 'bg-white border z-40 shadow-[0_15px_100px_20px_rgba(0,0,0,0.3)]' : 'border border-[#FAFAFA]'"
        >
          <Icon name="ph:user-thin" size="17" />
          Account
          <Icon name="mdi:chevron-down" size="15" class="ml-5" />
          <div
            id="AccountMenu"
            v-if="isAccountMenu"
            class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] border-x border-b left-[-100px]"
          >
            <div>
              <div class="font-semibold text-[15px] my-4 px-3">
                Welcome to SnapCart!
              </div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink
                  to="/login"
                  class="bg-[#FF4646] text-center w-full text-[16px] rounded-sm font-light px-1 py-2 text-white"
                >
                  Login / Register
                </NuxtLink>
              </div>
            </div>
            <div class="border-b">
              <ul class="bg-white">
                <li
                  @click="navigateTo('/orders')"
                  class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
                >
                  My orders
                </li>
                <li
                  v-if="true"
                  class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
                >
                  Sign Out
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- Header -->
    <div id="MainHeader" class="flex items-center w-full bg-white">
      <div class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-4 mx-auto">
        <NuxtLink to="/" class="min-w-[170px]">
          <img
            width="170"
            src="https://res.cloudinary.com/dyy1u7wvc/image/upload/v1748030628/SnapLogo_ca4n50.png"
          />
        </NuxtLink>

        <!-- Search Bar -->
        <div class="max-w-[700px] w-full md:block hidden">
          <div class="relative">
            <div class="flex items-center border-2 border-[#FF4646] rounded-md w-full">
              <input
                class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                placeholder="Kitchen Accessories"
                type="text"
                v-model="searchItem"
              />
              <Icon name="eos-icons:loading" v-if="isSearching" size="25" class="mr-2" />
              <button class="flex items-center h-full p-1.5 px-2 bg-[#ff4646]">
                <Icon name="ph:magnifying-glass" size="20" color="#ffffff" />
              </button>
            </div>

            <!-- Search Results (Demo) -->
            <div class="absolute bg-white max-w-[700px] w-full">
              <div v-if="false" class="p-1">
                <NuxtLink
                  to="/item/1"
                  class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                >
                  <div class="flex items-center">
                    <img
                      class="rounded-md"
                      width="40"
                      src="https://fastly.picsum.photos/id/82/300/300.jpg?hmac=VnMN7sxSNePsckkp3Rql5brpsqFiYq3Hb1S-RlIjkd0"
                    />
                    <div class="truncate ml-2">TESTING</div>
                    <div class="truncate">$ 99.80</div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Cart Icon -->
        <NuxtLink to="/shoppingcart" class="flex items-center hover:text-[#FF4646]">
          <button
            class="relative md:block hidden "
            @mouseenter="isCartHover = true"
            @mouseleave="isCartHover = false"
          >
          <div class="min-w-[40px]">
            <Icon
            name="ph:shopping-cart-simple-light"
            size="32"
            :color="isCartHover ? '#FF4646' : ''"
            />
          </div>
          <span
            class="absolute flex items-center justify-center right-[-3px] top-0 bg-[#FF4646] min-w-[17px] text-xs text-white px-0.5 rounded-full"
          >
            0
          </span>
          </button>
        </NuxtLink>

        <!-- Mobile Menu Icon -->
        <button
          @click="userStore.isMenuOverlay = true"
          class="md:hidden block rounded-full p-2.5 -mt-[4px] hover:bg-gray-200"
        >
          <Icon name="material-symbols:menu" size="24" />
        </button>
      </div>
    </div>
  </div>

  <!-- Loading Overlay -->
    <Loading v-if="userStore.isLoading" />

    <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
    <slot />

    <Footer v-if="!userStore.isLoading"/>
</template>




<script setup>
let isCartHover = ref(false)
let isAccountMenu = ref(false)
let isSearching = ref(true)
let searchItem = ref('')


import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
</script>
