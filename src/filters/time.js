import Vue from 'vue';

Vue.filter('DateToReadableFormat', (datetime, options = { year: 'numeric', month: 'long', day: 'numeric' }) => new Date(datetime).toLocaleDateString(undefined, options));
