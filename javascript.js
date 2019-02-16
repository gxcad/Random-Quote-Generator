$(document).ready(function(){
  $.ajax( {
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      let post = data.shift(); // The data is an array of posts. Grab the first one.
      $('#author').text('- ' + post.title);
      $('#text').html(post.content);
      $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + document.getElementById('text').textContent.trim() + '" - ' + post.title));

      // If the Source is available, use it. Otherwise hide it.
      if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
        $(post).html('Source:' + post.custom_meta.Source);
      } else {
        $(post).text('');
      }
    },
    cache: false
  });
})

$('#new-quote').on('click', function(){
  $.ajax( {
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      let post = data.shift(); // The data is an array of posts. Grab the first one.
      $('#author').text('- ' + post.title);
      $('#text').html(post.content);
      $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + document.getElementById('text').textContent.trim() + '" - ' + post.title));

      // If the Source is available, use it. Otherwise hide it.
      if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
        $(post).html('Source:' + post.custom_meta.Source);
      } else {
        $(post).text('');
      }
    },
    cache: false
  });
})