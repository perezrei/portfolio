<template>
  <div class="project__component-container" v-for="project in projects" :key="project.title">
    <h4>{{ project.title }}</h4>
    <p>{{ project.description }}</p>
    <p>Technologies implemented: {{ project.technologies }}</p>
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
            title:"HYF-Connect",
            description:"Platform where all students, alumni and coaches of HackYourFuture Belgium can share their coding experiences and profiles for new opportunities to grow. Final group-project of Class 15.",
            technologies:"Vue3js, CSS, SQl, JWT", 
            date:"February 2022",
            github: "https://github.com/HYF-Connect/hyf-connect",
            website: "https://hyf-connect.herokuapp.com/"  
          },
          {
            title:"Reinaldo Perez Website",
            description:"This is the first project after finishing HackYourFuture Belgium.",
            technologies:"Vue3js, CSS", 
            date:"May 2022",
            github: "https://github.com/perezrei/portfolio",
            website: "https://perezrei.github.io/portfolio/"  
          },
          {
            title:"Project Number 3",
            description:"This is the third example of a project for my portfolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, orci vitae fringilla vestibulum, massa dui malesuada neque, id viverra massa est sed nisi.",
            technologies:"Vue3js, CSS", 
            date:"May 2022",
            github: "https://github.com/freeCodeCamp/freeCodeCamp",
            website: "https://vuejs.org/"   
          },
          {
            title:"Project Number 4",
            description:"This is the fourth example of a project for my portfolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, orci vitae fringilla vestibulum, massa dui malesuada neque, id viverra massa est sed nisi.",
            technologies:"Vue3js, CSS", 
            date:"May 2022",
            github: "https://github.com/sudheerj/javascript-interview-questions",
            website: "https://cli.vuejs.org/"  
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .project__component-container {
    text-align: center;
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 50px;
  }
  .project__component-container:hover {
    background-color: #00000040;
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
    justify-content: center;
    padding-top: 25px;
  }
  .github__btn, .website__btn {
    background-color: var(--main-color);
    text-decoration: none;
    color: white;
    font-size: 12px;
    font-weight: 500;
    width: 80px;
    padding: 7px 15px;
    margin-right: 20px;
    border-radius: 8px;
    cursor: pointer;
  }
  .github__btn:hover, .website__btn:hover {
    background-color: #c20d0db4;
    transition: background-color 0.2s;
  }
</style>