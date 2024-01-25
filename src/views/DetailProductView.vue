<template>
  <div class="container">
    <div class="pt-2">
      <div class="pb-4">
        <router-link :to="{ name: 'home' }">
          <b-button>На головну</b-button>
        </router-link>
      </div>

      <b-card no-body class="overflow-hidden" style="max-width: 80%;">
        <b-row no-gutters>
          <b-col md="6" class="p-5">
            <b-card-img :src="GET_PRODUCT.image" :alt="GET_PRODUCT.title" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="GET_PRODUCT.title">
 
              <b-card-text>
                <div class="col">
                  <small class="text-muted"><b>Ціна:</b> {{ GET_PRODUCT.price }}</small>
                </div>
                <div class="col">
                  <small class="text-muted"><b>Виробник:</b> {{ GET_PRODUCT.producer }}</small>
                </div>
                <div class="col">
                  <small class="text-muted"><b>Колір:</b> {{ GET_PRODUCT.color }}</small>
                </div>
                <div class="col">
                  <small class="text-muted"><b>Довжина:</b> {{ GET_PRODUCT.width }}</small>
                </div>
                <div class="col">
                  <small class="text-muted"><b>Ширина:</b> {{ GET_PRODUCT.height }}</small>
                </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(["GET_PRODUCT"])
    }
  }
</script>
