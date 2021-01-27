<template>
  <div
    class="md:w-64 lg:w-72 bg-gray-100 border-r flex flex-col h-full overflow-auto overflow-x-hidden shadow-md pb-20"
  >
    <!-- dashboard -->
    <router-link to="/" class="aside-list-style">
      <!-- logo  -->
      <div>
        <svg
          class="lg:w-6 lg:h-6 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          ></path>
        </svg>
      </div>
      <p class="font-medium text-lg lg:text-xl">Dashboard</p>
    </router-link>
    <!-- manager list -->
    <div class="bg-chulho text-white py-1 lg:py-2 text-lg">
      <p class="ml-10">Manager List</p>
    </div>
    <!-- category -->
    <router-link to="Category" class="aside-list-style">
      <!-- logo  -->
      <div>
        <svg
          class="w-5 lg:w-6 h-5 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      </div>
      <p class="font-medium text-lg lg:text-xl">Categories</p>
    </router-link>
    <!-- Products -->
    <router-link to="Products" class="aside-list-style">
      <!-- logo  -->
      <div>
        <svg
          class="w-5 lg:w-6 h-5 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          ></path>
        </svg>
      </div>
      <p class="font-medium text-lg lg:text-xl">Products</p>
    </router-link>
    <!-- Report -->
    <div class="bg-chulho text-white py-1 lg:py-2 text-lg">
      <p class="ml-10">Report</p>
    </div>
    <!-- sales report -->
    <router-link to="SalesReport" class="aside-list-style">
      <!-- logo  -->
      <div>
        <svg
          class="w-5 lg:w-6 h-5 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      </div>
      <p class="font-medium text-lg lg:text-xl">Sales Report</p>
    </router-link>
    <!-- System Users -->
    <div class="bg-chulho text-white py-1 lg:py-2 text-lg">
      <p class="ml-10">Systems</p>
    </div>
    <!-- Users -->
    <router-link to="Users" class="aside-list-style">
      <!-- logo  -->
      <div>
        <svg
          class="w-5 lg:w-6 h-5 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      </div>
      <p class="font-medium text-lg lg:text-xl">Users</p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>