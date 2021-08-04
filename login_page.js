function enterplayer2name(){
    player1_name=document.getElementById("player1_name_input").value;
    localStorage.setItem("player_1_name",player1_name);
    window.location="login_page_2.html";
}