<template>
  <section class="section_main_pages">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ getPages.title }}</h1>
        </div>

        <div class="col-12">
          <p>{{ getPages.excerpt}}</p>
          <p v-html="getPages.body"></p>
<!--          <div v-if="getPages.image !==null">-->
<!--            <img :src="getPages.image" alt=""  class="pages_images">-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // name: "_id.vue",
  async asyncData({store, route}) {
    await store.dispatch('module/pages/getPagesArray');
    let response = await store.dispatch('module/pages/getPagesByIdApi', route.params.id);
    return {getPages: response};
  },
}
</script>

<style scoped>
.section_main_pages {
  padding: 70px 0;
  background-color: var(--white-bg-color);
}

.section_main_pages h1 {
  color: var(--main-font-color);
  margin-bottom: 25px;
}

.pages_images {
  width: 300px;
  height: 300px;
  object-fit: contain;
}
</style>
