<template>
  <section
    class="section_main_header"
    :class="{ fixed: isHeaderFixed }"
  >
    <div class="container">
      <div class="row">
        <header>
          <div class="logo_main_wrapper">
            <nuxt-link :to="localePath('index')">
              <img :src="settingAll.logo" alt="main_logo">
            </nuxt-link>
          </div>

          <div class="menu_all_components">
            <div class="header_main_list">
              <nav>
                <ul>
                  <li class="header_main_item">
                    <nuxt-link :to="localePath('index')">{{ $t('home_page') }}</nuxt-link>
                  </li>

                  <li class="header_main_item" v-for="(page,index) in pagesAll" :key="index"
                      v-if="page.status === 'ACTIVE'">
                    <ul class="menu">
                      <li class="menu-item">
                        <a href="javascript:void(0)" class="menu-link">{{ page.title }}</a>
                        <div class="dropdown">
                          <ul>
                            <li v-for="(pageChild,index) in page.children" :key="index"
                                v-if="pageChild.status === 'ACTIVE'">
                              <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/pages/` + pageChild.id">
                                {{ pageChild.title }}
                              </nuxt-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li class="header_main_item">
                    <ul class="menu">
                      <li class="menu-item">
                        <a href="javascript:void(0)" class="menu-link">{{ $t('projects') }}</a>
                        <div class="dropdown">
                          <ul>
                            <li>
                              <nuxt-link :to="localePath('current-projects')">{{ $t('current_projects') }}</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link :to="localePath('completed-projects')">{{
                                  $t('completed_projects')
                                }}
                              </nuxt-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li class="header_main_item">
                    <nuxt-link :to="localePath('technical-base')">{{ $t('technical_base') }}</nuxt-link>
                  </li>

                  <li class="header_main_item">
                    <nuxt-link :to="localePath('news')">{{ $t('news') }}</nuxt-link>
                  </li>

                  <li class="header_main_item">
                    <nuxt-link :to="localePath('contacts')">{{ $t('contacts') }}</nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="header_main_contact">
              <div><a :href="`mailto:` + settingAll.email_header">{{ settingAll.email_header }}</a></div>
              <div><a :href="`tel:` + settingAll.tel">{{ settingAll.tel }}</a></div>
            </div>

            <!--            <div class="btn_group">-->
            <!--              <div @click="toggleTheme" class="button-theme" :class="{ isDarkMode: isDarkMode }">-->
            <!--                <v-icon name="sun" class="sun-icon"></v-icon>-->
            <!--                <v-icon name="moon" class="moon-icon"></v-icon>-->
            <!--              </div>-->
            <!--              <LanguageSwitcher/>-->
            <!--            </div>-->

            <div class="mobile_nav">
              <button class="hamburger" @click="toggleMenu">
                <div :class="['hamburger-inner', { 'open': isOpen }]"></div>
              </button>
              <transition name="slide">
                <div v-if="isOpen" class="menu_phone">

                  <ul>
                    <li>
                      <nuxt-link :to="localePath('index')">{{ $t('home_page') }}</nuxt-link>
                    </li>

                    <li class="header_main_item" v-for="(page,index) in pagesAll" :key="index"
                        v-if="page.status === 'ACTIVE'">
                      <ul class="menu">
                        <li class="menu-item">
                          <a href="javascript:void(0)" class="menu-link" @click="toggleMenuMobile">{{ page.title }}</a>
                          <div class="dropdown">
                            <ul>
                              <li v-for="(pageChild,index) in page.children" :key="index"
                                  v-if="pageChild.status === 'ACTIVE'">
                                <nuxt-link
                                  :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/pages/` + pageChild.id">
                                  {{ pageChild.title }}
                                </nuxt-link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li class="header_main_item">
                      <ul class="menu">
                        <li class="menu-item">
                          <a href="javascript:void(0)" class="menu-link" @click="toggleMenuMobile">{{
                              $t('projects')
                            }}</a>
                          <div class="dropdown" v-if="isMenuOpen">
                            <ul>
                              <li>
                                <nuxt-link :to="localePath('current-projects')">{{ $t('current_projects') }}</nuxt-link>
                              </li>
                              <li>
                                <nuxt-link :to="localePath('completed-projects')">{{
                                    $t('completed_projects')
                                  }}
                                </nuxt-link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
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
              </transition>
            </div>
          </div>

          <div class="btn_group">
            <div @click="toggleTheme" class="button-theme" :class="{ isDarkMode: isDarkMode }">
              <v-icon name="sun" class="sun-icon"></v-icon>
              <v-icon name="moon" class="moon-icon"></v-icon>
            </div>
            <LanguageSwitcher/>
          </div>
        </header>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import 'vue-awesome/icons/moon';
import 'vue-awesome/icons/sun';
import Icon from 'vue-awesome/components/Icon';

export default {
  name: "mainHeader",
  components: {
    'v-icon': Icon,
    LanguageSwitcher
  },
  data() {
    return {
      isOpen: false,
      isMenuOpen: false,
      isHeaderFixed: false,
      isDarkMode: false // по умолчанию светлый режим
    }
  },
  computed: {
    ...mapGetters({
      settingAll: "module/settings/getAllSettings",
      pagesAll: "module/pages/getAllPages"
    }),
  },
  watch: {
    $route() {
      this.isOpen = false;
      document.body.style.overflow = '';
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    },

    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.body.classList.add('dark_mode');
      } else {
        document.body.classList.remove('dark_mode');
      }
    },

    toggleMenuMobile() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    handleScroll() {
      if (window.scrollY > 50 && !this.isHeaderFixed) {
        this.isHeaderFixed = true;
      } else if (window.scrollY <= 50 && this.isHeaderFixed) {
        this.isHeaderFixed = false;
      }
    },
  },

  mounted() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('mouseover', function () {
        const dropdown = this.querySelector('.dropdown');
        dropdown.style.maxHeight = '300px';
        dropdown.style.opacity = '1';
      });
      item.addEventListener('mouseout', function () {
        const dropdown = this.querySelector('.dropdown');
        dropdown.style.maxHeight = '0';
        dropdown.style.opacity = '0';
      });
    });
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style scoped>
/*Dropdown menu*/
.menu-item {
  position: relative;
}

.menu-link {
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--light-mode-font-color-white);
  text-decoration: none;
}

.dropdown {
  position: absolute;
  top: 120%;
  left: unset;
  z-index: 99;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: #08365f;
  border: 1px solid rgba(25, 25, 28, .2);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  min-width: 210px;
}

.dropdown li {
  padding: 5px 10px;
}

.dropdown li a {
  font-size: 14px !important;
  transition: 0.5s;
  opacity: 0.6;
  color: var(--light-mode-font-color-white);
}

.dropdown li a:hover {
  opacity: 1;
}

.btn_group {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

/*---------------------------------------------------------------------------------------------------*/


.social_media_container li {
  display: flex;
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0 10px;
}

.social_media_container li:last-child {
  border-right: unset;
}

.social_media_wrapper a {
  font-size: 15px;
  color: var(--grey-font-color);
}

.search_container input {
  height: 30px;
  width: 100%;
  padding-left: 10px;
  font-size: 12px;
  color: var(--dark-font-color);
  background: rgba(255, 255, 255, 0.7);
}

.section_main_header {
  padding: 15px 0;
  background: var(--light-mode-bg-color-black);
  transition: top 0.8s ease; /* Добавляем анимацию для плавного изменения top */
}

.section_main_header header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.header_clubs_logo img {
  width: 100%;
  display: block;
  object-fit: contain;
  height: auto;
  max-width: 42px;
  margin: 0 auto;
}

.logo_main_wrapper img {
  width: 90px;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(2px 4px 6px black);
}

.logo_main_wrapper a {
  display: block;
  height: 100%;
}

.header_main_list nav > ul {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.header_main_list nav > ul .header_main_item a {
  display: block;
  font-size: clamp(14px, 1vw, 16px);
  text-transform: uppercase;
  cursor: pointer;
}

.header_main_contact {
  /*display: flex;*/
  justify-content: center;
  align-items: center;
  display: none;
}

.header_main_contact div:first-child {
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 5px 0 0 5px !important;
}

.header_main_contact div:first-child a {
  color: #000;
}

.header_main_contact div:last-child {
  padding: 5px 10px;
  background-color: var(--light-mode-bg-color-main);
  border-radius: 0 5px 5px 0;
}

.section_main_header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  opacity: 90%;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.8s ease;
}

/*Hamburger Menu*/
.hamburger {
  position: absolute;
  top: -9px;
  right: 0;
  z-index: 1001;
  cursor: pointer;
  width: 30px;
  height: 20px;
  background: transparent;
}

.hamburger-inner {
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition: transform 0.3s ease;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  bottom: -10px;
}

.hamburger-inner.open {
  background-color: transparent;
}

.hamburger-inner.open::before {
  transform: translateY(10px) rotate(45deg);
}

.hamburger-inner.open::after {
  transform: translateY(-10px) rotate(-45deg);
}

.menu_phone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  border-radius: 0 0 5px 5px;
  min-height: 50vh;
  background-color: var(--light-mode-bg-color-black);
  z-index: 1005;
}

.menu_phone img {
  margin-bottom: 40px;
}

.menu_phone li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}

.menu_all_components {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
}

/*-----------------------------------------------------------------*/
@media screen and (min-width: 993px) {
  .mobile_nav {
    display: none;
  }
}

@media screen and (max-width: 1390px) {
  .header_main_contact {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .header_main_contact, .header_main_list {
    display: none;
  }

  .btn_group {
    position: absolute;
    right: 20px;
  }

  .dropdown {
    text-align: center;
    position: absolute;
    top: 100%;
    background-color: #08365f;
    display: none;
    opacity: unset;
    min-width: unset;
  }

  .dropdown ul li a {
    color: var(--light-mode-font-color-white);
    opacity: unset;
  }

  .dropdown li {
    padding: 4px 10px;
  }

  .menu-item:hover .dropdown {
    display: block;
    min-width: 190px;
  }
}

@media screen and (max-width: 576px) {
  .logo_main_wrapper img {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
}

</style>
