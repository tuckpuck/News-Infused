var allStories = [];
var tickerObjects = [];
var shuffledTickerObjects = [];
var tickerFeed = "";

////WORLD NEWS
// BBC
var bbcxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=bbc-news");
bbcxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#BBCnewsContent').append($el);
    }
  }
});

// New York Times
var newyorktimesxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=the-new-york-times");
newyorktimesxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#NYTimesContent').append($el);
    }
  }
});

// Reuters
var reutersxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=reuters");
reutersxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#ReutersnewsContent').append($el);
    }
  }
});

// WashingtonPost
var washingtonpostxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=the-washington-post");
washingtonpostxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#WashingtonpostnewsContent').append($el);
    }
  }
});
////TECHNOLOGY
//Hacker News
var hackernewsxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=hacker-news");
hackernewsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    // allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#HackernewsContent').append($el);
    }
  }
});
//The Next Web
var thenextwebxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=the-next-web");
thenextwebxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#NextWebContent').append($el);
    }
  }
});
//Tech Crunch
var techcrunchxhr = $.getJSON(" https://g-newsapi.herokuapp.com/v1/articles?source=techcrunch");
techcrunchxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#TechcrunchContent').append($el);
    }
  }
});
//Engadget
var engadgetxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=engadget");
engadgetxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    // allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#EngadgetContent').append($el);
    }
  }
});

////SPORTS
//Fox Sports
var foxsportsxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=fox-sports");
foxsportsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#FoxnewsContent').append($el);
    }
  }
});
//NFL News
var nflnewsxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=nfl-news");
nflnewsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    // allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#NFLnewsContent').append($el);
    }
  }
});
//BBC Sports
var bbcsportsxhr = $.getJSON(" https://g-newsapi.herokuapp.com/v1/articles?source=bbc-sport");
bbcsportsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    // allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#BBCSportContent').append($el);
    }
  }
});
//ESPN Sport
var espnsportsxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=espn");
espnsportsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    // allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#ESPNsportContent').append($el);
    }
  }
});

////SCIENCE
//National Geographic
var nationalgeographicxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=national-geographic");
nationalgeographicxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    // allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#NationalgeographicContent').append($el);
    }
  }
});
//New Scientist
var newscientistxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=new-scientist");
newscientistxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    // allStories.push(newsObject);
  }
  populateNews(newsArray);

  buildTickerFeed();
  tickerGo();

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);
      $('#NewscientistContent').append($el);
    }
  }
});

function buildTickerFeed() {
  for (let i = 0; i < allStories.length; i++) {
    tickerObject = {};
    tickerObject.title = allStories[i].title;
    tickerObject.url = allStories[i].url;

    let $tickerItem = $('<li>' + '<a class="tickerLink tickerText" target="_blank" href="' + tickerObject.url + '">' +  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + tickerObject.title + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '</a>' + '</li>');
    $(".ticker").append($tickerItem);
  }
  // '<p class="tickerText">' + + '</p>'
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
return array;
}

function tickerGo() {
  var block_arr = $('.ticker li a').map(function() {
    return $(this).get(0);
  }).toArray();
  // console.log(block_arr[0]);

  var ticker_item = $(block_arr[0]);
  $(".ticker").html(ticker_item);
  var ticker_width = $(".ticker").width();
  var text_x = ticker_width;

  scroll_ticker = function() {
    text_x--;
    ticker_item.css("left", text_x);
    if (text_x < -1 * ticker_item.width()) {
      ticker_item = $(block_arr[(block_arr.indexOf(ticker_item.get(0)) + 1 == block_arr.length) ? 0 : block_arr.indexOf(ticker_item.get(0)) + 1]);
      ticker_item.css("left", text_x);
      $(".ticker").html(ticker_item);
      text_x = ticker_width;
    }
  }
  setInterval(scroll_ticker, 3);
};

$(".hiddenticker").hide();
$("#iFeatures").hide();
$(".tickerbutton").click(function() {
  if ($(".hiddenticker").is(":hidden")) {
    $(".hiddenticker").slideDown("slow");
    $("#iFeatures").slideDown("slow");
  } else {
    $(".hiddenticker").slideUp("slow");
    $("#iFeatures").slideUp("slow");
  }
});
