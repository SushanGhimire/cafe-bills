<template>
  <div class="w-full h-full bg-chulho flex space-x-3 p-5 items-start">
    <div
      class="w-1/3 h-full overflow-auto bg-white shadow-md rounded flex flex-col"
    >
      <!-- header -->
      <div class="flex py-3 shadow-md">
        <p class="mx-auto text-xl font-medium">Place Order</p>
      </div>
      <!-- header end  -->
      <!-- table number  or order no-->
      <div class="flex space-x-3 items-center px-5 py-3">
        <label for="" class="text-xl font-medium text-gray-700 mb-2"
          >Table No:</label
        >
        <input
          type="text"
          class="border p-2 lg:p-3 focus:outline-none focus:border-chulho"
        />
      </div>
      <!-- table no or order no end  -->
      <!-- table start here  -->
      <!-- list table -->
      <div class="flex-1 flex p-5">
        <table class="table-auto w-full border">
          <thead>
            <tr class="bg-chulho lg:text-xl text-white">
              <th class="py-3">QTY</th>
              <th class="py-3">Order</th>
              <th class="py-3">Amount</th>
              <th class="py-3">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr class="divide-x" v-for="(i, index) in orderItems" :key="i">
              <td class="text-center text-lg py-2">
                <input
                  type="number"
                  class="w-16 p-2 focus:outline-none focus:border-chulho"
                  :value="i.qty"
                />
              </td>
              <td class="text-center text-lg py-2">
                {{ i.name }} {{ i.price }}
              </td>
              <td class="text-center text-lg py-2">1</td>
              <td class="text-center text-lg py-2">
                <span
                  class="flex justify-center cursor-pointer"
                  @click="deleteOrder(index)"
                >
                  <svg
                    class="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- table end here  -->
      <footer class="w-full px-5">
        <div
          class="flex bg-chulho text-white text-xl px-2 justify-between mb-2 py-4"
        >
          <span> Total</span>
          <span>Rs 10000</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderItems: [
        {
          name: "Happy meal",
          price: 250,
          qty: 3,
        },
        {
          name: "Chicken Lollypop",
          price: 50,
          qty: 5,
        },
        {
          name: "Cappuchinno",
          price: 250,
          qty: 2,
        },
      ],
    };
  },
  methods: {
    deleteOrder(data) {
      alert(data);
      this.orderItems.splice(data, 1);
    },
  },
  mounted() {
    this.$emit("close-nav-aside");
  },
};
</script>

<style>
</style>