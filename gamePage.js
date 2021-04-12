var player1=localStorage.getItem("player1Name");
var player2=localStorage.getItem("player2Name");

function init(){
    document.getElementById("player_1").innerHTML=player1;
    document.getElementById("player_2").innerHTML=player2;
}