<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Поиск..."
    />

    <div class="app__btns">
      <my-button
        @click="showDialog"
      >Создать пользователя
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="sortAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>

    <page-list
        :totalPages="totalPages"
        :page="page"
        @changePage="changePage"
    />
  </div>
</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "./components/PostList";
import PageList from "@/components/PageList.vue";
import axios from "axios";
export default {
  components: {
    PostList, PostForm, PageList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      searchQuery: '',
      selectedSort: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isPostLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    page() {
      this.fetchPosts();
    }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>