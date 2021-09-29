var translalteBtn = document.querySelector("#btn-translate");
var inputText = document.querySelector("#in-txt");
var output = document.querySelector("#out-txt");
var sourceURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text) {
   return sourceURL + "?text=" + text
}

function errorHandler(error) {
   console.log("Something went Wrong", error)
   alert("Something went wrong, please try again latter")
}

function clickEventhandler() {

   var input = inputText.value;

   fetch(getTranslationURL(input))
      .then(response => response.json())
      .then(json =>
         output.innerText = json.contents.translated)
      .catch(errorHandler)
}

translalteBtn.addEventListener("click", clickEventhandler)