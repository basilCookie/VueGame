new Vue({
    el : '#app',
    data : {
        myChoice : null,
        count 
    },
    methods:{
        startGame : function(){
            if(this.myChoice === null){
                alert('가위 바위 보 중 하나를 선택해 주세요')
            }else{
                console.log('선택완료')
            }
            console.log("koko")
        }
    }
})