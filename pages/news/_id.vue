<template>
  <div>
    <section class="download_news" ref="blogContent">
      <!-- News Header -->
      <section class="section_news_header">
        <div class="container">
          <div class="row">
            <div class="news_header_wrapper">
              <h2>{{ getNews.title }}</h2>
              <p>{{ getNews.published_date }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- News Body -->
      <section class="section_news_body">
        <div class="container">
          <div class="row">
            <div class="news_body_wrapper">
              <img :src="getNews.img" :alt="getNews.title_en" v-if="!hideFooter">
              <div v-html="getNews.content" class="news_main_content"></div>
              <div class="news_footer_wrapper" v-if="!hideFooter">
                <div class="news_footer_download_container">
                  <strong>{{ $t('download_news') }}
                    <img src="../../assets/icons/main/download_file.png" alt="download_icon" @click="downloadPDF">
                  </strong>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </section>

    <!-- News Other -->
    <section class="section_news_other">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>{{ $t('other_news') }}</h1>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="news in limitedNews" :key="news.id">
            <NewsItem :newsId="news.id"
                      :newsImage="news.img"
                      :newsDescription="news.title"
                      :newsContent="news.content"
                      :newsPublishDate="news.published_date">
            </NewsItem>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import news from "@/pages/news/index";
import NewsItem from "../../components/news/NewsItem";
import html2pdf from 'html2pdf.js';


export default {
  components: {
    NewsItem
  },
  data() {
    return {
      current_index: 0,
      hideFooter: false,
    }
  },
  computed: {
    ...mapGetters({news: "module/news/getAllNews"}),
    limitedNews() {
      return this.shuffleArray(this.news.filter(newsItem => newsItem.id !== this.getNews.id)).slice(0, 3);
    }
  },
  async asyncData({store, route}) {
    await store.dispatch('module/news/getNewsArray');
    let response = await store.dispatch('module/news/getNewsByIdApi', route.params.id);
    return {getNews: response};
  },
  methods: {
    downloadPDF() {
      this.hideFooter = true;

      setTimeout(() => {
        const element = this.$refs.blogContent;
        const opt = {
          margin: 10,
          filename: `${this.getNews.title}.pdf`,
          image: {type: 'jpeg', quality: 0.98},
          html2canvas: {scale: 2},
          jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
        };

        html2pdf().from(element).set(opt).save();

        this.hideFooter = false;
      }, 100);
    },


    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
}
</script>

<style scoped>
.section_news_header {
  padding: 50px 15px 15px 15px;
}

.section_news_body {
  padding: 0 15px;
}

.news_header_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 25px 25px 0 0;
}

.news_header_wrapper h2 {
  color: var(--dark-font-color);
}

.news_header_wrapper p {
  color: var(--dark-font-color);
  font-size: 18px;
}

.news_body_wrapper {
  padding: 30px 20px;
  background: #f0f0f0;
  margin-bottom: 40px;
  border-radius: 0 0 25px 25px;
}

.news_body_wrapper > img {
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 250px;
  object-fit: contain;
}

.news_main_content {
  margin-top: 40px;
  margin-bottom: 30px;
  color: var(--dark-font-color);
  border-radius: 25px;
  text-align: justify;
}

.section_news_other {
  margin-bottom: 30px;
}

.section_news_other h1 {
  max-width: 350px;
  margin: 40px auto;
  text-align: center;
  color: var(--main-font-color);
}

.news_footer_download_container strong {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.news_footer_download_container img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  cursor: pointer;
}

.news_footer_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-between;
  align-items: center;
}


@media only screen and (max-width: 768px) {
  .news_header_wrapper h2 {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 576px) {
  .news_body_wrapper > img {
    object-fit: cover;
  }

  .news_footer_wrapper {
    justify-content: center;
    align-items: center;
  }
}
</style>
