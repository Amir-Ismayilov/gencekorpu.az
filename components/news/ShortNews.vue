<template>
  <section class="section_news_area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="main_title">
            <h1>Son xəbərlər</h1>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4" v-for="(news,index) in this.newsAll.slice(-3)" :key="index">
          <NewsItem :newsId="news.id"
                    :newsImage="news.img"
                    :newsDescription="news.title_az"
                    :newsContent="news.content_az"
                    :newsPublishDate="news.published_date">
          </NewsItem>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsItem from "../../components/news/NewsItem";
import {mapGetters} from "vuex";

export default {
  name: "ShortNews",
  components: {
    NewsItem,
  },
  computed: {
    ...mapGetters({
      newsAll: "module/news/getAllNews",
    }),
  },
}
</script>

<style scoped>

</style>
