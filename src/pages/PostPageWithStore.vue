<template>
  <div>
    <h1>Страница с постами</h1>

    <!--единственный вариант c Vuex - прокидывать соответствующий пропс - и прослушивать событие-->
    <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск..."
    />

    <div class="app__btns">
      <my-button
          @click="showDialog"
      >Создать пользователя
      </my-button>

      <!--единственный вариант c Vuex - прокидывать соответствующий пропс - и прослушивать событие-->
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>

    <div
        v-intersection="loadMorePosts"
        class="observer"
    ></div>

  </div>
</template>

<script>

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PageList from "@/components/PageList.vue";
// import axios from "axios";
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
  components: {
    PostList, PostForm, PageList
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      // this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      // this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      searchQuery: state => state.post.searchQuery,
      selectedSort: state => state.post.selectedSort,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
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