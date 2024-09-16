$(document).ready(function () {
    // Magic
    $(window).scroll(function () {
        var Y = $(this).scrollTop();
        $('#feed .item').each(function () {
            var $this = $(this),
                posY = $this.offset().top,
                posX = $this.offset().left,
                width = $this.width(),
                height = $this.height(),
                headerHeight = $this.find('.header').height(),
                stop = (posY + height) - headerHeight;
            // Fixed on position top / or else
            if (Y > posY) {
                $this.find('.header').css({
                    position: 'fixed',
                    top: 0, left: posX,
                    width: width
                });
            } else {
                $this.find('.header').css({
                    position: 'absolute',
                    top: 0, left: 0,
                    width: width
                });
            }
            // Absolute to bottom of post
            if (Y >= stop) {
                $this.find('.header').css({
                    position: 'absolute',
                    top: 'auto', left: 0, bottom: 0,
                    width: width
                });
            }
        });
    });
});