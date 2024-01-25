<template>
  <div class="card-product" @click="$emit('detailProduct', product)">
    <a :href="$router.resolve({
      name: 'detail-product',
      params: { id: product.id },
    }).href
      ">
      <b-card :title="product.title" :img-alt="product.title" img-top tag="article"
        style="max-width: 20rem; height: 500px;" class="mb-2">
        <div class="image">
          <img :src="product.image" />
        </div>

        <b-card-text>
          <strong>{{ product.price }} &#8372;</strong>
        </b-card-text>

        <template #footer>
          <div class="col">
            <small class="text-muted"><b>Виробник:</b> {{ product.producer }}</small>
          </div>
          <div class="col">
            <small class="text-muted"><b>Колір:</b> {{ product.color }}</small>
          </div>
          <div class="col">
            <small class="text-muted"><b>Довжина:</b> {{ product.width }}</small>
          </div>
          <div class="col">
            <small class="text-muted"><b>Ширина:</b> {{ product.height }}</small>
          </div>
        </template>
      </b-card>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card-product {
  margin-right: 10px;
  cursor: pointer;

  .image {
    position: relative;
    width: 150px;
    height: 250px;
    margin: auto;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: auto;
    }
  }
}
</style>