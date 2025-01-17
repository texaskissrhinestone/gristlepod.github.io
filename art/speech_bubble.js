$(document).ready(function () {
  function setRandomWord() {
    var phrases = [
      "Click the ware for the store link. I promise they won't bite.",
	  "If you're interested in a commission, scroll further down for details.",
	  "Any piece you see on my Tw*tter and Bluesky can be offered as a print, so look out for new posts.",
	  "Interested in custom stickers? Send an e-mail to claim a slot and get details on physical delivery."
        ];
		 $("#speechbubble_text").text(phrases[Math.floor(Math.random() * phrases.length)]);
  }
  setInterval(setRandomWord, 15000);
});