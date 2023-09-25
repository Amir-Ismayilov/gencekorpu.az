<template>
  <section class="section_synced_slider">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(slider, index) in sliders" :key="index"  class="col-6 col-sm-6 col-md-4 col-lg-2">
        <img :src="slider.src" :alt="slider.id">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
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
          delay: 3000,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
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
  padding: 60px 34px;
  display: flex;
  align-items: center;
  background-color: var(--white-bg-color);
}

.section_synced_slider img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 3px 4px 9px rgba(36,36,36,.15);
}
</style>
