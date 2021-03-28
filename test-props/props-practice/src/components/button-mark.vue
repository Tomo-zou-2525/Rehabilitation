<template>
  <!-- クリックイベントをバインディング  -->
  <button v-on:click="mark = mark + /'!'"></button>
</template>

<script>
export default {
  date: function () {
    return {
      mark: "!",
    };
  },
};
</script>
