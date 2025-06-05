<template>
  <MainLayout>
    <div id="ItemPage" class="mt-8 max-w-5xl mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Product Images -->
        <div class="w-full md:w-2/5 flex flex-col items-center">
          <div class="w-full bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
              v-if="currentImage"
              :src="currentImage"
              class="rounded-lg w-full h-96 object-cover transition-all duration-200 border border-gray-200"
              alt="Product Image"
            />
            <div class="flex gap-2 mt-4">
              <img
                v-for="(image, idx) in images"
                :key="image + idx"
                v-if="image"
                @mouseover="currentImage = image"
                @click="currentImage = image"
                class="w-16 h-16 rounded-md border-2 object-cover cursor-pointer transition-all duration-150"
                :class="currentImage === image ? 'border-orange-500 ring-2 ring-orange-400' : 'border-gray-200'"
                :src="image"
                alt="Thumbnail"
              />
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="w-full md:w-3/5 bg-white p-6 rounded-lg shadow flex flex-col justify-between">
          <!-- Info -->
          <div>
            <h1 class="text-2xl font-bold mb-2 text-gray-800">Title</h1>
            <p class="text-gray-500 text-sm mb-4">Description</p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-yellow-300 mr-1">
                <Icon name="material-symbols:star-rounded" class="-mt-[2px]" size="14" />
              </span>
              <span class="text-orange-500 font-semibold">5% off</span>
            </div>
            <div class="flex items-center mb-3">
              <Icon v-for="i in 5" :key="i" name="ic:baseline-star" color="#FF5353" />
              <span class="text-sm font-light ml-2 text-gray-600">5 213 Reviews • 1,000+ orders</span>
            </div>
            <div class="border-b mb-4" />
            <div class="flex items-center gap-2 mb-2">
              <div class="text-2xl font-bold text-gray-900">${{ priceComputed }}</div>
              <span class="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded">40% Off</span>
            </div>
            <p class="text-green-700 text-xs font-semibold">Free 11-day delivery over $88.28</p>
            <p class="text-green-700 text-xs font-semibold mb-4">Free Shipping</p>
            <button
              @click="addToCart"
              :disabled="isInCart"
              class="w-full py-3 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 shadow hover:from-orange-600 hover:to-yellow-500 transition-all duration-200 disabled:opacity-50"
            >
              <span v-if="isInCart">Added to Cart</span>
              <span v-else>Add to Cart</span>
            </button>
          </div>
          <!-- Live Stream -->
          <div class="mt-8">
            <h2 class="text-xl font-bold mb-3">🎥 Live Seller Stream</h2>
            <div class="aspect-video w-full rounded shadow border bg-black overflow-hidden">
              <video
                ref="videoRef"
                controls
                autoplay
                muted
                playsinline
                class="w-full h-full rounded"
                poster="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
              />
            </div>
            <p v-if="!videoLoaded" class="text-red-500 text-sm mt-3">
              ⚠️ Stream not active or failed to load.
            </p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '~/stores/user'
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, nextTick } from 'vue'
import Hls from 'hls.js'

const useStore = useUserStore()
const route = useRoute()
const videoRef = ref(null)
const playbackId = "0e7dyhxvuivx1rpm"
const streamUrl = `https://cdn.livepeer.com/hls/${playbackId}/index.m3u8`
const videoLoaded = ref(false)

const images = ref([
  'https://fastly.picsum.photos/id/77/800/800.jpg?hmac=ifIZafQ-dzUzg2ohWpDHOcO1LFzTdlOclojb5-Rcaa0',
  'https://fastly.picsum.photos/id/100/800/800.jpg?hmac=a2loVcr-8SrMJLE1eVOwuO2P0dK05kvAZ4YifobFzVA',
  'https://fastly.picsum.photos/id/10/800/800.jpg?hmac=SaapDzK-vdMhnDRoUKZjiLf320I9R3i5E4MZ8kBgPMk',
  'https://fastly.picsum.photos/id/19/800/800.jpg?hmac=3TKnQ3WBqP-IjatPrA6WEPZGkNdbNu0pG0gTtn3cDbA'
])
const currentImage = ref(images.value[0])

const priceComputed = computed(() => '26.40')

const isInCart = computed(() => {
  return useStore.cart.some(prod => route.params.id == prod.id)
})

const addToCart = () => {
  alert('Added')
}

onMounted(async () => {
  await nextTick()
  // Always set the first image as default on mount
  currentImage.value = images.value[0]

  if (!videoRef.value) return

  if (Hls.isSupported()) {
    const hls = new Hls()
    hls.loadSource(streamUrl)
    hls.attachMedia(videoRef.value)

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      videoLoaded.value = true
      videoRef.value.play().catch(err => {
        console.warn("Autoplay failed:", err)
      })
    })

    hls.on(Hls.Events.ERROR, (_, data) => {
      console.error("HLS error:", data)
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            hls.startLoad()
            break
          case Hls.ErrorTypes.MEDIA_ERROR:
            hls.recoverMediaError()
            break
          default:
            hls.destroy()
            videoLoaded.value = false
            break
        }
      }
    })
  } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari & iOS
    videoRef.value.src = streamUrl
    videoRef.value.addEventListener('loadedmetadata', () => {
      videoLoaded.value = true
      videoRef.value.play().catch(err => {
        console.warn("Autoplay failed:", err)
      })
    })
  } else {
    console.warn('This browser does not support HLS playback.')
    videoLoaded.value = false
  }
})
</script>