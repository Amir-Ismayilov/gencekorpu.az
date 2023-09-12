<template>
  <!-- Main slider section -->
  <section class="section_sliders_area">
    <div class="container-fluid">
      <div class="row">

        <!-- Swiper container -->
        <swiper :options="swiperOptions">

          <!-- Slides loop -->
          <swiper-slide
            v-for="(slider, index) in sliders"
            :key="index"
            class="my_swiper">

            <!-- Single slide content -->
            <div class="slider_wrapper" :style="{ 'background-image': `url(${ slider.image})` }">

              <!-- Slider main info -->
              <div class="slider_main_info">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <h2>{{ slider.title }}</h2>
                      <span v-html="slider.content_az"></span>
                      <br>
                      <nuxt-link :to="slider.url">Kecid et</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </swiper-slide>

          <!-- Swiper controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>

        </swiper>
      </div>
    </div>
  </section>
</template>


<script>
import {mapGetters} from "vuex";

export default {
  name: "IndexSlider",
  data() {
    return {
      slides: [1, 2, 3, 4, 5],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 10000,
        },
        loop: true
      }
    }
  },
  computed: {
    ...mapGetters({
      sliders: "module/sliders/getAllSliders"
    }),
  },
}
</script>

<style scoped>
.slider_wrapper {
  height: 100vh;
  position: relative;
  background-position: center;
  background-size: cover;
}

.slider_main_info {
  position: absolute;
  left: 60px;
  bottom: 25vh;
}

.slider_main_info h2 {
  color: var(--main-font-color);
  font-size: 60px;
  font-weight: 700;
  filter: drop-shadow(2px 4px 6px #000000);
}

.slider_main_info span {
  color: var(--light-mode-font-color-white);
  display: block;
  margin: 10px 0;
  font-size: 32px;
  font-weight: 700;
  filter: drop-shadow(2px 4px 6px #000000);
}

.slider_main_info a {
  padding: 10px 15px;
  background-color: var(--light-mode-bg-color-main);
  border-radius: 5px;
  filter: drop-shadow(2px 4px 6px #000000);
}

.my_swiper img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.swiper-button-prev, .swiper-button-next {
  top: 55%;
}

.swiper-button-next, .swiper-button-prev {
  color: #ffffff;
  margin: 10px;
  display: block;
  transition: 2s;
  user-select: none;
}

.swiper-button-prev:after {
  margin-right: 8px;
}

.swiper-button-next:after {
  margin-left: 8px;
}

.swiper-button-next:hover, .swiper-button-prev:hover {
  opacity: unset;
}

.animated-text {
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .slider_main_info h2 {
    font-size: 32px;
    font-weight: 600;
  }

  .slider_main_info span {
    margin: 10px 0;
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
