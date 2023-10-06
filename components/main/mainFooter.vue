<template>
  <div>
    <section class="section_main_footer">
      <footer class="container hr">
        <div class="row">
          <div class="col-12">
            <div class="footer_content_left">
              <div class="container">
                <div class="row">
                  <div class="logo_main_wrapper">
                    <nuxt-link :to="localePath('index')">
                      <img :src="settingAll.logo" alt="main_logo">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-6 logo_main_wrapper_text">{{ settingAll.description }}</div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="footer_content_right">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div class="connect_wrapper">
                      <dl>
                        <dt>{{ $t('email') }}</dt>
                        <dd>{{ settingAll.email_footer }}</dd>
                        <dt>{{ $t('address') }}</dt>
                        <dd>{{ settingAll.address }}</dd>
                      </dl>
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6 col-lg-4">
                    <div class="footer_list_wrapper">
                      <ul>
                        <li>
                          <nuxt-link :to="localePath('index')">{{ $t('home_page') }}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('technical-base')">{{ $t('technical_base') }}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('news')">{{ $t('news') }}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('contacts')">{{ $t('contacts') }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6 col-lg-4">
                    <div class="footer_list_wrapper footer_list_wrapper_last">
                      <ul>
                        <li>
                          <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/pages/2`">{{
                              $t('about_us')
                            }}
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/pages/3`">
                            {{ $t('board_of_directors') }}
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('current-projects')">{{ $t('current_projects') }}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('completed-projects')">{{ $t('completed_projects') }}</nuxt-link>
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
              2023 © <a href="https://lider.az/">LIDER.AZ</a> | {{ $t('all_rights_reserved') }}
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
  width: 100px;
  height: 105px;
  object-fit: cover;
  filter: drop-shadow(2px 4px 6px black);
}

.logo_main_wrapper_text {
  margin-top: 10px;
  margin-bottom: 22px;
  color: var(--grey-font-color);
}

.hr {
  border-bottom: 1px solid var(--white-bg-color);
}

.connect_wrapper {
  display: flex;
  align-items: center;
  height: 100%;
}

.footer_content_right {
  margin-bottom: 50px;
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
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 0;
  }

  .footer_list_wrapper {
    margin-bottom: 25px;
    align-items: flex-start
  }

  .section_footer_copyright p {
    margin-left: 10px;
  }
}

@media only screen and (max-width: 992px) {
  .footer_list_wrapper_last {
    align-items: flex-start
  }

  .footer_content_right {
    margin-bottom: 25px;
  }
}
</style>
