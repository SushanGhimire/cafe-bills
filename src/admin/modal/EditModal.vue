<template>
  <div
    class="bg w-full h-full flex justify-center overflow-x-hidden top-0 left-0 absolute"
  >
    <!-- category form  -->
    <div class="w-full lg:w-96">
      <form method="post" class="w-full flex flex-col bg-white shadow-md">
        <div class="w-full flex bg-gray-100 py-3 border-b border-gray-300">
          <p class="mx-auto text-xl font-medium text-gray-700 mb-2">
            Category Form
          </p>
        </div>
        <!-- name  -->
        <div class="w-full flex flex-col px-6 mt-4">
          <label for="" class="text-xl font-medium text-gray-700 mb-2"
            >Name</label
          >
          <input
            type="text"
            class="border p-2 lg:p-3 focus:outline-none focus:border-chulho"
          />
        </div>
        <!-- Description  -->
        <div class="w-full flex flex-col px-6 mt-4">
          <label for="" class="text-xl font-medium text-gray-700 mb-2"
            >Description</label
          >
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            class="border px-5"
          ></textarea>
        </div>
        <div class="flex justify-center space-x-8 py-5">
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-6 text-xl hover:bg-blue-600"
          >
            Save
          </button>
          <button
            class="bg-red-600 text-white py-2 px-6 text-xl hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>