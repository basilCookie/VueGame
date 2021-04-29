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
                //가위바우보 선택
                this.selectCom()
                //승패 결정 &생명력 감소 
                this.whoIsWin()
                //게임 리셋 
                this.count = 3
                this.Selectable = true;
                
                //로그를 업데이트 하는 부분 
                this.updateLogs()
                
            } 
        },
        lifeOfMe:function(newVal){
            if(newVal === 0){
                if(newVal === 0){
                    this.endGame('졌습니다')
                }
            }
        },
        lifeOfCom:function(newVal){
            if(newVal === 0){
                this.endGame('이겼습니다')
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
        },
        selectCom : function(){
                let number = Math.random()
                if(number < 0.33){
                   this.comChoice = 'scissor'             
                }else if(number <0.66){
                    this.comChoice = 'rock'    
                }else{
                    this.comChoice = 'paper'
                }
        },
        whoIsWin : function(){
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
        },
        updateLogs : function(){
            let log = {
                messeage : `you ${this.myChoice}, Computer:${this.comChoice}`,
                winner : this.winner
            }
            
            this.logs.unshift(log);
        },
        endGame :  function (msg){
            setTimeout(() => {
                confirm(msg)
                this.lifeOfMe =3 
                this.lifeOfCom =3
                this.myChoice = null
                this.comChoice = null
                this.winner = null
                this.log = []
            }, 500);
        }
    }
})