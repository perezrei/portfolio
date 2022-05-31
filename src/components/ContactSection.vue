<script>
  export default {
    name: "ContactSection"
  }
</script>

<template>
  <div class="contact__container" id="contact">
    <div class="left__bar"></div> 
    <div class="contact__content">
      <div class="title">
        <h2>Contact</h2>
        <div class="under-line"></div>
      </div>
      <h4>Have a question or want to work together? <br> Leave me a message</h4>
      <div class="contact__form">
        <input class="name__input" placeholder="name" type="text">
        <input class="email__input" placeholder="e-mail" type="email">
        <textarea class="message__input" placeholder="message" name="message" id="" cols="30" rows="10"></textarea>
        <button class="submit__btn" type="submit" onclick="alert('testing button')">Submit</button>
      </div>
    </div> 
  </div>
</template>

<style scoped>
.contact__container {
  display: flex;
  width: 100%;
  height: 100vh;
}
.left__bar {
  width: 5px;
  height: auto;
  background-color: var(--main-color);
}
.contact__content {
  width: 100%;
}
.title {
  width: fit-content;
  margin: 70px auto 0 auto;
}
h2 {
  width:fit-content;
  height: 5px;
  margin: auto;
  font-size: 2em;
  text-align: center;
  font-weight: 700;
  padding-bottom: 50px;
}
.under-line {
  height: 6px;
  width: 90px;
  background-color: var(--main-color);
  position: relative;
  top: -14px;
  right: -45px;
}
h4 {
  width: 80%;
  margin: auto;
  text-align: center;
  font-weight: 300;
  line-height: 25px;
}
.contact__form {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px auto 0 auto;
  height: auto;
  background-color: #dadada;
  border-radius: 5px;
  padding: 10px 5px;
}
.name__input, .email__input {
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 500;
  width: 95%;
  height: 30px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 15px auto 0 auto;
  border: none;
}
.message__input {
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 500;
  width: 95%;
  height: 152px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 15px auto 0 auto;
  border: none;
}
.submit__btn {
  font-family: "Poppins", sans-serif !important;
  font-size: 13px;
  font-weight: 500;
  background-color: var(--main-color);
  color: white;
  font-weight: 500;
  width: 90px;
  margin: 15px auto 0 10px;
  padding: 6px;
  border-radius: 8px;
  border-style: none;
}
.submit__btn:hover {
  background-color: #c20d0db4;
  transition: background-color 0.2s;
}
@media screen and (max-width: 440px) {
  .contact__form {
    width: 90vw;
  }
}
</style>