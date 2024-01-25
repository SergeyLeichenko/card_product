<template>
  <div class="home">
    <div class="container pt-5">
      <div class="filters">
        <div class="row justify-content-between">
          <div class="col-3 mt-3">
            <b-form-input type="text" v-model="searchName" placeholder="Введіть назву" />
          </div>

          <div class="col-3">
            <div class="multi-range">
              <input type="range" min="0" max="100000" step="10" v-model.number="minPrice" @change="setRangesSlider">
              <input type="range" min="0" max="100000" step="10" v-model.number="maxPrice" @change="setRangesSlider">
            </div>
          </div>

          <div class="col-2">
            <div class="range-values">
              <p>Min: {{ minPrice }}</p>
              <p>Max: {{ maxPrice }}</p>
            </div>
          </div>

        </div>
      </div>

      <div class="cards mt-5 d-flex flex-wrap">
        <CardProduct v-for="item in filteredProducts" :key="item.id" :product="item" @detailProduct="detailProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    CardProduct,
  },
  data() {
    return {
      searchName: "",
      products: [
        {
          id: 1,
          title: "Samsung Galaxy A54 8/256GB Black",
          image: require("@/assets/images/p-1.jpg"),
          price: 18299,
          producer: "Samsung",
          color: "Black",
          width: "76.7 мм",
          height: "158.3 мм",
          category: "phone"
        },
        {
          id: 2,
          title: "Samsung Galaxy S24 Ultra 12/1Tb Titanium Black",
          image: require("@/assets/images/p-2.jpg"),
          price: 22199,
          producer: "Samsung",
          color: "Silver",
          width: "79 мм",
          height: "162.3 мм",
          category: "phone"
        },
        {
          id: 3,
          title: "Samsung Galaxy A54 5G 6/128Gb Light Violet",
          image: require("@/assets/images/p-1.jpg"),
          price: 15799,
          producer: "Samsung",
          color: "Light Violet",
          width: "76.7 мм",
          height: "158.2 мм",
          category: "phone"
        },
        {
          id: 4,
          title: "Телевізор Sony KD55X85L",
          image: require("@/assets/images/tv-1.jpg"),
          price: 49999,
          producer: "Sony",
          color: "Black",
          width: "1228 мм",
          height: "784 мм",
          category: "tv"
        },
        {
          id: 5,
          title: "Телевізор Sony XR65A80L",
          image: require("@/assets/images/tv-2.jpg"),
          price: 29799,
          producer: "Sony",
          color: "Silver",
          width: "1448 мм",
          height: "836 мм",
          category: "tv"
        },
        {
          id: 6,
          title: "Телевізор Sony XR55X90KR",
          image: require("@/assets/images/tv-3.jpg"),
          price: 57799,
          producer: "Sony",
          color: "Black",
          width: "1233 мм",
          height: "740 мм",
          category: "tv"
        }
      ],
      sortProducts: [],
      minPrice: 0,
      maxPrice: 100000,
      selected: null
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((elem) => {
        return elem.title
          .toLowerCase()
          .includes(this.searchName.toLowerCase()) &&
          (elem.price >= this.minPrice && elem.price <= this.maxPrice)
      })
    }
  },
  methods: {
    ...mapActions(["VIEW_PRODUCT"]),
    detailProduct(data) {
      this.VIEW_PRODUCT(data)
    },
    setRangesSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = tmp
      }
    },
  }  
};
</script>

<style scoped lang="scss">
input[type=range] {
  box-sizing: border-box;
  appearance: none;
  width: 300px;
  margin: 0;
  padding: 0 2px;
  /* Add some L/R padding to ensure box shadow of handle is shown */
  overflow: hidden;
  border: 0;
  border-radius: 1px;
  outline: none;
  background: linear-gradient(grey, grey) no-repeat center;
  /* Use a linear gradient to generate only the 2px height background */
  background-size: 100% 2px;
  pointer-events: none;

  &:active,
  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    height: 28px;
    width: 28px;
    border-radius: 28px;
    background-color: #fff;
    position: relative;
    margin: 5px 0;
    /* Add some margin to ensure box shadow is shown */
    cursor: pointer;
    appearance: none;
    pointer-events: all;
    box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);

    &::before {
      content: ' ';
      display: block;
      position: absolute;
      top: 13px;
      left: 100%;
      width: 2000px;
      height: 2px;
    }
  }
}

.multi-range {
  position: relative;
  margin-top: 16px;

  input[type=range] {
    position: absolute;

    &:nth-child(1) {
      &::-webkit-slider-thumb::before {
        background-color: red;
      }
    }

    &:nth-child(2) {
      background: none;

      &::-webkit-slider-thumb::before {
        background-color: grey;
      }
    }
  }
}
</style>