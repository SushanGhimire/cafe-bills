<template>
  <div
    class="w-full h-full relative overflow-auto lg:flex lg:space-x-4 items-start p-5 bg-gray-50"
  >
    <div class="h-screen w-screen absolute" v-if="isDelete">
      <div
        class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"
      >
        <div
          class="z-50 relative p-3 mx-auto my-0 max-w-full"
          style="width: 500px"
        >
          <div
            class="bg-white rounded shadow-lg border flex flex-col overflow-hidden px-10 py-10"
          >
            <div class="text-center">
              <span
                class="material-icons border-4 rounded-full px-6 py-4 text-red-500 font-bold border-red-500 text-2xl"
              >
                X
              </span>
            </div>
            <div class="text-center py-6 text-2xl text-gray-700">
              Are you sure ?
            </div>
            <div class="text-center font-light text-gray-700 mb-8">
              Do you really want to delete these records? This process cannot be
              undone.
            </div>
            <div class="flex justify-center">
              <button
                @click="closedelete"
                class="bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2 focus:outline-none mx-1"
              >
                Cancel
              </button>
              <button
                @click="deleteRecord(deleteDataId)"
                class="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div
          class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"
        ></div>
      </div>
    </div>
    <div class="h-screen w-screen absolute" v-if="isEdit">
      <div
        class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"
      >
        <div
          class="z-50 relative p-3 mx-auto my-0 max-w-full"
          style="width: 500px"
        >
          <form method="post" class="w-full flex flex-col bg-white shadow-md">
            <div class="w-full flex bg-gray-100 py-3 border-b border-gray-300">
              <p class="mx-auto text-xl font-medium text-gray-700 mb-2">
                Product Form
              </p>
            </div>
            <!-- category  -->
            <div class="w-full flex flex-col px-6 mt-4">
              <label for="" class="text-xl font-medium text-gray-700 mb-2"
                >Category</label
              >
              <select
                name=""
                id=""
                class="border px-3 py-4 focus:outline-none bg-white"
                v-model="UpdateData.productType"
              >
                <option value="" selected="" disabled="" class="">
                  ---Select Product Category---
                </option>
                <option value="0">Kitchen</option>
                <option value="1">Bar</option>
              </select>
            </div>
            <!-- name  -->
            <div class="w-full flex flex-col px-6 mt-4">
              <label for="" class="text-xl font-medium text-gray-700 mb-2"
                >Name</label
              >
              <input
                v-model="UpdateData.name"
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
                v-model="UpdateData.productDescription"
                name=""
                id=""
                cols="30"
                rows="5"
                class="border px-5"
              ></textarea>
            </div>
            <!-- quantity flag  -->
            <div class="w-full flex flex-col px-6 mt-4">
              <label for="" class="text-xl font-medium text-gray-700 mb-2"
                >Product Quantity</label
              >
              <select
                name=""
                id=""
                class="border px-3 py-4 focus:outline-none bg-white"
                v-model="UpdateData.quantityFlag"
              >
                <option value="" selected="" disabled="" class="">
                  ---Select Product Quantity---
                </option>
                <option value="0">Full</option>
                <option value="1">Half</option>
                <option value="2">Quater</option>
              </select>
            </div>
            <!-- price  -->
            <div class="w-full flex flex-col px-6 mt-4">
              <label for="" class="text-xl font-medium text-gray-700 mb-2"
                >Price</label
              >
              <input
                v-model="UpdateData.price"
                type="number"
                class="border p-2 lg:p-3 focus:outline-none focus:border-chulho"
              />
            </div>
            <div class="flex justify-center space-x-8 py-5">
              <button
                type="submit"
                class="bg-blue-500 text-white py-2 px-6 text-xl hover:bg-blue-600"
              >
                Save
              </button>
              <button
                @click="editProduct"
                class="bg-red-600 text-white py-2 px-6 text-xl hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div
          class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"
        ></div>
      </div>
    </div>
    <!-- product form  -->
    <div class="w-full lg:w-96">
      <form
        method="post"
        class="w-full flex flex-col bg-white shadow-md"
        @submit.prevent=""
      >
        <div
          class="w-full flex bg-chulho text-white py-3 border-b border-gray-300"
        >
          <p class="mx-auto text-xl font-medium mb-2">Product Form</p>
        </div>
        <!-- category  -->
        <div class="w-full flex flex-col px-6 mt-4">
          <label for="" class="text-xl font-medium text-gray-700 mb-2"
            >Category</label
          >
          <select
            name=""
            id=""
            class="border px-3 py-4 focus:outline-none bg-white"
            v-model="ProductData.productType"
          >
            <option value="" selected="" disabled="" class="">
              ---Select Product Category---
            </option>
            <option value="Kitchen">Kitchen</option>
            <option value="Bar">Bar</option>
          </select>
        </div>
        <!-- name  -->
        <div class="w-full flex flex-col px-6 mt-4">
          <label for="" class="text-xl font-medium text-gray-700 mb-2"
            >Name</label
          >
          <input
            v-model="ProductData.name"
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
            v-model="ProductData.productDescription"
            name=""
            id=""
            cols="30"
            rows="5"
            class="border px-5"
          ></textarea>
        </div>
        <!-- quantity flag  -->
        <div class="w-full flex flex-col px-6 mt-4">
          <label for="" class="text-xl font-medium text-gray-700 mb-2"
            >Product Quantity</label
          >
          <select
            name=""
            id=""
            class="border px-3 py-4 focus:outline-none bg-white"
            v-model="ProductData.quantityFlag"
          >
            <option value="" selected="" disabled="" class="">
              ---Select Product Quantity---
            </option>
            <option value="0">Full</option>
            <option value="1">Half</option>
            <option value="2">Quater</option>
          </select>
        </div>
        <!-- price  -->
        <div class="w-full flex flex-col px-6 mt-4">
          <label for="" class="text-xl font-medium text-gray-700 mb-2"
            >Price</label
          >
          <input
            v-model="ProductData.price"
            type="number"
            class="border p-2 lg:p-3 focus:outline-none focus:border-chulho"
          />
        </div>
        <div class="flex justify-center space-x-8 py-5">
          <button
            @click="SubmitData"
            type="submit"
            class="bg-blue-500 text-white py-2 px-6 text-xl hover:bg-blue-600"
          >
            Save
          </button>
          <button
            @click="CancelData"
            class="bg-red-600 text-white py-2 px-6 text-xl hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    <!-- Product list  -->
    <div class="w-full lg:flex-1 h-full overflow-auto pb-12 mt-10 lg:mt-0">
      <section class="w-full flex flex-col bg-white shadow-md">
        <div
          class="w-full flex bg-chulho text-white py-3 border-b border-gray-300 px-5"
        >
          <p class="text-xl font-medium mb-2">Product Type List</p>
        </div>
        <!-- search  -->
        <div class="flex px-5 py-4 items-center space-x-4">
          <input
            type="text"
            class="border px-3 py-2 focus:outline-none focus:border-chulho"
          />
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-6 text-xl hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        <!-- list table -->
        <div class="w-full h-full flex pb-5">
          <table class="table-auto w-full border">
            <thead>
              <tr class="bg-chulho lg:text-xl text-white">
                <th class="lg:w-24 py-3">SN</th>
                <th class="lg:w-24 py-3">Category</th>
                <th class="py-3">Product Information</th>
                <th class="py-3">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="(Product, index) in 4" :key="index" class="divide-x">
                <td class="text-center text-lg py-2">{{ index + 1 }}</td>
                <td class="text-center text-lg py-2">Category</td>
                <td class="flex flex-col lg:text-lg py-2 pl-4">
                  <div class="flex mt-2 space-x-4">
                    <label for="">Name:</label>
                    <label for="" class="font-bold"> {{ Product.name }}</label>
                  </div>
                  <div class="flex space-x-4">
                    <label for="">Description:</label>
                    <label for="" class="font-bold">{{ Product.flag }}</label>
                  </div>
                  <div class="flex space-x-4">
                    <label for="">Price:</label>
                    <label for="" class="font-bold">{{ Product.flag }}</label>
                  </div>
                </td>
                <td class="text-center text-lg py-2 pl-3">
                  <div class="flex space-x-4 items-center">
                    <span
                      class="flex lg:hidden"
                      @click="editProduct(Product.id)"
                    >
                      <svg
                        class="w-6 h-6 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                    </span>
                    <button
                      @click="editProduct(Product.id)"
                      class="hidden lg:flex bg-blue-500 text-white py-2 px-6 text-xl hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <span
                      class="flex lg:hidden"
                      @click="closedelete(Product.id)"
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
                    <button
                      @click="closedelete(Product.id)"
                      class="hidden lg:flex bg-red-600 text-white py-2 px-6 text-xl hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "../axios/index";
export default {
  data() {
    return {
      isEdit: false,
      isDelete: false,
      ProductData: {
        flag: "",
        name: "",
        price: "",
        productDescription: "",
        quantityFlag: "",
        quantityFull: "",
        quantityHalf: "",
        quantityQuater: "",
      },
      UpdateData: [],
      ProductTable: [],
      deleteId: "",
      updateId: "",
    };
  },
  mounted() {
    this.ProductList();
  },
  methods: {
    ProductList() {
      axios
        .get("api/product/viewAllProduct")
        .then(async (res) => {
          this.ProductTable = await res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    CancelData() {
      this.ProductData.flag = "";
      this.ProductData.name = "";
      this.ProductData.price = "";
      this.ProductData.productDescription = "";
      this.ProductData.quantityFlag = "";
      this.ProductData.quantityFull = "";
      this.ProductData.quantityHalf = "";
      this.ProductData.quantityQuater = "";
    },
    SubmitData() {
      axios
        .post("api/product/saveProduct", this.ProductData)
        .then((res) => {
          console.log(res);
          this.ProductList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteRecord(data) {
      axios
        .delete("api/product/deleteProductById/" + data)
        .then((res) => {
          console.log(res);
          this.isDelete = !this.isDelete;
          this.ProductList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateRecord(data) {
      axios
        .put("api/product/updateProductById/" + data, this.UpdateData)
        .then((res) => {
          console.log(res);
          this.isDelete = !this.isDelete;
          this.ProductList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closedelete(data) {
      this.deleteId = data;
      this.isDelete = !this.isDelete;
    },
    editProduct(data) {
      axios
        .get("api/product/viewProductById/" + data)
        .then(async (res) => {
          this.UpdateData = await res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      this.isEdit = !this.isEdit;
      this.updateId = data;
    },
    CloseProduct() {
      this.isEdit = !this.isEdit;
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatey(-20px);
  opacity: 0;
}
.bg {
  background: rgba(31, 41, 55, 0.5);
}
</style>