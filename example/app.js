Vue.use(VueVimeoEmbed);

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods:{
    playTest: function(data){
      console.log('playTest', data);
    }
  }
})