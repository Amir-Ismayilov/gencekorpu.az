<template>
  <section class="section_sliders_area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!--          <h1>TAMAMLANMIŞ LAHİYƏLƏR</h1>-->
          <h1>{{ $t('HELLO') }}</h1>
        </div>
        <div class="section_card_slider">
          <div class="swiper-button-prev" slot="button-prev"></div>
          <swiper :options="swiperOptions">
            <swiper-slide class="col-6 col-sm-6 col-md-4 col-lg-2"
                          v-for="(completedProject, index) in completedProjectsAll" :key="index">
              <ItemSlider
                :ProjectsId="completedProject.id"
                :ProjectsImage="completedProject.image"
                :ProjectsTitle="completedProject.title_az"
                :ProjectsDescription="completedProject.content_az"
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
          delay: 5000,
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
    ...mapGetters({completedProjectsAll: "module/projects/completed-projects/getAllCompletedProjects"}),
  },
}
</script>

<style scoped>
.section_sliders_area {
  padding: 60px 0;
  background-color: var(--light-mode-bg-color-gray-2);
}

.section_sliders_area h1 {
  text-align: center;
  margin-bottom: 30px;
  filter: drop-shadow(3px -2px 2px black);
}

.section_card_slider {
  display: flex;
  align-items: center;
}

.swiper-button-prev, .swiper-button-next {
  color: #ffffff;
  position: static;
}
</style>
