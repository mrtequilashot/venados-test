<template lang="pug">
  section.main__game.bg-yellow-300.inline.my-0
    h1 hello statistics
</template>

<script>
import venados from '@/apis/venados.js';

export default {
  name: 'StatisticsView',
  data() {
    return {
    };
  },
  computed: {
  },
  async mounted() {
    const { data } = await venados.trae('/games/').then((res) => res).catch((err) => alert(err));
    this.games = data;
  },
  methods: {
  }
};
</script>

<style scoped>
  .main__game{
    min-height: 95%;
  }
</style>
