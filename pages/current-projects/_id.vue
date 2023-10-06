<template>
  <section class="current_projects_inside">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ getCurrentProjects.title }}</h1>
        </div>

        <div class="mb-3" v-html="getCurrentProjects.content"></div>

        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 image"
          v-for="(imageItem, imageIndex) in getCurrentProjects.images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + imageItem.src + ')' }">
        </div>

        <gallery v-if="images.length > 0" :images="images" :index="index" @close="index = null"></gallery>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import VueGallery from 'vue-gallery';

export default {
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
    ...mapGetters({currentProjects: "module/projects/current-projects/getAllCurrentProjects"}),
  },

  mounted() {
    this.formatImages();
    this.current_index = this.currentProjects.findIndex(image => image.id === parseInt(this.$route.params.id));
  },

  methods: {
    formatImages() {
      if (this.getCurrentProjects && this.getCurrentProjects.images) {
        this.images = this.getCurrentProjects.images.map(image => image.src);
      }
    }
  },

  async asyncData({store, route}) {
    await store.dispatch('module/projects/current-projects/getCurrentProjectsArray')
    let response = await store.dispatch('module/projects/current-projects/getCurrentProjectsByIdApi', route.params.id)
    return {getCurrentProjects: response}
  },
}
</script>

<style scoped>
.current_projects_inside {
  padding: 70px 0;
}

.current_projects_inside h1 {
  color: var(--main-font-color);
  margin-bottom: 30px;
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
  filter: blur(1px);
  transform: scale(1.01);
}

.blueimp-gallery > .slides > .slide > .slide-content {
  margin-left: -22px !important;
}
</style>
