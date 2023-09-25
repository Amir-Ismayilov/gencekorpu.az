<template>
  <section class="section_main_pages">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ getPages.title }}</h1>
        </div>

        <div class="col-12">
          <div class="page_main_texts" v-html="getPages.body"></div>

          <div v-for="(info,index) in getPages.file_info" :key="index">
            <a :href="info.download_link" target="_blank" class="pdf_link"> <span>{{ index + 1 + ")" }}</span> {{ info.original_name }}</a>
          </div>
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
  min-height: 45vh;
}

.section_main_pages h1 {
  text-align: center;
  color: var(--main-font-color);
  margin-bottom: 30px;
}

.page_main_texts {
  text-align: justify;
}

.pdf_link {
  display: block;
  margin: 10px 0;
  text-transform: uppercase;
  color: var(--main-font-color);
}

.pdf_link span {
  color: var(--light-mode-bg-color-black);
}
</style>
