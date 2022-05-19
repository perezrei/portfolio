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

    <div id="hamburger-icon" @:click="toggleMobileMenu(this)">
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
  </header>
</template>

<script>
export default {
  name: "HeaderSectionTwo",
  methods: {
    toggleMobileMenu(menu) {
      menu.classList.toggle("open");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  z-index: 1;
  justify-content: space-between;
  padding: 0 60px;
  background-color: var(--background-color);
  height: 70px;
  width: 100%;
  position: fixed;
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
  color: white;
}

ul li {
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 50px;
}

ul li:hover {
  transition: 0.4s;
  border-bottom: 5px solid var(--main-color);
}

#hamburger-icon {
  margin: auto 0;
  display: none;
  cursor: pointer;
}

#hamburger-icon div {
  width: 35px;
  height: 3px;
  background-color: white;
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

.open .mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
  height: calc(100vh - 50px);
  width: 100%;
}

.mobile-menu li {
  margin-bottom: 10px;
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

  ul li:hover {
    border-bottom: none;
    background-color: #5a5a5a;
    transition: 0.4s;
  }
}
</style>