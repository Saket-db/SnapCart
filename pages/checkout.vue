<template>
  <MainLayout>
    <div id = "CheckoutPage" class = "mt-4 max-w-[1200px] mx-auto px-2">
        <div class="md:flex gap-4 justify-between mx-auto w-full">
            <div class="md:w-[65%]">
                <div class = "bg-white rounded-lg p-4">
                    <div class="text-xl font-semibold mb-2">Shipping Address</div>

                    <div v-if = 'false'>
                        <NuxtLink 
                        to ="/address"
                        class="flex items-center pb-2 text-blue-500 hover:text-red-400">

                        <Icon name = "mdi:plus" size="18" class="mr-2" />
                        Update Address
                        </NuxtLink>

                        <div class = "pt-2 border-1">
                            <div class = "underline pb-1">Delivery Address</div>
                            <div>Contact Name:</div>
                            <ul class = 'text-xs'>
                                <li class="flex items-center gap-2">
                                    <div>Contact Name:</div>
                                    <div class="font-bold">Test</div>
                                </li>

                                <li class="flex items-center gap-2">
                                    <div>Address:</div>
                                    <div class="font-bold">Test</div>
                                </li>

                                <li class="flex items-center gap-2">
                                    <div>Zip Code:</div>
                                    <div class="font-bold">Test</div>
                                </li>

                                
                                <li class="flex items-center gap-2">
                                    <div>City:</div>
                                    <div class="font-bold">Test</div>
                                </li>
                                
                                <li class="flex items-center gap-2">
                                    <div>Country:</div>
                                    <div class="font-bold">Test</div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                    <NuxtLink  v-else to = "/address"
                    class = "flex items-center text-blue-500 hover:text-red-400">
                    <Icon name ="mdi:plus" size="18" class = "mr-2"/>
                       Add New Address
                    </NuxtLink>
                </div>
                <div id = "items" class="bg-white rounded-lg p-4 mt-4">
                    <div v-for = "product in products">
                        <CheckoutItem :product="product" />
                    </div>
                </div>
            </div>
            <!-- <div v-for = "product in products">
                <CheckoutItem :product="product" /> -->
            <!-- </div> -->
             <div class="md:hidden block my-4"></div>

             <div class="md:w-[35%]">
                <div id="PlaceOrder" class="bg-white rounded-lg p-4">
                    <div class="text-2xl font-extrabold mb-2">Summary</div>

                    <div class="flex items-center justify-between my-4">
                        <div>Total Shipping</div>
                        <div>Free</div>
                    </div>


                    <div class="border-t" />

                    <div class="flex items-center justify-between my-4">
                        <div class="font-semibold">Total</div>
                        <div class="text-2xl font-semibold">
                            $ <span class="font-extrabold">{{ total / 100 }}</span>
                        </div>
                    </div>
                    <form @submit.prevent = "pay()">
                        <div class="border border-gray-500 p-2 rounded-sm" 
                        id = "card-element"/>

                        <p
                            id = 'card-error'
                            role ='alert'
                            class="text-red-700 text-center font-semibold"
                        />
                        <button
                        :disabled="isProcessing"
                        type="submit"
                        class = 'mt-4
                        bg-gradient-to-r
                        from-[#fe630c]
                        to-[#ff3200]
                        w-full
                        text-white
                        text-[21px]
                        font-semibold
                        p-1.5
                        rounded-full'
                        :class="isProcessing ? 'opacity-70': 'opacity-100'">
                        
                        <Icon v-if = "isProcessing" name="eos-icons:loading" />
                        <div v-else>Place Order</div>
                    </button>
                    </form>

                </div>
                <div class="bg-white rounded-lg p-4 mt-4">
                <div class="text-lg font-semibold mb-2 mt-2">SnapCart</div>
                <p class="my-2">
                SnapCart keeps your information and payment safe
                </p>
                </div>
            </div>
        </div>
    </div>

  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '~/stores/user'
import MainLayout from '~/layouts/MainLayout.vue'

const userStore = useUserStore()
const route = useRoute()

let stripe = null
let elements = null
let card =  null
let form = null
let total = ref(0)
let clientSecret = null
let currentAddress =ref(null)
let isProcessing = ref(false)

onMounted(() => {
//   setTimeout(() => userStore.isLoading = false, 200)

isProcessing = true

userStore.checkout.forEach(item => {
    total.value += item.price * item.quantity
})
})

watch(() => total.value, () =>{
    if(total.value >0 )
        stripeInit()
})

const stripeInit = async () =>{}

const pay =async() =>{}

const createOrder = async(stripeId) =>{}

const showError = (errorMsgText) =>{}

const products = [
  { id: 1, title: "Title 1", description: "Description is...", url: "https://fastly.picsum.photos/id/7/800/800.jpg?hmac=EZuxGXwljeh2t73dLjqVH54VQdnORmi50-m5W5m6M6g", price: 9889 },
  { id: 2, title: "Title 2", description: "Description is...", url: "https://fastly.picsum.photos/id/77/800/800.jpg?hmac=ifIZafQ-dzUzg2ohWpDHOcO1LFzTdlOclojb5-Rcaa0", price: 9689 },
  { id: 3, title: "Title 3", description: "Description is...", url: "https://fastly.picsum.photos/id/71/800/800.jpg?hmac=YMpGajiRfAQpkjnUR7FkpNcgDqj3dQDYg6wocQBppRI", price: 3889 },
]



</script>
