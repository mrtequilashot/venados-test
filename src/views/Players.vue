<template>
  <section class="main__game">
    <div
      class="bg-blue-300 min-h-full h-full\
      max-h-full flex flex-row items-center justify-center flex-wrap overflow-y-auto">
      <template v-for="position in players">
        <div
          v-for="player in position"
          :key="player.number"
          class="w-40 h-40 flex flex-col justify-center items-center cursor-pointer"
          @click="selectPlayer(player)"
        >
          <img class="object-cover w-20 h-20 rounded-full" :src="player.image" alt="">
          <h1 class="text-white font-extrabold">{{ player.position }}</h1>
          <h1
            class="text-center">
            {{ `${player.name} ${player.first_surname} ${player.second_surname}` }}
          </h1>
        </div>
      </template>
    </div>
    <modal
      v-show="isOpenModal"
      @close="isOpenModal = false"
    >
      <template v-slot:header>
        <h1>
          {{ `${selectedPlayer.name} ${selectedPlayer.first_surname} \
          ${selectedPlayer.second_surname}` }}
        </h1>
      </template>
      <template v-slot:body>
        <div class="flex flex-col h-full justify-around items-center">
          <div class="h-1/2 w-full flex flex-col justify-center items-center bg-green-700">
            <h1>Ficha tecnica</h1>
            <img
              class="object-cover w-40 h-40 rounded-full"
              :src="selectedPlayer.image"
              alt=""
            >
            <h1>
              {{ `${selectedPlayer.name} ${selectedPlayer.first_surname} \
              ${selectedPlayer.second_surname}` }}
            </h1>
            <h1>
              {{ selectedPlayer.position }}
            </h1>
          </div>
          <div class="bg-white h-1/2 w-full flex flex-col items-center justify-center">
            <h1>Lugar de nacimiento</h1>
            <h5>
              {{ selectedPlayer.birth_place }}
            </h5>
            <h1>Fecha de nacimiento</h1>
            <h5>{{ selectedPlayer.birthday | DateToReadableFormat }}</h5>
            <h1>Peso</h1>
            <h5>{{ selectedPlayer.weight }}</h5>
            <h1>Altura</h1>
            <h5>{{ selectedPlayer.height }}</h5>
            <h1>Equipo anterior</h1>
            <h5>{{ selectedPlayer.last_team }}</h5>
          </div>
        </div>
      </template>
    </modal>
  </section>
</template>

<script>
import venados from '@/apis/venados.js';
import Modal from '@/components/Modal.vue';

export default {
  name: 'PlayersView',
  components: {
    Modal
  },
  data() {
    return {
      players: [],
      isOpenModal: false,
      selectedPlayer: {}
    };
  },
  computed: {
  },
  async mounted() {
    const { data } = await venados.trae('/players/').then((res) => res).catch((err) => alert(err));
    this.players = data;
  },
  methods: {
    selectPlayer(player) {
      this.selectedPlayer = player;
      this.isOpenModal = true;
    },
  }
};
</script>

<style scoped>
  .main__game{
    min-height: 95%;
  }
</style>
