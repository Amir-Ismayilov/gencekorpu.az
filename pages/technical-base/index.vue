<template>
  <section class="section_technical_base">
    <div class="container" v-for="(technicalBaseItem, indexContainer) in technicalBaseInfo" :key="indexContainer">
      <div class="row">
        <div class="col-12">
          <div class="technical_base_title">
            <h1>{{ technicalBaseItem.title }}</h1>
          </div>
          <div class="technical_base_content" v-html="technicalBaseItem.content"></div>
        </div>

        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 image"
          v-for="(imageItem, imageIndex) in technicalBaseItem.images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + imageItem.src + ')' }">
        </div>

        <gallery v-if="technicalBaseItem.images && technicalBaseItem.images.length > 0" :images="images" :index="index" @close="index = null"></gallery>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
import VueGallery from 'vue-gallery';

export default {
  name: "index",
  components: {
    'gallery': VueGallery
  },
  data() {
    return {
      current_index: 0,
      images: [],
      index: null
    };
  },
  computed: {
    ...mapGetters({technicalBaseInfo: "module/technical-base/getAllTechnicalBase"}),
  },
  mounted() {
    this.formatImages();
    if (Array.isArray(this.technicalBaseInfo) && this.$route.params.id) {
      this.current_index = this.technicalBaseInfo.findIndex(item => item.id === parseInt(this.$route.params.id));
    }
  },
  methods: {
    formatImages() {
      if (this.technicalBaseInfo && this.technicalBaseInfo.length > 0 && Array.isArray(this.technicalBaseInfo[0].images)) {
        this.images = this.technicalBaseInfo[0].images.map(item => item.src);
      }
    }
  },
}
</script>

<style scoped>
.section_technical_base {
  padding: 70px 0;
  background-color: var(--white-bg-color);
}

.technical_base_title h1 {
  text-align: center;
  color: var(--main-font-color);
  margin-bottom: 30px;
  filter: drop-shadow(3px -2px 2px black);
}

.technical_base_content {
  margin: 30px 0;
}

.section_all_pictures h1 {
  text-align: center;
  color: var(--main-font-color);
  margin-bottom: 50px;
  filter: drop-shadow(3px -2px 2px black);
}

.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 5px solid #fff;
  height: 250px;
  cursor: pointer;
  transition: 0.5s;
  user-select: none;
}

.image:hover {
  filter: grayscale(50%);
  transform: scale(1.01);
}

.blueimp-gallery > .slides > .slide > .slide-content {
  margin-left: -22px !important;
}
</style>
