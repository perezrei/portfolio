<template>
  <div class="card__component-container" v-for="card in cards" :key="card.name">
    <h4>{{ card.name }}</h4>
    <p class="card__content">{{ card.description }}</p>
  </div>
</template>

<script>
  export default {
    name: "CardComponent",
    data() {
      return {
        cards: [
          {
            "name": "Marketing and Advertising Experience",
            "description": "With more than 30 years in the area of marketing and 20 in print and digital advertising in Venezuela, upon my arrival in Belgium I decided to venture into the area of web development thanks to the opportunity provided by HackYourFuture Belgium. Those years is what allows me to understand what a good user experience is all about."
          },
          {
            "name": "Flexible hours and remote work",
            "description": "One of the things I love most about this profession is having the opportunity to work remotely with flexible hours, although I also know how stressful, and sometimes frustrating, it can be to fix bugs and have a demanding project deadline.  I find it interesting, sharing work time between an office and remotely."
          },
          {
            "name": "Soft Skills",
            "description": "Of course in this industry we need to have strong programming and coding skills, but it's also important to have strong soft skills to advance in the workplace. I consider myself a good team player with great skills in communication, problem solving, creativity, adaptability, work ethic and time management."
          },
          {
            "name": "Minimalist Design Enthusiastic",
            "description": "I confess myself an admirer of minimalism in all its expressions. Look for simplicity and objectivity, more white space, better typography, grid layouts, and less color. It's just my point of view. Depending on the size of the organization for which we work, we must follow the canons of the client or the design department among others."
          },
          {
            "name": "Improving and learning new technologies",
            "description": "I am one of the people who thinks that through exploration and motivation we will develop our creativity, in pursuit of our goals. The learnability concept refers to the new skills and knowledge that people will have to develop in the future in order to adapt to the pace that the market will set and to keep learning and updating. "
          },
          {
            "name": "Teamwork and communication",
            "description": "I identify with the concept that the web developer who joins a work team must commit to following the rules and contributing instead of subtracting. Clarity in communication should be used through available technologies to share information about the project. A good example would be the clarity in commits and messages through GitHub, which is the platform I have used."
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .card__component-container {
    margin: 0 auto 35px auto;
    text-align: center;
    border-radius: 10px;
    padding: 20px;
  }

  h4 {
    padding-bottom: 10px;
    font-weight: 500;
    color: white;
    text-decoration-line: underline;
    text-decoration-color: var(--magenta);
    text-decoration-thickness: 2px;
  }
  
  p {
    font-size: 13px;
    font-weight: 300;
  }
</style>