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
  middleware: ["store-middleware"],
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
  }
}
</script>

<style>
.main_title {
  text-align: center;
}

.section_news_area {
  padding: 60px 0;
}

.section_news_area h1 {
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 30px;
  text-align: center;
  color: var(--main-font-color);
}

.section_form_area {
  padding: 60px 0;
}
</style>
