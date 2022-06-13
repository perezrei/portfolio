<template>
  <div class="banner__container" id="home">
    <div class="left__bar"></div>
    <div class="banner__texts">
      <h1>Hello, I'm <span>Reinaldo Perez</span></h1>
      <h2>and I'm a front-end web developer</h2>
      <div class="link__btn">
        <h3>view my work</h3>
        <a href="#my-work"
          ><img
            class="button"
            src="./../assets/caret-forward-circle.svg"
            alt="icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerSection",
};
</script>

<style scoped>
.left__bar {
  width: 5px;
  height: 100%;
  background-color: var(--magenta);
}
.banner__container {
  display: flex;
  width: 100%;
  height: 100vh;
}
.banner__texts {
  width: 90%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
h1 {
  font-size: 2.8em;
  font-weight: 700;
}
h1 span {
  color: var(--magenta);
  font-weight: 700;
}
h2 {
  font-size: 2.5em;
  padding-bottom: 25px;
  font-weight: 700;
}
h3 {
  margin-right: 10px;
  font-weight: 500;
}
.link__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.button {
  filter: var(--color-filter);
  width: 25px;
  margin-top: 5px;
}
.button:hover {
  transform: rotate(360deg) scale(1.3);
  transition: 600ms;
}
@media screen and (max-width: 675px) {
  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 14px;
  }
  .link__btn {
    margin-top: 30px;
  }
  .button {
    width: 25px;
  }
}
</style>