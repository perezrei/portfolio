<script>
  export default {
    name: "FooterSection"
  }
</script>

<template>
  <div class="footer__container">
    <p class="footer__text">© 2022 | Reinaldo Perez</p>
  </div>
</template>

<style scoped>
.footer__container {
  display: flex;
  justify-content: center;
  height: 90px;
  background-color: var(--background-color);
}
.footer__text {
  font-size: 8px;
  margin-top: 70px;
}
</style>