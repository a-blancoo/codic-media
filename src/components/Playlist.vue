<template>
  <div class="playlist">
    <section class="errorMsg" v-if="errMsg">
      <p>{{ errMsg }}</p>
      <button @click="errFunc">CLOSE</button>
    </section>
    <h2>c# online course</h2>
    <ul>
      <li
        v-for="course in courses.reverse()"
        :key="course.courseName"
        @click="sendVidTitle(course.courseName)"
      >
        <p>-</p>
        <p class="vidTitle">{{ course.courseName }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      errMsg: "",
    }
  },
  computed: {
    courses: function() {
      return this.$store.state.courses
    },
  },
  methods: {
    sendVidTitle: function(vid) {
      this.$store.dispatch("getVid", vid)
    },
    errFunc: function() {
      this.errMsg = ""
      this.$store.dispatch("getCourses")
    },
  },
  created() {
    let dataLeng = this.courses.length
    if (dataLeng === 0) {
      this.errMsg = "Something went wrong, we are working on it . . ."
    } else {
      this.errMsg = ""
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";
.playlist {
  width: 40%;
  background: #eee;
  border-radius: 10px;

  * {
    border-radius: 10px;
  }

  h2 {
    color: #f2f2f2;
    background: #222;
    text-align: center;
    font-family: $title-font;
    padding: 1.4rem 0rem;
    border-bottom: #2222 3px solid;
    text-transform: capitalize;
  }

  ul {
    list-style: none;
    width: 100%;
    height: 38rem;
    margin: 1rem 0rem 0rem 0rem;
    overflow-y: scroll;

    li {
      padding: 2rem 2.4rem;
      width: 100%;
      background: #0001;
      @include flex();
      flex-direction: row;
      justify-content: flex-start;
      margin: 0.4rem 0rem;
      cursor: pointer;
      color: #666;
      transition: all 0.4s ease;

      &:hover {
        color: #000;
        background: #0004;
      }

      .vidTitle {
        margin: 0rem 2rem;
        font-weight: bold;
      }
    }

    &::-webkit-scrollbar {
      border-radius: 10px;
      width: 8px;
      background: #ddd;
    }

    &::-webkit-scrollbar-thumb {
      background: #0003;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }

  .errorMsg {
    position: absolute;
    width: 26rem;
    height: 16rem;
    padding: 3rem 6rem;
    background: #c3423f;
    color: #f2f2f2;
    @include flex();
    justify-content: flex-end;
    border-radius: 10px;
    transform: translateY(-4rem);
    left: 35%;
    font-weight: bold;
    line-height: 1.8rem;

    p {
      text-align: center;
    }

    button {
      margin: 1.5rem 0rem 2rem 0rem;
      padding: 0.6rem 1.4rem;
      border-radius: 2rem;
      color: #c3423f;
      background: #f2f2f2;
      font-weight: bold;
      border: none;
    }
  }
}
</style>
