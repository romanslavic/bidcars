$(".carousel.has-video").each(function() {
    $(this).carousel({
        interval: false
    });    
    var video = $("#video-player")[0];
    createVideo(video);
  $(this).on("slide.bs.carousel", function(e) {
    var prev = $(this)
      .find(".active")
      .index();
    var next = $(e.relatedTarget).index();
    var video = $("#video-player")[0];
    var videoSlide = $("#video-player")
      .closest(".carousel-item")
      .index();
    if (next === videoSlide) {
      if (video.tagName == "IFRAME") {
//        player.playVideo();
      } 
    } else {
      if (typeof player !== "undefined") {
        player.pauseVideo();
      }
    }
  });
});

var psaCarVideo = document.getElementById("psaPlayer");    
    
$('#carVideo').on('hidden.bs.modal', function () {
    psaCarVideo.pause();
});

$('#carVideo').on('show.bs.modal', function () {
    psaCarVideo.play();
});

function createVideo(video) {
  var youtubeScriptId = "youtube-api";
  var youtubeScript = document.getElementById(youtubeScriptId);
  var videoId = video.getAttribute("data-video-id");

  if (youtubeScript === null) {
    var tag = document.createElement("script");
    var firstScript = document.getElementsByTagName("script")[0];

    tag.src = "//www.youtube.com/iframe_api";
    tag.id = youtubeScriptId;
    firstScript.parentNode.insertBefore(tag, firstScript);
  }

  window.onYouTubeIframeAPIReady = function() {
    window.player = new window.YT.Player(video, {
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        modestbranding: 0,
        height: '100%',
        width: '100%',
        rel: 0
      }
    });
  };
};