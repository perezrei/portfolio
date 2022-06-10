<script>
export default {
  name: "FooterSection",
};
</script>

<template>
  <div class="footer__container">
    <div class="left__bar"></div>
    <div class="footer-content">
      <div class="logos-container">
        <a href="https://github.com/perezrei" target="blank" ><img class="social-logo" src="../assets/github-logo.svg" alt="github-logo"/></a> 
        <a href="https://www.linkedin.com/in/perezrei/" target="blank"><img class="social-logo" src="../assets/linkedin-logo.svg" alt="linkedin-logo"/></a>
      </div>
      <p class="footer__text">Reinaldo Perez | © 2022 All Rights Reserved</p>
    </div>
  </div>
</template>

<style scoped>
.footer__container {
  display: flex;
  height: 120px;
  background-color: var(--light-grey);
}
  .left__bar {
    width: 5px;
    height: 100%;
    background-color: var(--magenta);
  }
.footer-content {
  width: 100%;
}
.logos-container {
  display: flex;
  justify-content:center;
  align-items: center;
  height: 80%;
}
.social-logo {
  margin-top:15px;
  padding: 5px 45px;
  width: 140px;
}
.footer__text {
  font-size: 9px;
  font-weight: 500;
  height: 20%;
  text-align: center;
  padding-top: 5px;
  color: black;
}
</style>