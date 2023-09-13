<template>
  <div v-if="posts.length > 0">

    <h3>Список пользователей</h3>

    <!--Передаем 'remove' еще выше-->
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>

    <div class="observer"></div>

  </div>
  <h2 v-else style="color: red">
    Список постов пуст
  </h2>

</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  mounted() {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = function (entries, observer) {
      /* Content excerpted, show below */
    };
    const observer = new IntersectionObserver(callback, options);
  }
}
</script>

<style scoped>
  .post-list-enter-active,
  .post-list-leave-active {
    transition: all 0.4s ease;
  }
  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }
  .post-list-move {
    transition: transform 0.4s ease;
  }

  .observer {
    height: 30px;
    background: green;
  }
</style>