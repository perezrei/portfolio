<script>
  export default {
    name: "FooterSection"
  }
</script>

<template>
  <div class="footer__container">
    <div class="left__bar"></div>
    <div class="logos-container">
      <img src="../assets/github-white-logo.jpg" width="50px" height="50px" alt="github-logo">
      <img src="../assets/linkedin-white-logo.png" width="50px" height="50px" alt="linkedin-logo">
    </div>
    <p class="footer__text">© 2022 Rights Reserved | Reinaldo Perez</p>
  </div>
</template>

<style scoped>
.footer__container {
  display: flex;
  height: 120px;
  background-color: var(--background-color);
  background-color: red;
}
.left__bar {
  width: 5px;
  height: 100%;
  background-color: var(--main-color);
}
.logos-container {
  display: flex;
}
.footer__text {
  font-size: 9px;
  margin: 100px auto 0 auto;
}
</style>