const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const articleList = document.getElementById('articleList');

/* ----------------MOBILE NAVIGATION----------------- */
menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

/* ----------------API AND LOADING ARTICLES----------------- */
var url = "https://gnews.io/api/v4/top-headlines?topic=science&country=us&language=en&token=528eb7a16caca530e00bcd57c2072f07";

$(document).ready(function(){
  $.ajax({
    url: url,
    dataType: 'json',
      error: function(){
        console.log('JSON FAILED for data');
      },
    success:function(results){
  
      var cartItemsList = document.getElementById("articleList");

      results.articles.forEach(function(element) {
      cartItemsList.insertAdjacentHTML( 'beforeend',
        '<li class="character">' + 
        '<img src="' + element.image + '" height="200px" width="300px"/>' +
        '<a href="' + element.url + '" target="_blank"><h3 style="color: white;">' + element.title + '</h3></a>' + 
        '<p style="color: grey;">' + element.source.name + '</p>' + 
        '</li>'
        );
      }); 
    }  
   }) 
}) 
/* ----------------END----------------- */

/*'
            <li class="character">
                <img src="${character.image}" height="200px" width="300px"/>
                <a href="${character.url}"><h3 style="color: white;">${character.title}</h3></a>
                <p style="color: grey;">${character.source.name}</p>
            </li>
*/