<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.svg" alt="" />
      <section class="links">
        <router-link to="/">om oss</router-link>
        <router-link to="/courses">kurser</router-link>
        <router-link to="/as">CODIC consulting</router-link>
      </section>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getCourses")
  },
}
</script>

<style lang="scss">
* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 14px;
    background: #ddd;
  }

  &::-webkit-scrollbar-thumb {
    background: #0005;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  height: 2rem;

  a {
    font-weight: bold;
    font-size: 0.8rem;
    color: #222;
    padding: 0.6rem 1.2rem;
    margin: 0rem 0.6rem;
    border-radius: 2rem;
    text-decoration: none;
    transition: all 0.4s ease;

    &.router-link-exact-active {
      color: #f2f2f2;
      background: #f59300;
    }
  }
}
</style>
