<template>
  <section class="section_main_header">
    <div class="container">
      <div class="row">
        <header>
          <div class="logo_main_wrapper">
            <nuxt-link to="/">
              <img :src="settingAll.logo" alt="main_logo">
            </nuxt-link>
          </div>

          <div class="header_main_list">
            <nav>
              <ul>
                <li class="header_main_item">
                  <nuxt-link to="/">Ana səhifə</nuxt-link>
                </li>

                <li class="header_main_item" v-for="(page,index) in pagesAll" :key="index"
                    v-if="page.status === 'ACTIVE'">
                  <ul class="menu">
                    <li class="menu-item">
                      <nuxt-link to="#" class="menu-link">{{ page.title }}</nuxt-link>
                      <div class="dropdown">
                        <ul>
                          <li v-for="(pageChild,index) in page.children" :key="index"
                              v-if="pageChild.status === 'ACTIVE'">
                            <nuxt-link :to="'/pages/' + pageChild.id">{{ pageChild.title }}</nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>

                <li class="header_main_item">
                  <ul class="menu">
                    <li class="menu-item">
                      <nuxt-link to="/projects" class="menu-link">Layihələr</nuxt-link>
                      <div class="dropdown">
                        <ul>
                          <li>
                            <nuxt-link to="/current-projects">Cari layihələr</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/completed-projects">Tamamlanmış layihələr</nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>

                <li class="header_main_item">
                  <nuxt-link to="/technical-base">Texniki baza</nuxt-link>
                </li>

                <li class="header_main_item">
                  <nuxt-link to="/news"> Xəbərlər</nuxt-link>
                </li>

                <li class="header_main_item">
                  <nuxt-link to="/contacts">Əlaqə</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header_main_contact">
            <div><a :href="`mailto:` + settingAll.email_header">{{ settingAll.email_header }}</a></div>
            <div><a :href="`tel:` + settingAll.tel">{{ settingAll.tel }}</a></div>
          </div>

          <div>
            <button @click="toggleTheme" class="button-theme" :class="{ isDarkMode: isDarkMode }">
              <v-icon name="sun" class="sun-icon"></v-icon>
              <v-icon name="moon" class="moon-icon"></v-icon>
            </button>
          </div>


          <div class="mobile_nav">
            <button class="hamburger" @click="toggleMenu">
              <div :class="['hamburger-inner', { 'open': isOpen }]"></div>
            </button>
            <transition name="slide">
              <div v-if="isOpen" class="menu_phone">
                <div class="logo_main_wrapper">
                  <nuxt-link to="/">
                    <img :src="settingAll.logo" alt="main_logo">
                  </nuxt-link>
                </div>
                <ul>
                  <li>
                    <nuxt-link to="/">Ana səhifə</nuxt-link>
                  </li>
                  <li>
                    <ul class="menu">
                      <li class="menu-item">
                        <nuxt-link to="" class="menu-link">Şirkət haqqında</nuxt-link>
                        <div class="dropdown">
                          <ul>
                            <li>
                              <nuxt-link to="#">Haqqımızda</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#">İdarə heyəti</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#">Vizyon və məqsədlərimiz</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#"> Maliyyə hesabatları</nuxt-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class="menu">
                      <li class="menu-item">
                        <nuxt-link to="" class="menu-link">Layihələr</nuxt-link>
                        <div class="dropdown">
                          <ul>
                            <li>
                              <nuxt-link to="/current-projects">Cari layihələr</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/completed-projects">Tamamlanmış layihələr</nuxt-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class="menu">
                      <li class="menu-item">
                        <nuxt-link to="" class="menu-link">Fəaliyyət sahələri</nuxt-link>
                        <div class="dropdown">
                          <ul>
                            <li>
                              <nuxt-link to="#">Körpü və keçid salınması</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#">Yol çəkilişi</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#">Boru kəmərinin çəkilişi</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#">Beton istehsalı</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#">Beton boru istehsalı</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#">Asfalt istehsalı</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#">Labaratoriya</nuxt-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="/technical-base">Texniki baza</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/news"> Xəbərlər</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contacts">Əlaqə</nuxt-link>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </header>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

import 'vue-awesome/icons/moon';
import 'vue-awesome/icons/sun';
import Icon from 'vue-awesome/components/Icon';

export default {
  name: "mainHeader",
  components: {
    'v-icon': Icon,
  },
  data() {
    return {
      isOpen: false,
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
      const mode = this.isDarkMode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', mode);
    }
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
  }
}
</script>

<style scoped>
/*Aktiv menu*/
.nuxt-link-exact-active {
  color: var(--main-font-color) !important;
}
/*---------------------------------------------------------------------------------------------------*/

/*Dropdown menu*/
.menu-item {
  position: relative;
}

.menu-link {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--light-mode-font-color-white);
  text-decoration: none;
}

.dropdown {
  position: absolute;
  top: 120%;
  left: -21px;
  z-index: 99;
  opacity: 0;
  /*overflow-x: hidden !important;*/
  /*overflow-y: scroll !important;*/
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: #454545;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  min-width: 200px;
}

.dropdown li {
  padding: 5px 10px;
}

.dropdown li a {
  font-size: 13px !important;
  transition: 0.5s;
  opacity: 0.6;
  color: var(--light-mode-font-color-white);
}

.dropdown li a:hover {
  opacity: 1;
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
  padding: 10px 0;
  background: var(--light-mode-bg-color-black);
}

.section_main_header header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 10px;
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
  width: 100px;
  height: 100%;
  object-fit: contain;
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
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
}

.header_main_contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.header_main_contact div:first-child {
  padding: 5px 10px;
  background-color: #ffffff;
}

.header_main_contact div:first-child a {
  color: #000;
}

.header_main_contact div:last-child {
  padding: 5px 10px;
  background-color: var(--light-mode-bg-color-main);
}

/*Hamburger Menu*/
.hamburger {
  position: absolute;
  top: 50px;
  right: 20px;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #515151;
  z-index: 1000;
}

.menu_phone img {
  margin-bottom: 40px;
}

.menu_phone li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}

/*-----------------------------------------------------------------*/
@media screen and (min-width: 992px) {
  .mobile_nav {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .header_main_contact, .header_main_list {
    display: none;
  }
}
</style>
