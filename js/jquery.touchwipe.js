(function($) {

$.fn.touchwipe = function(settings) {
    var config = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function(e) { },
            wipeRight: function(e) { },
            wipeUp: function(e) { },
            wipeDown: function(e) { },
            preventDefaultEvents: false
    };

    if (settings) $.extend(config, settings);

    this.each(function() {
        var startX;
        var startY;
        var isMoving = false;

        function cancelTouch() {
            this.removeEventListener('touchmove', onTouchMove);
            startX = null;
            isMoving = false;
        }

        function onTouchMove(e) {
            if(config.preventDefaultEvents) {
                e.preventDefault();
            }
            if(isMoving) {
                var x = e.touches[0].pageX;
                var y = e.touches[0].pageY;
                var dx = startX - x;
                var dy = startY - y;
                if(Math.abs(dx) >= config.min_move_x) {
                    cancelTouch();
                    if(dx > 0) {
                        config.wipeLeft(e);
                    }
                    else {
                        config.wipeRight(e);
                    }
                }
                else if(Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if(dy > 0) {
                            config.wipeDown(e);
                        }
                        else {
                            config.wipeUp(e);
                        }
                    }
            }
        }

        function onTouchStart(e)
        {
            if (e.touches.length == 1) {
                startX = e.touches[0].pageX;
                startY = e.touches[0].pageY;
                isMoving = true;
                this.addEventListener('touchmove', onTouchMove, false);
            }
        }
        if ('ontouchstart' in document.documentElement) {
            this.addEventListener('touchstart', onTouchStart, false);
        }
    });

    return this;
};

})(jQuery);