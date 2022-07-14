const appInstance = {
  data() {
    return {

        power:0,
        station: false,
        channels:[
            '<img src="./images/station1.gif">',
            '<img src="./images/station2.gif">',
            '<img src="./images/station3.gif">',
            '<img src="./images/station4.gif">',
            '<img src="./images/station6.gif">',
            '<img src="./images/station5.jpg">'
        ]
        // currentProgram: '<img src="./images/screenOff.png">'

    };
  },
  methods: {
      
    powerTv: function(){
        
        const programs = document.querySelector(".tv_stations")
        
       if(this.power == 0){
        
        programs.innerHTML= '<img src="./images/screenOff.png">';
        this.power = 1;        
       }
       else{
        programs.innerHTML= '<img src="./images/station6.gif">';
        this.power = 0;
        console.log(Math.floor(Math.random() * 10));
        // console.log(this.channels[2]);
       }
        
        
    },
    
   
    next: function(){
        
        const programs = document.querySelector(".tv_stations");
        let rand = Math.floor(Math.random() * 10);
        const len = this.channels.length;
        
       if(rand >= len){
        rand = rand-4
       }
       else{
        rand = rand
       }
       if(!this.power == 0){
        programs.innerHTML= '<img src="./images/screenOff.png">';
       }
       else{
        programs.innerHTML = "";
        programs.innerHTML= this.channels[rand]
       }
       return this.channels[rand];
    },

    previous: function(){
        
      const programs = document.querySelector(".tv_stations");
        let rand = Math.floor(Math.random() * 10);
        const len = this.channels.length;
        
       if(rand >= len){
        rand = rand-4
       }
       else{
        rand = rand
       }
       if(!this.power == 0){
        programs.innerHTML= '<img src="./images/screenOff.png">';
       }
       else{
        programs.innerHTML = "";
        programs.innerHTML= this.channels[rand]
       }
    
  },

  },
};
Vue.createApp(appInstance).mount("#app");
