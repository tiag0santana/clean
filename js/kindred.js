var myImg = document.querySelector('img');

myImg.onclick = function () {
    var kinImg = myImg.getAttribute('src');
    if (kinImg === 'img/kindred.png') {
        var audio = new Audio('kindred.ogg');
        audio.volume=0.2;
        audio.play();
    }
}