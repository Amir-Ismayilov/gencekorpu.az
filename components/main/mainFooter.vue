<template>
  <div>
    <section class="section_main_footer">
      <footer class="container hr">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <div class="footer_content_left">
              <div class="container">
                <div class="row">
                  <div class="logo_main_wrapper">
                    <img :src="settingAll.logo" alt="main_logo">
                    <div class="logo_main_wrapper_text">{{ settingAll.description }}</div>
                  </div>

                  <div class="connect_wrapper">
                    <dl>
                      <dt>E-poct:</dt>
                      <dd>{{ settingAll.email_footer }}</dd>
                      <dt>Address:</dt>
                      <dd>{{ settingAll.address }}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <div class="footer_content_right">
              <div class="container">
                <div class="row">
                  <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="footer_list_wrapper">
                      <ul>
                        <li>
                          <nuxt-link to="#">Ana səhifə</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/technical-base">Texniki baza</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/news">Xəbərlər</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/contacts">Əlaqə</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="footer_list_wrapper">
                      <ul>
                        <li>
                          <nuxt-link to="/pages/3">İdarə heyəti</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Haqqimizda</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/current-projects">Cari layihələr</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/completed-projects">Tamamlanmış layihələr</nuxt-link>
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>

    <section class="section_footer_copyright">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-10 col-lg-10">
            <p>
              2023 ©. Bütün Hüquqlar <a href="https://lider.az/">LIDER.AZ</a> tərəfindən qorunur.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "mainFooter",
  computed: {
    ...mapGetters({
      settingAll: "module/settings/getAllSettings"
    }),
  },
}
</script>

<style scoped>
.section_main_footer {
  padding: 30px 0;
  background-color: var(--light-mode-bg-color-black);
}

.logo_main_wrapper img {
  width: 150px;
  height: 80px;
  object-fit: contain;
}

.logo_main_wrapper_text {
  margin-top: 10px;
  margin-bottom: 30px;
  color: var(--grey-font-color);
}

.hr {
  border-bottom: 1px solid var(--dark-font-color);
}

.connect_wrapper {
  margin-bottom: 25px;
}

.footer_list_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer_list_wrapper li {
  padding: 5px 0;
}

.footer_list_wrapper li a {
  color: var(--grey-font-color);
}

.section_footer_copyright {
  margin-top: -20px;
  padding-bottom: 10px;
  background-color: var(--light-mode-bg-color-black);
}

.section_footer_copyright a {
  color: var(--main-font-color);
}

.section_footer_copyright p {
  color: var(--light-mode-font-color-white);
}

@media only screen and (max-width: 576px) {
  .logo_main_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .connect_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }

  .footer_list_wrapper {
    margin-bottom: 25px;
  }
}
</style>
