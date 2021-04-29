new Vue({
    el : '#app',
    data : {
        myChoice : null,
        comChoice : null,
        count : 3,
        winner : null,
        lifeOfMe : 3,
        lifeOfCom :3,
        Selectable : true,
        logs : []
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
                //가위바위보 승패
                if(this.myChoice === this.comChoice) this.winner = 'no one'
                else if(this.myChoice === 'rock' & this.comChoice === 'scissor')this.winner = 'me'
                else if(this.myChoice === 'scissor' & this.comChoice === 'paper')this.winner = 'me'
                else if(this.myChoice === 'paper' & this.comChoice === 'rock')this.winner = 'me'
                else if(this.myChoice === 'scissor' & this.comChoice === 'rock')this.winner = 'com'
                else if(this.myChoice === 'paper' & this.comChoice === 'scissor')this.winner = 'com'
                else if(this.myChoice === 'rock' & this.comChoice === 'paper')this.winner = 'com'
                else this.winner = 'error'
                
                //몫 차감
                if(this.winner === 'me'){
                    this.lifeOfCom --
                }else if(this.winner === 'com'){
                    this.lifeOfMe--   
                }
                this.count = 3
                //버튼은 다시 보이게됨
                this.Selectable = true;

                let log = `you ${this.myChoice}, Computer:${this.comChoice}`
                this.logs.push(log);
            } 
        }
    },

    methods:{
        startGame : function(){
            //버튼이 클릭되면 보이지 않음 
            this.Selectable = false;
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