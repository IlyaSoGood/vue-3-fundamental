<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="posts__btns">
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
      >
        Открыть
      </my-button>
      <my-button
        @click="$emit('remove', post)"
      >Удалить
      </my-button>

    </div>
  </div>
</template>

<script>

import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  //добавление пропсов в компонент
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .posts__btns {
    display: flex;
  }
</style>