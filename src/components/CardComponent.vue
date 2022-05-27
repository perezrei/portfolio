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
            "name": "Minimalist Design Enthusiastic",
            "description": "Minimalism aims for simplicity and objectivity. Minimalist designs tend toward more whitespace, better typography, grid layouts, and less color."
          },
          {
            "name": "Accurate selection of colors",
            "description": "Different colors, fonts, and arrangement of the text to help increase scanability, legibility and readability. Different sizes, fonts, and arrangement of the text to help increase scanability, legibility and readability."
          },
          {
            "name": "Following the desires of the client",
            "description": "It's very important to follow strictly the instructions of the customer. Different sizes, fonts, and arrangement of the text to help increase scanability, legibility and readability."
          },
          {
            "name": "Here, we can put anything we want",
            "description": "Actually I'm starting to enjoy VUE and I know that, once I practice all the directives I will love it. Different sizes, fonts, and arrangement of the text to help increase scanability, legibility and readability."
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
  }
  
  p {
    font-size: 13px;
    font-weight: 300;
  }
</style>