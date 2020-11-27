<template>
  <div class="home">
    <section class="content">
      <blockquote>Vi utbildar Göteborg inom IT och programmering</blockquote>
      <p>
        Söker du kompetenta lärare till en yrkesutbildning, kodstuga eller
        gästföreläsning i Göteborg? <a href="#">Hur bokar jag ett mötte</a>
      </p>
    </section>

    <button class="cta" @click="navToCourses">Våra online kurser</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    navToCourses: function() {
      this.$router.push("/courses")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";

.home {
  width: 100%;
  height: 100%;
  @include flex();
  align-items: flex-start;
  padding: 0rem 8rem;
  justify-content: flex-start;

  .content {
    @include flex();
    align-items: flex-start;
    max-width: 44rem;
    padding: 1rem 0rem;
    margin: 8rem 0rem 2rem 0rem;
    blockquote {
      margin: 1.4rem 0rem;
      font-size: 3rem;
      color: $main-color;
      font-weight: bold;
      font-family: $title-font;
    }

    p {
      width: 50ch;
      line-height: 1.6rem;
      color: #666;

      a {
        color: #009fb7;
        font-weight: bold;
      }
    }
  }

  .cta {
    margin: 3rem 0rem;
    padding: 1.4rem 3.4rem;
    background: #f2f2f2;
    color: #222;
    font-family: $title-font;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 2rem;
    transition: all 0.4s ease;
    cursor: pointer;

    &:hover {
      color: #f2f2f2;
      background: #222;
    }
  }
}
</style>
