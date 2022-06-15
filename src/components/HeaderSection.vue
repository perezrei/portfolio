<template>
  <header>
    <a href="#home"><img id="brand" src="../assets/logo.svg" alt="logo" /></a>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#my-work">My Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <div id="hamburger-icon" :class="{ open: classOpen }" @click="toggleMobileMenu">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <ul class="mobile-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#my-work">My Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div class="bottom-line"></div>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
  data() {
    return {
      classOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.classOpen = !this.classOpen;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  padding: 0 60px;
  background-color: var(--light-grey);
  height: 70px;
  width: 100%;
}

header a {
  text-decoration: none;
}

#brand {
  filter: var(--color-filter);
  width: 30px;
  margin-top: 20px;
}

#brand:hover {
  transform: rotate(1080deg);
  transition: 1s;
}

ul {
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

ul a {
  color: var(--dark-blue);
}

ul li {
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 50px;
  border-bottom: 5px solid transparent;
}

ul li:hover {
  transition: 0.6s;
  border-bottom: 5px solid var(--magenta);
}

#hamburger-icon {
  margin: auto 0;
  display: none;
  cursor: pointer;
}

#hamburger-icon div {
  width: 35px;
  height: 3px;
  background-color: var(--dark-blue);
  margin: 6px 0;
  transition: 0.4s;
}

.open .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 6px);
  transform: rotate(-45deg) translate(-6px, 6px);
}

.open .bar2 {
  opacity: 0;
}

.open .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px, -8px);
  transform: rotate(45deg) translate(-6px, -8px);
}

.mobile-menu {
  display: none;
}

.open .mobile-menu {
  height: 100vh;
  width: 80%;
  background-color: var(--light-grey);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: initial;
  transition: 0.5s;
}

.mobile-menu li {
  padding-top: 50px;
  font-size: 18px;
}

.bottom-line {
  height: 5px;
  width: 100%;
  background-color: var(--magenta);
  position: absolute;
  left: 0;
  top: 70px;
}

@media only screen and (max-width: 850px) {
  header {
    padding: 0 25px;
  }

  header nav {
    display: none;
  }

  #hamburger-icon {
    display: block;
  }
}
</style>