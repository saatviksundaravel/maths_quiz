player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1_score = 0;
player2_score = 0;


function init() {
    document.getElementById("player_1").innerHTML = player1Name;
    document.getElementById("player_2").innerHTML = player2Name;

    document.getElementById("player1Score").innerHTML = player1_score;
    document.getElementById("player2Score").innerHTML = player2_score;

    document.getElementById("player_question").innerHTML = "Question Turn - " + player1Name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2Name;
}

function send() {

    firstNumber=document.getElementById("number1").value;
    secondNumber=document.getElementById("number2").value;

    correctAnswer=parseInt(firstNumber) * parseInt(secondNumber);
    question=firstNumber+" X "+secondNumber;

    heading = "<h4> Q. " + question + "</h4>"
    inputBox = "<br> Answer : <input type='text' id='answer_field'>";
    button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"

    row = heading + inputBox + button;
    document.getElementById("output").innerHTML = row;

}
