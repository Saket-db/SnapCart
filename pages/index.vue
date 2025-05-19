<template>
    <MainLayout>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                <div v-if="products" v-for="product in products" :key="product">
                    <ProductComponent :product="product"/>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import ProductComponent from '~/components/ProductComponent.vue';

const products = [
    {id: 1, title: "Title 1", description: "Description is...", url:"https://fastly.picsum.photos/id/7/800/800.jpg?hmac=EZuxGXwljeh2t73dLjqVH54VQdnORmi50-m5W5m6M6g", price:9889},
    {id: 2, title: "Title 2", description: "Description is...", url:"https://fastly.picsum.photos/id/77/800/800.jpg?hmac=ifIZafQ-dzUzg2ohWpDHOcO1LFzTdlOclojb5-Rcaa0", price:9689},
    {id: 3, title: "Title 3", description: "Description is...", url:"https://fastly.picsum.photos/id/71/800/800.jpg?hmac=YMpGajiRfAQpkjnUR7FkpNcgDqj3dQDYg6wocQBppRI", price:3889},
    {id: 4, title: "Title 4", description: "Description is...", url:"https://fastly.picsum.photos/id/72/800/800.jpg?hmac=yUlan-c5Ns8rxfyTLLnVDNHAXBo68XLUgnr_IrGCgS0", price:8871},
    {id: 5, title: "Title 5", description: "Description is...", url:"https://fastly.picsum.photos/id/74/800/800.jpg?hmac=Yutsm46dgDawaiRdN9msXB--hf1oPGE3wr96b_aSdY0", price:4758},
    {id: 6, title: "Title 6", description: "Description is...", url:"https://fastly.picsum.photos/id/75/800/800.jpg?hmac=wl9nxuab8VcA4ejhXLQm2UCQlTAuyH_iU8ShOixBTQI", price:8989},
    {id: 7, title: "Title 7", description: "Description is...", url:"https://fastly.picsum.photos/id/75/800/800.jpg?hmac=wl9nxuab8VcA4ejhXLQm2UCQlTAuyH_iU8ShOixBTQI", price:995993},
    {id: 8, title: "Title 8", description: "Description is...", url:"https://fastly.picsum.photos/id/78/800/800.jpg?hmac=byqCm2E1T6y47HsH2FOSvtYYyeXXobMWS6_sPfCH_Dw", price:38286},
    {id: 9, title: "Title 9", description: "Description is...", url:"https://fastly.picsum.photos/id/79/800/800.jpg?hmac=yHpLICMTsSvmNzDAPQ82DVER20_2hP8Tac0T4N_I2F8", price:4184},

]
</script>