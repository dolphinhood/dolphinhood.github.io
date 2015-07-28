$(document).ready(function() {
  var name = "dolphinhood";
  var apiKey = "B9enqZ1SESmqJ6NNbRuUcdj7nMDm9Vu8HI4zBhzsc7OLI5yZTz";
  var tags = [
    "ariel disney", "ariel"
  ];
  
  // Boot up our TumblrMachine
  var tumblr = new TumblrMachine(name, apiKey);
  
  // Fetch the first set (20) of posts
  tumblr.fetchPosts(function() {
    
    var posts = tumblr.postsForTags(tags);
  
    // begin our html
    var html = "";
    
    // loop through and build our html
    for (var i = 0; i < Math.min(posts.length, 12); i += 3) {
      var rowPosts = [];
      if (posts[i]) rowPosts.push(posts[i]);
      if (posts[i+1]) rowPosts.push(posts[i+1]);
      if (posts[i+2]) rowPosts.push(posts[i+2]);
      
      // create a row
      html += '<div class="row">';
      
      for (var j = 0; j < rowPosts.length; j++) {
        // current post
        var post = rowPosts[j];
        var photo = tumblr.imageForPost(post);
        var url = post.post_url;
      
        html += '<div class="col-md-4">';
        html += '<div class="individualpost" style="background-image:url(' + photo + ');background-size:cover;background-position: center center;width: 100%; height: 450px;">';
        html += '<a href="' + url + '" style="display:block;width:100%;height:100%;"></a>';
        html += '</div>'; // .individualpost
        html += '</div>'; // .col-md-4
        
      }
      
      html += '</div>'; // .row
 
    }
    
    $('.updates-container').append(html);
    
  });
});