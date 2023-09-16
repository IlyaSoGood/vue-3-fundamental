<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    />

    <div class="app__btns">
      <my-button
      >Создать пользователя
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>

    <div
        class="observer"
    ></div>

  </div>
</template>

<script>

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PageList from "@/components/PageList.vue";
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
export default {
  components: {
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
    const {posts, isPostLoading, totalPages} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostLoading,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
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