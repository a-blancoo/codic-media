<template>
  <div class="wrapper">
    <video-component />
    <playlist />
  </div>
</template>

<script>
import VideoComponent from "../components/VideoComponent"
import Playlist from "../components/Playlist"

export default {
  components: {
    VideoComponent,
    Playlist,
  },

  created() {
    this.$store.dispatch("getCourses")
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";

.wrapper {
  position: relative;
  padding: 4rem 1rem;
  width: 100%;
  height: 100%;
  @include flex();
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
