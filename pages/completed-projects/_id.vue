<template>
  <!-- Completed Projects Inside -->
  <section class="completed_projects_inside">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ getCompletedProjects.title_az }}</h1>
        </div>

        <div v-html="getCompletedProjects.content_az"></div>

        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 image"
          v-for="(imageItem, imageIndex) in getCompletedProjects.images"
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
  // name: "_id.vue",
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
    ...mapGetters({completedProjects: "module/projects/completed-projects/getAllCompletedProjects"}),
  },
  mounted() {
    this.formatImages();
    this.current_index = this.completedProjects.findIndex(image => image.id === parseInt(this.$route.params.id));
  },

  methods: {
    formatImages() {
      if (this.getCompletedProjects && this.getCompletedProjects.images) {
        this.images = this.getCompletedProjects.images.map(image => image.src);
      }
    }
  },
  async asyncData({store, route}) {
    await store.dispatch('module/projects/completed-projects/getCompletedProjectsArray')
    let response = await store.dispatch('module/projects/completed-projects/getCurrentProjectsByIdApi', route.params.id)
    return {getCompletedProjects: response}
  },
}
</script>

<style scoped>
.completed_projects_inside {
  padding: 70px 0
}

.completed_projects_inside h1 {
  color: var(--main-font-color);
  margin-bottom: 30px;
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
