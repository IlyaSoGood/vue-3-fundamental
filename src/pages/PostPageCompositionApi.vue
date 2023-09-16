<template>
  <div>
    <h2>{{ likes }}</h2>
    <my-button @click="addLikes">Лайк</my-button>
    <h1>Страница с постами</h1>
<!--    <my-input-->
<!--        v-model="searchQuery"-->
<!--        placeholder="Поиск..."-->
<!--    />-->

<!--    <div class="app__btns">-->
<!--      <my-button-->
<!--          @click="showDialog"-->
<!--      >Создать пользователя-->
<!--      </my-button>-->
<!--      <my-select-->
<!--          v-model="selectedSort"-->
<!--          :options="sortOptions"-->
<!--      />-->
<!--    </div>-->

<!--    <my-dialog v-model:show="dialogVisible">-->
<!--      <post-form-->
<!--          @create="createPost"-->
<!--      />-->
<!--    </my-dialog>-->

<!--    <post-list-->
<!--        :posts="sortAndSearchedPosts"-->
<!--        @remove="removePost"-->
<!--        v-if="!isPostLoading"-->
<!--    />-->
<!--    <div v-else>Идет загрузка...</div>-->

<!--    <div-->
<!--        v-intersection="loadMorePosts"-->
<!--        class="observer"-->
<!--    ></div>-->

  </div>
</template>

<script>

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PageList from "@/components/PageList.vue";
import axios from "axios";
import {ref} from "vue";
import MyButton from "@/components/UI/MyButton.vue";
export default {
  components: {
    MyButton,
    PostList, PostForm, PageList
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ]
    }
  },
  setup(props) {
    const likes = ref(0);
    const addLikes = () =>
        likes.value += 1;
    return {
      likes,
      addLikes
    }
  }
}

</script>

<style scoped>
  .app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }

  .observer {
    height: 30px;
    background: green;
  }
</style>