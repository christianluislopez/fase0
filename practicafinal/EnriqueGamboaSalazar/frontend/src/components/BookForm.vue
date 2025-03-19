<template>
  <form @submit.prevent="addBook">
    <input v-model="book.title" placeholder="Título" required pattern="[A-Za-z ]+">
    <input v-model="book.author" placeholder="Autor" required pattern="[A-Za-z ]+">
    <input v-model="book.language" placeholder="Idioma" required pattern="[A-Za-z ]+">
    <input type="date" v-model="book.publication_date" required>
    <input type="email" v-model="book.email" placeholder="Correo Editorial" required>
    <input type="tel" v-model="book.phone" placeholder="Número Celular" required pattern="[0-9]+">
    <button type="submit">Agregar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      book: { title: "", author: "", language: "", publication_date: "", email: "", phone: "" },
    };
  },
  methods: {
    async addBook() {
      await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.book),
      });
      this.$emit("bookAdded");
    },
  },
};
</script>
