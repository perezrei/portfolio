<script setup>
  import HeaderSection from './components/HeaderSection.vue';
  import BannerSection from './components/BannerSection.vue';
  import AboutSection from './components/AboutSection.vue';
  import PortfolioSection from './components/PortfolioSection.vue';
  import ContactSection from './components/ContactSection.vue';
  import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <HeaderSection/>
  <BannerSection/>
  <AboutSection/>
  <PortfolioSection/>
  <ContactSection/>
  <FooterSection/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

:root {
  --magenta: #ff0044;
  --dark-blue: #0c003f;
  --light-grey: #dadada;
  --dark-grey: #5f5f5f;
  --color-filter: invert(11%) sepia(99%) saturate(6958%) hue-rotate(338deg) brightness(101%) contrast(101%);
}

#app {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: #ffffff;
  background-color: var(--dark-blue);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
