<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" /><br />
    <button @click="callApi">API 테스트</button><br /><br />
    <router-link to="/hello">Hello</router-link><br /><br />
    <router-link to="/about">About</router-link><br /><br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  methods: {
    callApi: function () {
      this.axios
        .get("/api/hello", {})
        .then((response) => alert("정상 통신"))
        .catch((error) => alert("통신 실패"));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
