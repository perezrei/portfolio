<template>
  <div class="portfolio__container" id="my-work">
    <div class="left__bar"></div>
    <div class="content">
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <h4>{{ subtitle }}</h4>
      <div class="projects__container">
        <ProjectComponent />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectComponent from "./ProjectComponent.vue";

export default {
  name: "PortfolioSection",
  components: {
    ProjectComponent,
  },
  data() {
    return {
      title: "My Work",
      subtitle: "These are some of the projects that I’ve been working on.",
    };
  },
};
</script>

<style scoped>
.portfolio__container {
  display: flex;
}

.left__bar {
  width: 5px;
  height: auto;
  background-color: var(--magenta);
}

.content {
  width: 95%;
  margin: 30px auto 0 auto;
  height: auto;
  padding-top: 70px;
  padding-bottom: 30px;
}

.title {
  width: fit-content;
  margin: 0 auto 25px auto;
}

h2 {
  width: fit-content;
  height: 5px;
  margin: auto;
  font-size: 1.8em;
  text-align: center;
  font-weight: 700;
  padding-bottom: 50px;
  text-decoration: underline var(--magenta) 6px;
}

h4 {
  width: 75%;
  margin: auto;
  text-align: center;
  font-weight: 500;
  line-height: 25px;
  padding-bottom: 70px;
}

.projects__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 450px);
  justify-content: center;
  margin: auto;
  width: 95%;
  gap: 30px 80px;
}

@media screen and (max-width: 500px) {
  .projects__container {
    display: block;
  }
}
</style>