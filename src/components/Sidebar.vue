<template>
  <aside
    class="bg-green-300 h-full"
    :class="{'w-1/5': isOpen}"
  >
    <div class="flex flex-col">
      <img
        class="w-auto"
        :src="'src/assets/img/venadosfc.jpg'"
        alt="Venados"
      >
      <button
        class="h-20 bg-red-300 border-4 border-black-500 text-center hover:bg-yellow-300 truncate"
      >
        Home
      </button>
      <button
        class="h-20 bg-red-300 border-4 border-black-500 text-center hover:bg-yellow-300 truncate"
      >
        Estadisticas
      </button>
      <button
        class="h-20 bg-red-300 border-4 border-black-500 text-center hover:bg-yellow-300 truncate"
      >
        Jugador
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>
