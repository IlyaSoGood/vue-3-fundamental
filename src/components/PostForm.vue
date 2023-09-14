<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
        v-model.trim="post.title"
        placeholder="Название"
        v-focus
    />
    <my-input
        v-model.trim="post.body"
        placeholder="Описание"
    />
    <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost"
    >Создать
    </my-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      //очистка поста после генерации события create
      this.post = {
        title: '',
        body: ''
      }
    },
  }
}
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
  }
</style>