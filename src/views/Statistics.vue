<template>
  <section class="main__game overflow-y-auto">
    <table class="table-auto w-full">
      <tr class="w-full bg-pink-400">
        <th class=" bg-blue-700" colspan="3">Tabla General</th>
        <th class="">JJ</th>
        <th class="">DG</th>
        <th class="">PTS</th>
      </tr>
      <tr
        v-for="(statItem, index) in stats"
        :key="index"
        class="bg-yellow-200 border-gray-600">
        <td class="w-2/12 border-4">
          {{ statItem.position }}
        </td>
        <td class="w-2/12 border-4">
          <img
            :src="statItem.image"
            class="object-contain"
          >
        </td>
        <td class="w-2/12 border-4">
          {{ statItem.team }}
        </td>
        <td class="w-2/12 border-4">
          {{ statItem.games }}
        </td>
        <td class="w-2/12 border-4">
          {{ statItem.score_diff }}
        </td>
        <td class="w-2/12 border-4">
          {{ statItem.points }}
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import venados from '@/apis/venados.js';

export default {
  name: 'StatisticsView',
  data() {
    return {
      stats: [],
    };
  },
  computed: {},
  async mounted() {
    const { data } = await venados
      .trae('/statistics/')
      .then((res) => res)
      .catch((err) => alert(err));
    this.stats = data;
  },
  methods: {},
};
</script>

<style scoped>
.main__game {
  min-height: 95%;
  height: 95%;
  max-height: 95%;
}
td{
  text-align: center;
  vertical-align: middle;
}
</style>
