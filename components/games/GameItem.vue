<template>
  <div class="games_wrapper">
    <nuxt-link :to="`/games/` + gamesId">

      <div class="games_image">
        <img :src="gamesClubImage_1" :alt="gamesClubName_1">
      </div>

      <div class="games_description">
        <span>{{ gamesClubScore_1 }} : {{ gamesClubScore_1 }}</span>
        <span>{{ gamesClubName_1 }} VS {{ gamesClubName_2 }}</span>
      </div>

      <div class="games_image">
        <img :src="gamesClubImage_2" :alt="gamesClubName_2">
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "GameItem",
  props: {
    gamesId: Number,
    gamesClubName_1: String,
    gamesClubName_2: String,
    gamesClubImage_1: String,
    gamesClubImage_2: String,

    gamesClubScore_1: String,
    gamesClubScore_2: String,

    gamesPublishDate: String,
    gamesTitle: String,
    gamesDescription: String,
  }
}
</script>

<style scoped>
.games_wrapper a{
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 140px;
  margin: 10px 0px;
  padding: 20px;
  transition: 0.8s;
  color: var(--dark-font-color);
  box-shadow: 0 2px 8px #000e140d;
  cursor: pointer;
}

.games_wrapper a:hover {
  background-color: var(--main-font-color);
  box-shadow: 0 2px 8px var(--main-font-color);
  color: var(--light-mode-font-color-white);
}

.games_description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.games_image img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
