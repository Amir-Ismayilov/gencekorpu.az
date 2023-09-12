<template>
  <section class="section_management_area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-0">
          <div class="management_area_left">
            <div>
              <h2>{{ managments[0].title_1 }}</h2>
              <p>{{ managments[0].title_2 }}</p>
              <span v-html="managments[0].content"></span>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-0">
          <div class="management_area_right">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                  <img :src="managments[0].image_1" alt="management-1">
                </div>

                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                  <img :src="managments[0].image_2" alt="management-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ManagementComponent",
  computed: {
    ...mapGetters({managments: "module/managements/getAllManagements"}),
  },
}
</script>

<style scoped>
.management_area_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-mode-bg-color-main);
  min-height: 450px;
  padding: 20px;
}

.management_area_left h2 {
  color: #fff;
  font-size: 22px;
}

.management_area_left p {
  color: #fff;
  font-size: 14px;
  margin-bottom: 20px;
}

.management_area_left span {
  font-size: 15px;
  color: #fff;
  font-family: sans-serif;
}


.management_area_right {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-mode-bg-color-gray);
  padding: 20px 0;
  min-height: 450px;
}

.management_area_right img {
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
  object-fit: cover;
}
</style>
