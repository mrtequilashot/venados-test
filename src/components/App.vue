<template lang="pug">
    div(class="w-full min-h-screen bg-yellow-100 flex flex-row")
      transition(name="fade")
        sidebar(v-if="isOpen" :isOpen='isOpen')
      div(class="h-screen" :class="{'w-4/5': isOpen, 'w-full': !isOpen}")
        header(class="w-full main__header bg-red-300")
          button(class="bg-blue-300 h-full" @click="isOpen = !isOpen") hamburger
        games-view
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import GamesView from '@/views/Games.vue';
import venados from '@/apis/venados.js';

export default {
  name: 'App',
  components: {
    Sidebar,
    GamesView
  },
  data() {
    return {
      isOpen: true
    };
  },
};
</script>

<style  scoped>
  .main__header{
    min-height: 5%;
  }
</style>
