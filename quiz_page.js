player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + ": ";
document.getElementById("player2_name").innerHTML = player_2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question turn: " + player_1_name;
document.getElementById("answer_turn").innerHTML = "Answer turn: " + player_2_name;

function send(){
    number1=document.getElementById("number-1").value;
    number2=document.getElementById("number-2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    questioned_number = "<h4 class='text-left'>Q. " + number1 +" X "+ number2 + "</h4>";
    answer_input = "<br>Answer : <input type='number' id='answer_input'>";
    check_button = "<br> <br> <button class='btn btn-danger' onclick='check()'>Check</button>";
    column = questioned_number + answer_input + check_button;
    document.getElementById("number-1").value = "";
    document.getElementById("number-2").value = "";
    document.getElementById("output").innerHTML = column;
}

question_turn="player_1";
answer_turn="player_2";

function check(){
    recieved_answer = document.getElementById("answer_input").value;
    answer = recieved_answer.toLowerCase();
    console.log("Changed answer in lower case is: " + answer);
    if (answer == actual_answer) {
        if (answer_turn == "player_1") {
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("answer_turn").innerHTML = "Answer turn: " + player_2_name;
    }
    else {
        answer_turn = "player_1";
        document.getElementById("answer_turn").innerHTML = "Answer turn: " + player_1_name;
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("question_turn").innerHTML = "Question turn: " + player_2_name;
    }
    else {
        question_turn = "player_1";
        document.getElementById("question_turn").innerHTML = "Question turn: " + player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}