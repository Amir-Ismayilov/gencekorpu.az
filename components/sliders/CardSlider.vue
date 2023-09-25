<template>
  <section class="section_sliders_area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1>{{ $t('completed_projects') }}</h1>
        </div>
        <div class="section_card_slider">
          <div class="swiper-button-prev" slot="button-prev"></div>
          <swiper :options="swiperOptions">
            <swiper-slide class="col-6 col-sm-6 col-md-4 col-lg-2"
                          v-for="(completedProject, index) in completedProjectsAll" :key="index">
              <ItemSlider
                :ProjectsId="completedProject.id"
                :ProjectsImage="completedProject.image"
                :ProjectsTitle="completedProject.title"
                :ProjectsDescription="completedProject.content"
              />
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>

          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ItemSlider from "@/components/sliders/ItemSlider";
import {mapGetters} from "vuex";

export default {
  name: "CardSlider",
  components: {
    ItemSlider
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 10000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
    ...mapGetters({completedProjectsAll: "module/projects/completed-projects/getAllCompletedProjects"}),
  },
}
</script>

<style scoped>
.section_sliders_area {
  padding: 60px 0;
}

.section_sliders_area h1 {
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  color: var(--main-font-color);
}

.section_card_slider {
  display: flex;
  align-items: center;
}

.swiper-button-prev, .swiper-button-next {
  color: var(--light-mode-bg-color-main);
  position: static;
}

</style>
