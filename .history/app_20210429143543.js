new Vue({
    el : '#app',
    data : {
        myChoice : null,
        comChoice : null,
        count : 3
    },
    watch :{
        count: function(newVal){
            if(newVal === 0 ){
                let number = Math.random()
                if(number < 0.33){
                   this.comChoice = 'scissor'             
                }else if(number <0.66){
                    this.comChoice = 'rock'    
                }else{
                    this.comChoice = 'paper'
                }
            } 
        }
    },
    methods:{
        startGame : function(){
            if(this.myChoice === null){
                alert('가위 바위 보 중 하나를 선택해 주세요')
            }else{
                let countDown = setInterval(()=>{
                    this.count--
                    if(this.count === 0 ){
                        clearInterval(countDown);
                    }
                },1000)
            }
        }
    }
})