<template>
  <div class="page__wrapper">
    <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
            'current-page': this.page === pageNumber
          }"
        @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      required: true
    }
  },

}
</script>

<style scoped>
  .page__wrapper {
    display: flex;
    margin-top: 15px;
  }
  .page {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
  }
  .current-page {
    border: 2px solid teal;
  }
</style>