const appInstance = {
    data() {
      return {
        items:[
            {id:1, label:"dogs"},
            {id:1, label:"cats"},
            {id:1, label:"cows"},
            {id:1, label:"pigs"},
            {id:1, label:"goats"},
            {id:1, label:"sheep"}
        ]
      };
    },
    methods: {},
  };
  Vue.createApp(appInstance).mount("#app");
  