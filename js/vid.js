
// Youtube Player
var player = null;

$(function(){
    var overlay = '<div id="overlay"><div class="wrapper"><div class="window"><div id="ytplayer"></div><div class="close-window"><i class="icon-remove"></i></div></div></div></div>';
    $('body').append(overlay);
    
    
    // Show Player
    $('.vid').click(function() {
        
        // Show Overlay
        $('#overlay').fadeIn();
        
        // Instantiate Player if necessary, otherwise cue and play new video.
        var token = $(this).data('token');
        if (player === null) {
            player = new YT.Player(
                'ytplayer', 
                {
                    videoId: token,
                    playerVars: {
                        autoplay: 1,
                        autohide: 2,
                        showinfo: 0,
                        theme: 'light',
                        modestbranding: 1,
                        iv_load_policy: 3,
                        fs: 1,
                        rel: 0,
                        enablejsapi: 1,
                        vq: 'hd720'
                    }
                }
            );
        } else {
            player.cueVideoById(token).playVideo();
        }
        
        // Push History State
        history.pushState(null, null, "#"+token);
        
        YTresizer();
    });
    
    // Close Player
    $('#overlay').click(function() {
        $('#overlay').fadeOut();
        player.stopVideo();
        history.back();
    });
    
});


// This is called from Youtube's API on ready.
function onYouTubeIframeAPIReady() {
        

    // Load Youtube Vids if Mobile
    // if ($(document.body).width() <= 767) {
    //     $('.vid').each(function(i,v) {
    //         console.log($(document.body).width());
    //         v = $(v).attr('id','youtubeembed'+i);
    //         var player = new YT.Player(
    //             v.attr('id'), 
    //             {
    //                 videoId: v.data('token'),
    //                 width: v.width(),
    //                 height: v.height(),
    //                 events: {
    //                     'onStateChange': onPlayerStateChange
    //                 },
    //                 playerVars: {
    //                     autoplay: 0,
    //                     autohide: 2,
    //                     showinfo: 0,
    //                     theme: 'light',
    //                     modestbranding: 1,
    //                     iv_load_policy: 3,
    //                     fs: 1,
    //                     rel: 0,
    //                     enablejsapi: 1
    //                 }});});
    // }
	autoplay();
}

    function onPlayerStateChange(event) {
        if(!playing){
            alert('hi');
            playing = true;
        }
    }

// This is called after instantiating a plater to make it responsive.
function YTresizer() {
    
    // Find all YouTube videos
    var $allVideos = $("iframe[src^='http://www.youtube.com']"),
        // The element that is fluid width
        $fluidEl = $("#overlay .wrapper");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
        $(this)
            .data('aspectRatio', this.height / this.width)
            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');
    });

    // When the window is resized
    // (You'll probably want to debounce this)
    $(window).resize(function() {
        var newWidth = $fluidEl.width();
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {
            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));
        });
    // Kick off one resize to fix all videos on page load
    }).resize();
}

// This is called on ready to check for autoplay.
function autoplay() {

	if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        if (hash === 'video') $('.vid').first().click();
       	else $('.vid[data-token="'+hash+'"]').click()
    }
    
    // if hash does not exist on page, play featured video
};
