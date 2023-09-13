<template>
  <section class="section_index_page">
    <!-- Slider Area -->
    <IndexSlider/>
    <!-- Card Slider Area -->
    <CardSlider/>
    <!-- Management Area -->
    <ManagementComponent v-if="settingsAll.management_status === 'true'"/>
    <!-- Synced Slider Area -->
    <SyncedSlider/>
    <!-- News Area -->
    <ShortNews/>
    <!-- Form Area -->
    <section class="section_form_area" v-if="settingsAll.contact_form === 'true'">
      <FormComponent/>
    </section>
  </section>
</template>

<script>
import IndexSlider from "../components/sliders/IndexSlider";
import CardSlider from "../components/sliders/CardSlider";
import ManagementComponent from "../components/ManagementComponent";
import SyncedSlider from "../components/sliders/SyncedSlider";
import ShortNews from "../components/news/ShortNews";
import FormComponent from "../components/FormComponent";
import {mapGetters} from "vuex";

export default {
  name: 'IndexPage',
  components: {
    IndexSlider,
    CardSlider,
    ManagementComponent,
    SyncedSlider,
    ShortNews,
    FormComponent,
  },
  computed: {
    ...mapGetters({settingsAll: "module/settings/getAllSettings"}),
  },
  mounted() {
    console.log(this.settingsAll)
  }
}
</script>

<style>
.main_title {
  text-align: center;
}

.section_news_area {
  padding: 60px 0;
  background-color: var(--light-mode-bg-color-gray);
}

.section_news_area h1 {
  display: inline-block;
  margin-bottom: 30px;
  text-align: center;
  color: var(--light-mode-font-color-white);
  filter: drop-shadow(3px -2px 2px black);
}

.section_form_area {
  padding: 60px 0;
  background-image: url(../assets/images/background/form.jpg);
}
</style>
