<template>
  <BookForm @bookAdded="fetchBooks" />
  <BookTable :books="books" />
</template>

<script>
import BookForm from "./components/BookForm.vue";
import BookTable from "./components/BookTable.vue";

export default {
  components: { BookForm, BookTable },
  data() {
    return { books: [] };
  },
  methods: {
    async fetchBooks() {
      const res = await fetch("http://localhost:5000/api/books");
      this.books = await res.json();
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script>
