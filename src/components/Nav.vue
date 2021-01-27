<template>
  <div
    class="w-full flex items-center justify-between bg-chulho px-10 py-2 font-roboto"
  >
    <router-link
      to="/"
      class="text-white py-3 shadow-lg text-lg lg:text-2xl font-semibold tracking-widest"
    >
      CHULHO
    </router-link>
    <div class="flex space-x-1 items-center cursor-pointer">
      <div class="text-white text-xl lg:text-2xl">Waiter</div>
      <svg
        class="w-5 lg:w-7 h-5 lg:h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>