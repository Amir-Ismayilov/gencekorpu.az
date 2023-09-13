<template>
  <div class="card_container">
    <div class="card_container_image">
      <img :src="ProjectsImage" :alt="ProjectsTitle">
    </div>

    <div class="card_container_content">
      <h4>{{ ProjectsTitle }}</h4>
      <nuxt-link :to="`/current-projects/` + ProjectsId">ƏTRAFLI</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemCurrentProjects",
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
  border-radius: 5px;
  width: 100%;
  min-height: 300px;
  border: 1px solid #ddd;
  box-shadow: 3px 4px 9px rgba(36, 36, 36, .15);
  margin: 10px 0;
  padding: 5px;
  overflow: hidden;
  transition: 0.5s;
}

.card_container:hover {
  border: 1px solid #ddd;
  box-shadow: 6px 8px 15px rgba(36, 36, 36, .15);
}

.card_container_image {
  width: 100%;
  overflow: hidden;
}

.card_container_image img {
  width: 100%;
  max-height: 200px;
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
}

.card_container_content h4 {
  font-size: 14px;
  color: var(--dark-font-color);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
  padding: 20px 10px;
}

.card_container_content a {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--light-mode-bg-color-main);
  margin-bottom: 15px;
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
