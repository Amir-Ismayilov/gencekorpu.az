<template>
  <div class="clubs_wrapper">
    <nuxt-link :to="`/clubs/` + clubsId">

      <div class="clubs_image">
        <img :src="clubsImage" alt="img">
      </div>

      <div class="clubs_description">
        <span>{{ clubsName }}</span>
      </div>

    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "ClubsItem",
  props: {
    clubsId: Number,
    clubsImage: String,
    clubsName: String,
    clubsWebsite: String,
    clubsPlayers: String
  }
}
</script>

<style scoped>
.clubs_wrapper a{
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

.clubs_wrapper a:hover {
  background-color: var(--main-font-color);
  box-shadow: 0 2px 8px var(--main-font-color);
  color: var(--light-mode-font-color-white);
}

.clubs_description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.clubs_image img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
