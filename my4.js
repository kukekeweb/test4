function play_se(){
    var ダーリン = new Audio('ダーリン.mp3');
    ダーリン.play();
}


$(function(){
    $('#4曲目').click(play_se);
});