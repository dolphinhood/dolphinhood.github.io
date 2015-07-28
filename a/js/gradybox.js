(function() {
  $.fn.gradybox = function(options) {
    var opts = $.extend({}, $.fn.gradybox.defaults, options);
    $body = $('body');

    return this.each(function() {
     var h = opts.$html.html();

     $(this).bind('click', function(e) {
       e.preventDefault();
       var html = $.fn.gradybox.build(h);
       $body.append(html);

       var $c = $('#gradybox-container');
       var $b = $('#gradybox');

       $.fn.gradybox.show($c,$b,opts);

       $c.bind('click', function() {
         $.fn.gradybox.hide($c,$b,opts);
       });
     });

    });
  }

  $.fn.gradybox.defaults = {
    $html: null,
    show: null,
    hide: null
  };

  $.fn.gradybox.build = function(h) {
    var html = "";
    html += '<div id="gradybox-container">';
    html += '</div>' // gradybox-container
    html += '<div id="gradybox">';
    html += h;
    html += '</div>'; // gradybox

    return html;
  }

  $.fn.gradybox.show = function($c,$b,opts) {
    var $window = $(window);
    $c.show();
    $b.show();
    var width = $b.outerWidth();
    var height = $b.outerHeight();
    $b.hide();

    $b.css({
      'left' : ($window.width() / 2) - (width / 2),
      'top' : ($window.height() / 2) - (height / 2)
    });

    $b.show();
    if (opts.show)
      opts.show(opts);
  }

  $.fn.gradybox.hide = function($c,$b,opts) {
    $c.remove();
    $b.remove();
    if (opts.hide)
      opts.hide();
  }
}(jQuery));
