<template>
  <aside
    class="bg-green-300 h-screen flex flex-col"
    :class="{'w-1/5': isOpen}"
  >
    <img
      class="w-auto"
      :src="'src/assets/img/venadosfc.jpg'"
      alt="Venados"
    >
    <button
      class="h-20 bg-red-300 border-4 border-black-500 text-center hover:bg-yellow-300 truncate"
      @click="goToView('home')"
    >
      Home
    </button>
    <button
      class="h-20 bg-red-300 border-4 border-black-500 text-center hover:bg-yellow-300 truncate"
      @click="goToView('statistics')"
    >
      Estadisticas
    </button>
    <button
      class="h-20 bg-red-300 border-4 border-black-500 text-center hover:bg-yellow-300 truncate"
      @click="goToView('players')"
    >
      Jugadores
    </button>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    goToView: {
      type: Function,
      default: null
    }
  }
};
</script>
