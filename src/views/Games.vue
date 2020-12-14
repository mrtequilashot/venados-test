<template lang="pug">
  section.main__game.bg-yellow-300.inline.my-0
    div(class="bg-green-300 flex flex-center justify-center game__header")
      img(class="sm:w-auto object-contain" alt="Venados" :src="'src/assets/img/venadosfc.jpg'")
    div(class="bg-red-300 h-2/3 inline game__body")
      div.tabs
        button(
          @click="selectedLeague = 'Copa MX'"
          :class="{'bg-red-300':  selectedLeague === 'Copa MX'}"
          class="w-1/2 bg-blue-300\
            border-2 border-black-200 h-full uppercase") copa mx
        button(
          @click="selectedLeague = 'Ascenso MX'"
          class="w-1/2 bg-blue-300\
            border-2 border-black-200 h-full hover:bg-blue-100 uppercase"
            :class="{'bg-red-300':  selectedLeague === 'Ascenso MX'}"
          ) ascenso mx
      div.content.overflow-y-auto.bg-green-400
        template(v-for="game, index in selectedGames")
          div(class="w-full flex flex-row h-40" :key="index")
            div(class="w-1/4 flex justify-center items-center")
              h1.text-white.font-bold.text-xl {{ transformDate(game.datetime) }}
            div(class="w-1/4 flex flex-col justify-center items-center")
              img(class="sm:w-auto h-20 object-contain" :src="'src/assets/img/venadosfc.jpg'")
              h1.text-white.font-bold.text-xl Venados
            div(class="w-1/4 flex justify-center items-center")
              h1.text-white.font-bold.text-xl {{game.local ? `${game.home_score}-${game.away_score}` : `${game.away_score}-${game.home_score}`}}
            div(class="w-1/4 flex flex-col justify-center items-center")
              img(class="sm:w-auto h-20 object-contain" :src="game.opponent_image")
              h1.text-white.font-bold.text-xl {{game.opponent}}
</template>

<script>
import venados from '@/apis/venados.js';

export default {
  name: 'GamesView',
  data() {
    return {
      games: [],
      selectedLeague: 'Copa MX'
    };
  },
  computed: {
    selectedGames() {
      return this.games.filter((item) => item.league === this.selectedLeague);
    }
  },
  async mounted() {
    const { data } = await venados.trae('/games/').then((res) => res).catch((err) => alert(err));
    this.games = data;
  },
  methods: {
    transformDate(datetime) {
      const options = { month: 'long', day: 'numeric' };
      return new Date(datetime).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
  .main__game{
    min-height: 95%;
  }
  .game__header{
    height: 30%;
  }
  .game__body{
    height: 65%;
  }
  .tabs{
    height: 10%;
  }
  .content{
    height: 55%;
    width: 100%;
  }
</style>
