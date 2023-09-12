<template>
  <div class="news_wrapper">
    <nuxt-link :to="`/news/` + newsId">

      <div class="news_publish_date">
        <span>{{ newsPublishDate ? newsPublishDate : "0000-00-00" }}</span>
      </div>

      <div class="news_image_container">
        <img :src="newsImage" :alt="newsId">
      </div>

      <div class="news_description_container">
        <p>{{ newsDescription }}</p>
      </div>

    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    newsId: Number,
    newsImage: String,
    newsDescription: String,
    newsContent: String,
    newsPublishDate: String,
  }
}
</script>

<style scoped>
.news_wrapper a{
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 350px;
  margin: 20px 0;
  background-color: rgba(220, 220, 220, 0.7);
  transition: 0.5s;
  color: var(--dark-font-color);
  box-shadow: 0 2px 8px #000e140d;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
}

.news_wrapper a:hover {
  box-shadow: 0 2px 8px var(--light-mode-bg-color-gray);
}

.news_image_container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.news_image_container img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  transition: 0.5s;
}

.news_image_container img:hover {
  transform: scale(1.1) rotate(1deg);
}

.news_description_container {
  padding-top: 15px;
  color: var(--dark-font-color);
  width: 85%;
}

.news_description_container p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  display: block;
  white-space: nowrap;
}

.news_publish_date {
  position: absolute;
  border-radius: 5px;
  z-index: 99;
  top: 20px;
  right: 20px;
  color: var(--light-mode-font-color-white);
  background-color: var(--light-mode-bg-color-main);
  display: block;
  padding: 5px;
}
</style>
