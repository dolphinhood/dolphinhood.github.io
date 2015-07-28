  $(document).scroll(function(e){
    console.log($(window).scrollTop());
				
        if($(window).scrollTop() > 180000){
            $("#submarine").addClass("light1");
        }
        if($(window).scrollTop() < 180000){
            $('#submarine').removeClass("light1");
        }
				
				if($(window).scrollTop() > 520000){
            $("#submarine").removeClass("light1");
        }
				if($(window).scrollTop() > 520000){
            $("#submarine").addClass("light2");
        }
        if($(window).scrollTop() < 520000){
            $('#submarine').removeClass("light2");
        }

        function preloadImages(images) {
        for (var i = 0; i < images.length; i++) {
          var url = images[i];
          var image = new Image();
          image.src = url;
          console.log(image);
          }
        }
				
        var images = [
        "../img/sub1a.png",
        "../img/sub1b.png",
        "../img/sub1c.png"
        ];

        preloadImages(images);

  });
		
		