<template>
  <section class="section_news">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ $t('news') }}</h1>
        </div>

        <div class="col-12 col-sm-6 col-md-6 col-lg-4"
             v-for="(newsItem, index) in paginatedNews"
             :key="index">
          <NewsItem :newsId="newsItem.id"
                    :newsImage="newsItem.img"
                    :newsDescription="newsItem.title"
                    :newsContent="newsItem.content"
                    :newsPublishDate="newsItem.published_date"
          />
        </div>
      </div>

      <div class="pagination" v-if="newsAll.length > 8">
        <button @click="changePage(page - 1)" :disabled="page <= 1">
          <img class="arrow" src="../../assets/icons/arrow/left-arrow.png" alt="arrow_left">
        </button>

        <button v-if="page > 3" @click="goToPage(1)">1</button>
        <span v-if="page > 4">...</span>

        <button v-for="pageNumber in centeredPages"
                :key="pageNumber"
                @click="goToPage(pageNumber)"
                :class="{ active: pageNumber === page }">
          {{ pageNumber }}
        </button>

        <span v-if="page < totalPages - 3">...</span>
        <button v-if="page < totalPages - 2" @click="goToPage(totalPages)">{{ totalPages }}</button>

        <button @click="changePage(page + 1)" :disabled="page >= totalPages">
          <img class="arrow" src="../../assets/icons/arrow/right-arrow.png" alt="arrow_right">
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash';
import NewsItem from "../../components/news/NewsItem";
import {mapGetters} from "vuex";

export default {
  middleware: ["news-middleware"],
  name: "index",
  components: {NewsItem},
  data() {
    return {
      page: 1,
      itemsPerPage: 6,
    };
  },
  computed: {
    ...mapGetters({newsAll: "module/news/getAllNews"}),

    totalPages() {
      return Math.ceil(this.newsAll.length / this.itemsPerPage);
    },

    paginatedNews() {
      return _.chunk(this.newsAll, this.itemsPerPage)[this.page - 1] || [];
    },

    centeredPages() {
      const start = Math.max(this.page - 2, 1);
      const end = Math.min(this.page + 2, this.totalPages);
      return _.range(start, end + 1);
    }
  },
  methods: {
    changePage(newPage) {
      this.page = _.clamp(newPage, 1, this.totalPages);
    },

    goToPage(pageNum) {
      this.page = pageNum;
    }
  }
}
</script>

<style scoped>
.section_news {
  padding: 70px 0;
  background-color: var(--white-bg-color);
}

.section_news h1 {
  text-align: center;
  color: var(--main-font-color);
  margin-bottom: 30px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.arrow {
  width: 20px;
  height: 20px;
  object-fit: cover;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 7px;
  user-select: none;
}

.pagination button.active {
  background-color: var(--light-mode-bg-color-main);
  color: #fff;
}

.pagination button:disabled {
  display: none;
  cursor: not-allowed;
}
</style>
