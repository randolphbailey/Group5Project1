$('#tweets').tweetie({
    "url": "https://cors-anywhere.herokuapp.com/" + "https://files.sonnyt.com/tweetie/v3/",
    "type": "search",
    "template": "<li>{{tweet.text}}</li>",
    "dateFormat": "%b %d, %Y",
    "params": {
      "count": 15,
      "q": "the clay pit",
    //   "q": "austin"
    //   "q": "elarroyo"
    }
  });