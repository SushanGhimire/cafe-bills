<template>
  <div class="w-screen h-screen overflow-y-hidden flex flex-col font-fira">
    <Nav />
    <div class="w-full flex h-full">
      <Aside />
      <div class="flex-1 flex">
        <router-view v-slot="slotprops">
          <transition name="route" mode="out-in">
            <component :is="slotprops.Component"></component>
          </transition>
        </router-view>
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
<style  lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.route-enter-active,
.route-leave-active {
  transition: All 0.2s ease;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
