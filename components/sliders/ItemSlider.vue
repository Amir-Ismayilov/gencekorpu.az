<template>
  <div class="card_container">
    <div class="card_container_image">
      <img :src="ProjectsImage" :alt="ProjectsTitle">
    </div>

    <div class="card_container_content">
      <h4>{{ ProjectsTitle }}</h4>
      <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/completed-projects/` +  ProjectsId">{{ $t('Detailed') }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSlider",
  props: {
    ProjectsId: Number,
    ProjectsImage: String,
    ProjectsTitle: String,
    ProjectsDescription: String,
  },
}
</script>

<style scoped>
.card_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  border: 1px solid #ddd;
  box-shadow: 3px 4px 9px rgba(36,36,36,.15);
  margin: 10px 0;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px;
}

.card_container_image {
  width: 100%;
  overflow: hidden;
}

.card_container_image img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  transition: 0.5s;
}

.card_container_image img:hover {
  transform: scale(1.1) rotate(1deg);
}

.card_container_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 20px;
}

.card_container_content h4 {
  font-size: 14px;
  color: #0034f5;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
  padding: 20px 0;
}

.card_container_content a {
  padding: 5px 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: var(--light-mode-bg-color-main);
  border: 1px solid #ddd;
  box-shadow: 3px 4px 9px rgba(36, 36, 36, .15);
  transition: 0.5s;
}

.card_container_content a:hover {
  color: var(--main-font-color);
  border: 1px solid var(--light-mode-bg-color-main);
  background-color: transparent;
}
</style>
