<template>
    <MainLayout>
        <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[40%]">
                    <img
                        v-if = "currentImage"
                        :src="currentImage"
                        class="rounded-lg object-fit"
                    >
                    <div v-if = "images[0] !== ''" class = "flex items-center justify-center mt-2">
                        <div v-for = "image in images">
                            <img
                            @mouseover="currentImage = image"
                            @click = "currentImage = image"
                            width = "70"
                            class="rounded-md object-fit border-[3px] cursor-pointer"
                            :src = "image"
                            :class="currentImage === image ? 'border-[#FF5353]' : ''"
                            >
                        </div>
                    </div>
                </div>
                <div class="md:w-[60%] bg-white p-3 rounded-lg">
                    <div v-if = "true">
                        <p class="mb-2">Title</p>
                        <p class = "font-light text-[12px] mb-2">Description</p>
                    </div>
                    <div class="flex items-center pt-1.5">
                        <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
                            <Icon name="material-symbols:star-rounded" class="-mt-[17px]" size="12"/>
                        </span>
                        <p class="@text-[#FF5353]">5% off</p>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>

let currentImage = ref(null)

onMounted(() => {
    watchEffect(()=>{
        images.value[0] = 'https://fastly.picsum.photos/id/19/800/800.jpg?hmac=3TKnQ3WBqP-IjatPrA6WEPZGkNdbNu0pG0gTtn3cDbA'
        currentImage.value ='https://fastly.picsum.photos/id/19/800/800.jpg?hmac=3TKnQ3WBqP-IjatPrA6WEPZGkNdbNu0pG0gTtn3cDbA'
    })
})

const images = ref([
    '',
    'https://fastly.picsum.photos/id/77/800/800.jpg?hmac=ifIZafQ-dzUzg2ohWpDHOcO1LFzTdlOclojb5-Rcaa0',
    'https://fastly.picsum.photos/id/100/800/800.jpg?hmac=a2loVcr-8SrMJLE1eVOwuO2P0dK05kvAZ4YifobFzVA',
    'https://fastly.picsum.photos/id/10/800/800.jpg?hmac=SaapDzK-vdMhnDRoUKZjiLf320I9R3i5E4MZ8kBgPMk',
    'https://fastly.picsum.photos/id/19/800/800.jpg?hmac=3TKnQ3WBqP-IjatPrA6WEPZGkNdbNu0pG0gTtn3cDbA',
])
import MainLayout from '~/layouts/MainLayout.vue';
</script>

I