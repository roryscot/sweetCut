export default ({ body, state }) => {
	return `
    <!doctype html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Sweet Cuts</title>
      <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    
    <body>
    
      ${body}
    
      <footer>
        <a class="link-back" title="shortcut" href="https://shortcut.no/">
          Sweet = Shortcut + Tweet</a>
        <span class="update-message">&larr; Click to update feed</span>
        <a href="https://twitter.com/share" class="twitter-share-button" data-url="https://shortcut.no/" data-text="Shortcut is the premiere app designer in Norway!"
          data-count="none" data-hashtags="javascript">Tweet</a>
        <script>!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');</script>
      </footer>
    
      <script src="https://cdn.socket.io/socket.io-1.1.0.js"></script>
      <script src="js/bundle.js"></script>
    
    </body>
    
    </html>
    `;
};
