const score = document.getElementById('score');
const btn = document.querySelector('button');
let yourGrade

function GradingSystem(yourScore){
    if(yourScore>100 || yourScore < 0){
        yourGrade= 'Enter Valid Number'

    }
    
    else if (yourScore <= 100 && yourScore >= 70 ){
        yourGrade = 'A';
    
    }
    else if(yourScore >= 60){
        yourGrade = 'B';
        let f 
    }
      
    
    else if (yourScore >= 50){
        yourGrade = 'C';
    }
        
    else if(yourScore >= 45){
        yourGrade = 'D';
    }
    else if(yourScore >=40){
        yourGrade = 'E';
    }
    else{
        yourGrade = 'F';
    }
    
    return yourGrade;

}



function showResult(){
    
    var k =GradingSystem(score.value);
    document.getElementById('result').innerText= k;
    document.getElementById('scoreuser').innerText= score.value;
    
   
    if(k==='E' ||k==='F' ||k=== 'D'||k=== 'Enter Valid Number'){
        document.getElementById('result').style.color = 'red';
        document.getElementById('scoreuser').style.color = 'red';
    }else{
        document.getElementById('result').style.color = 'blue';
        document.getElementById('scoreuser').style.color = 'blue';
    
    }
    score.value = "";
    
    
}
btn.addEventListener('click',showResult);



