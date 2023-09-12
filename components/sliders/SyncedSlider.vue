<template>
  <section class="section_synced_slider">
    <div class="swiper-button-prev" slot="button-prev"></div>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(slider, index) in sliders" :key="index">
        <img :src="slider.src" :alt="slider.id">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="swiper-button-next" slot="button-next"></div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SyncedSlider",
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        },
      }
    };
  },
  computed: {
    ...mapGetters({
      sliders: "module/galleries/getAllGalleries"
    }),
  },
}
</script>

<style scoped>
.section_synced_slider {
  padding: 60px 0;
  display: flex;
  align-items: center;
  background-color: var(--white-bg-color);
}

.section_synced_slider img {
  width: 100%;
}

.swiper-button-prev, .swiper-button-next {
  position: static;
}
</style>
