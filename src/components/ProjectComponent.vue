<template>
  <div class="project__component-container" v-for="project in projects" :key="project.title">
    <h4>{{ project.title }}</h4>
    <p>{{ project.description }}</p>
    <p> Tools and Technologies: <br /> {{ project.tools }}</p>
    <p>{{ project.date }}</p>
    <div class="buttons__container">
      <a :href="project.github" target="_blank" class="github__btn">github</a>
      <a :href="project.website" target="_blank" class="website__btn">website</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  data() {
    return {
      projects: [
        {
          title: "HYF-Connect",
          description:
            "Final group-project of HackYourFuture Belgium, Class 15. Platform where students, alumni and coaches can share their coding experiences and profiles for new opportunities. ",
          tools: "Vue3js, CSS, Bootstrap, Nodejs, Express JS, Sequelize",
          date: "February 2022",
          github: "https://github.com/HYF-Connect/hyf-connect",
          website: "https://hyf-connect.herokuapp.com/",
        },
        {
          title: "Reinaldo Perez Portfolio (this website)",
          description:
            "This portfolio is my very first project after finishing my formation in HackYourFuture Belgium. I pretend to create and add different projects using other technologies.",
          tools: "Vue3js, Vitejs, CSS",
          date: "June 2022",
          github: "https://github.com/perezrei/portfolio",
          website: "https://perezrei.github.io/portfolio/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.project__component-container {
  text-align: center;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 50px;
}
.project__component-container:hover {
  background-color: var(--dark-grey);
}
h4 {
  padding-bottom: 10px;
  font-weight: 500;
}
p {
  font-size: 13px;
  font-weight: 300;
  padding-bottom: 5px;
}
.buttons__container {
  display: flex;
  justify-content: space-evenly;
  padding-top: 25px;
}
.github__btn,
.website__btn {
  background-color: var(--magenta);
  text-decoration: none;
  color: white;
  font-size: 12px;
  font-weight: 500;
  width: 80px;
  padding: 7px 15px;
  border-radius: 4px;
  cursor: pointer;
}
.github__btn:hover,
.website__btn:hover {
  background-color: #c20d0db4;
  transition: background-color 0.2s;
}
</style>