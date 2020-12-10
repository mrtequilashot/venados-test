<template lang="pug">
    div(class="w-full h-full flex flex-row")
      transition(name="fade")
        sidebar(v-if="isOpen" :isOpen='isOpen')
      div(:class="{'w-4/5': isOpen, 'w-full': !isOpen}")
        header(class="w-full h-2/12 bg-red-300")
          button(class="bg-blue-300 h-full" @click="isOpen = !isOpen") hamburger
        div(class="h-10/12 bg-yellow-300 flex flex-row")
          div(class="w-1/2 bg-blue-200")
            h1 hello
          div(class="w-1/2 bg-blue-200")
            h1 hello
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  },
  data() {
    return {
      isOpen: true
    };
  },
};
</script>
