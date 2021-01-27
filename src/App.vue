<template>
  <div class="w-screen h-screen overflow-y-hidden flex flex-col">
    <Nav />
    <div class="w-full flex h-full">
      <Aside />
      <div class="flex-1 flex">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Aside from "./components/Aside";
export default {
  components: {
    Nav,
    Aside,
  },
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
