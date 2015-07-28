$(document).ready(function() {
  var name = "dolphinhood";
  var apiKey = "B9enqZ1SESmqJ6NNbRuUcdj7nMDm9Vu8HI4zBhzsc7OLI5yZTz";
 
  // Boot up our TumblrMachine
  var tumblr = new TumblrMachine(name, apiKey);
  
  // Fetch the first set (20) of posts
  tumblr.fetchPosts(function(posts) {
  
    // begin our html
    var html = "";
    
    // loop through and build our html
    for (var i = 0; i < 12; i += 2) {
      var rowPosts = [posts[i], posts[i + 1]];
      
      // create a row
      html += '<div class="row">';
      
      for (var j = 0; j < rowPosts.length; j++) {

        // current post
        var post = rowPosts[j];
        var photo = tumblr.imageForPost(post);
        var url = post.post_url;
      
        html += '<div class="col-md-6">';
        if (post.type === "video") {
          html += '<div class="individualPost" style="">';
        } else {
          
          html += '<div class="individualpost" style="background-image:url(' + photo + ');background-size:cover;background-position:center center;">';
        }
        html += '<a href="' + url + '" style="display:block;width:100%;height:100%;">';
        if (post.type === "video") {
          html += post.player[2].embed_code;
        }
        html += '<div class="blacklining">+</div>';
        html += '</a>';
        html += '</div>'; // .individualpost
        html += '</div>'; // .col-md-4
        
      }
      
      html += '</div>'; // .row
 
    }
    
    $('.updates-container').append(html);
    
  });
});