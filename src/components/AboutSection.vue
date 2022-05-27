<template>
  <div class="about__me-container" id="about-me" >
    <div class="left__bar"></div> 
    <div class="content">
      <div class="title">
          <h2 >{{ title }}</h2>
          <div class="under-line"></div>
      </div>
      <h4>{{ subtitle }}</h4>
      <div class="cards__container">
        <CardComponent/>
      </div> 
    </div> 
  </div>
</template>
<script>
import CardComponent from './CardComponent.vue';

export default {
  name: 'AboutSection',
  data() {
    return {
      title: 'About Me',
      subtitle: 'Coming from the world of marketing and advertising, I know the importance of offering the best user experience while respecting the clients demands.',
    }
  },
  components: {
  CardComponent
  }
}
</script>


<style scoped>
.about__me-container {
  display: flex;
}
  .left__bar {
    width: 5px;
    height: auto;
    background-color: var(--main-color);
  }
.content {
  width: 95%;
  margin: 0 auto;
  height: auto;
  padding-top: 70px;
  padding-bottom: 30px;
}
.title {
  width: fit-content;
  margin: 0 auto 25px auto;
}
h2 {
  width:fit-content;
  height: 5px;
  margin: auto;
  font-size: 2em;
  text-align: center;
  font-weight: 500;
  padding-bottom: 50px;
}
.under-line {
  height: 6px;
  width: 90px;
  background-color: var(--main-color);
  position: relative;
  top: -14px;
  right: -64px;
}
h4 {
  width: 75%;
  margin: auto;
  text-align: center;
  font-weight: 300;
  line-height: 25px;
  padding-bottom: 40px;
}
.cards__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 450px);
  justify-content: center;
  margin: auto;
  width: 95%;
  gap: 20px 100px;
}
@media screen and (max-width: 500px) {
  .cards__container {
    display: block;
  }
}

</style>