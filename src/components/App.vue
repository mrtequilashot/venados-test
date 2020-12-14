<template lang="pug">
    div(class="w-full min-h-screen bg-yellow-100 flex flex-row")
      transition(name="fade")
        sidebar(v-if="isOpen" :isOpen='isOpen' :goToView="setView")
      div(class="h-screen" :class="{'w-4/5': isOpen, 'w-full': !isOpen}")
        header(class="w-full main__header bg-red-300")
          button(class="bg-blue-300 h-full" @click="isOpen = !isOpen") hamburger
        games-view(v-if="selectedView === 'home'")
        players-view(v-if="selectedView === 'players'")
        statistics-view(v-if="selectedView === 'statistics'")
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import GamesView from '@/views/Games.vue';
import PlayersView from '@/views/Players.vue';
import StatisticsView from '@/views/Statistics.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    GamesView,
    PlayersView,
    StatisticsView
  },
  data() {
    return {
      isOpen: true,
      selectedView: 'home'
    };
  },
  methods: {
    setView(view) {
      this.selectedView = view;
    }
  }
};
</script>

<style  scoped>
  .main__header{
    min-height: 5%;
  }
</style>
