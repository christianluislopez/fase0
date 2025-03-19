<template>
  <table>
    <tr v-for="(book, index) in books" :key="index" :style="{ backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightpink' }">
      <td>{{ index + 1 }}</td>
      <td>{{ book.title }}</td>
      <td>{{ book.author }}</td>
      <td>{{ book.language }}</td>
      <td>{{ book.email }}</td>
      <td>{{ book.phone }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["books"],
};
</script>
