        
        if ("ontouchstart" in document)
        $('body').addClass('iftouch');
        
        $("#dolphinhood").click(function () {
        $('.top').toggleClass('intro');
        });
        $(".secretbutton1").hover(function () {
        $('body').toggleClass('hover-secret1');
        });
        $(".link-youtube").hover(function () {
        $('body').toggleClass('hover-youtube');
        });
        $(".link-soundcloud").hover(function () {
        $('body').toggleClass('hover-soundcloud');
        });
        $(".link-snapchat").hover(function () {
        $('body').toggleClass('hover-snapchat');
        });
        $(".link-vine").hover(function () {
        $('body').toggleClass('hover-vine');
        });
        $(".link-twitter").hover(function () {
        $('body').toggleClass('hover-twitter');
        });
        $(".link-instagram").hover(function () {
        $('body').toggleClass('hover-instagram');
        });
        $(".link-facebook").hover(function () {
        $('body').toggleClass('hover-facebook');
        });
        $(".link-github").hover(function () {
        $('body').toggleClass('hover-github');
        });

        $(".drops-drop .img-d1").hover(function () {
        $('.drops-head-piece1').toggleClass('hover-drop-info');
        $('.drops-head-piece0').toggleClass('hover-drop-close');
        });
        $(".drops-drop .img-d2").hover(function () {
        $('.drops-head-piece2').toggleClass('hover-drop-info');
        $('.drops-head-piece0').toggleClass('hover-drop-close');
        });
        $(".drops-drop .img-d3").hover(function () {
        $('.drops-head-piece3').toggleClass('hover-drop-info');
        $('.drops-head-piece0').toggleClass('hover-drop-close');
        });
