//<![CDATA[
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

 
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
width: '660',
height: '370',
events: {
'onReady': onPlayerReady
},
playerVars: {
listType: 'playlist',
list: 'PL1EB10B19837A1B61'
}
});
}
function onPlayerReady(event) {player.mute();
num = Math.floor(Math.random() * 149);
setTimeout(() => {
player.playVideoAt(num);
}, 1000);player.pauseVideo(2);
} //]]>
