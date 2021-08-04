function storing(){
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player_2_name",player2_name); 
    window.location="quiz_page.html";
}