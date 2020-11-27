<template>
  <div class="container">
    <iframe
      :src="videoLink"
      name="azuremediaplayer"
      scrolling="no"
      frameborder="no"
      align="center"
      allowfullscreen
    ></iframe>

    <section class="info">
      <h2>Lärare inom IT och programmering</h2>
      <p>
        Codic Education har knoppats av från Codic Consulting och besitter samma
        tekniska kompetens och rekryteringsexpertis som moderbolaget. I
        förberedande syfte går våra utbildare en intern utbildning om
        yrkeshögskolans struktur samt vägleds av en forskare inom pedagogik.
        Därmed ser vi till att undervisningen är relevant för era elever och tar
        ansvar för utbildningens röda tråd.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    videoTitle() {
      return this.$store.state.title
    },
    videoLink() {
      return this.$store.state.link
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";
.container {
  width: 64%;
  padding: 0rem 2rem;
  @include flex();
  align-items: flex-start;

  iframe {
    border-radius: 8px;
    width: 96%;
    height: 30rem;
  }

  .info {
    margin: 2rem 0rem;
    width: 100%;
    padding: 4rem 0rem;

    h2 {
      color: $main-color;
      font-size: 2rem;
    }

    p {
      margin: 2rem 0rem 3rem 4rem;
      line-height: 2.4rem;
      color: #444;
      width: 80%;
      font-weight: bold;
    }

    ul {
      margin: 1rem 0rem;
      padding: 0.5rem 2rem;

      li {
        margin: 0.6rem 0rem;
        color: #666;
      }
    }
  }
}
</style>
