/* Gettting all the IDs and Classes from html page */
var button_foodRandom1 = document.querySelector("#foodRandom");
var button_drinkRandom = document.querySelector("#drinkRandom");

// var button2 = document.querySelector("#btn2")
var searchFood = document.querySelector("#search_food");
var errorMessage = document.querySelector("#error_message");

var meal_result = document.querySelector(".meal_result");
var mealResult = document.querySelector("#mealResult");
var cuisine_type = document.querySelector("#cuisine_type");
var healthLabels = document.querySelector("#health_labels");
var dietLabels = document.querySelector("#diet_labels");
var ingredientLines = document.querySelector("#ingredientLines");
var url = document.querySelector("#url");
var calories = document.querySelector("#calories");
var image = document.querySelector("#image");
var source = document.querySelector("#source");
var mealType = document.querySelector("#mealType");

var nameDisplay2 = document.querySelector("#name_display2");
var recipeFound = document.querySelector("#recipeFound");
// can't accept blank value
function noBlankValue() {
  mealResult.style.display = "none";
  errorMessage.textContent = "Please enter something!";
  errorMessage.style.color = "orange";
  errorMessage.style.background = "red";
  errorMessage.style.fontSize = "30px";
}
// if input value is blank, execute the function and  display error message back to user , otherwise  enter something and get api value
button_foodRandom1.addEventListener("click", function foodRandom() {
  if (!searchdrink.value) {
    noBlankValue();
  } else if (searchdrink.value) {
    errorMessage.textContent = "";
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&q=" +
        searchdrink.value +
        "&app_id=8753c07f&app_key=25bd1618a120d76adb83aa22d43f1e73"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // check if the input data is found in array
        if (data.hits.length === 0) {
          errorMessage.textContent = "Sorry.... No recipe found!";
          errorMessage.style.background = "red";
        } else {
          var index = getRandomNumber(0, data.hits.length - 1);
          errorMessage.textContent =
            "Recipe for " + data.hits[index].recipe.label;
          errorMessage.style.background = "black";

          recipeFound.style.display = "block";
          recipeFound.innerHTML =
            "<b>Recipe Label: </b> " + data.hits[index].recipe.label;
          recipeFound.style.background = "white";

          cuisine_type.style.display = "block";
          cuisine_type.innerHTML =
            " <b>Cuisine Type: </b>" + data.hits[index].recipe.cuisineType;
          cuisine_type.style.background = "white";

          healthLabels.style.display = "block";
          healthLabels.innerHTML =
            " <b>Health Label: </b> " + data.hits[index].recipe.healthLabels;
          healthLabels.style.background = "white";

          dietLabels.style.display = "block";
          dietLabels.innerHTML =
            " <b>Diet Label: </b>" + data.hits[index].recipe.dietLabels;
          dietLabels.style.background = "white";

          ingredientLines.style.display = "block";
          ingredientLines.innerHTML =
            "<b>Ingredient Lines: </b> " +
            data.hits[index].recipe.ingredientLines;
          ingredientLines.style.background = "white";

          calories.style.display = "block";
          calories.innerHTML =
            "<b>Calories: </b> " + data.hits[index].recipe.calories;
          calories.style.background = "white";

          image.style.display = "block";
          image.innerHTML = data.hits[index].recipe.image;
          image.innerHTML = ` <img src="${data.hits[index].recipe.image}" width="700px"  /> `;
          image.style.background = "white";

          mealType.style.display = "block";
          mealType.innerHTML =
            "<b>Meal Type: </b> " + data.hits[index].recipe.mealType;
          mealType.style.background = "white";

          url.style.display = "block";
          url.innerHTML = "<b>URL:  </b>" + data.hits[index].recipe.url;
          url.style.background = "white";

          source.style.display = "block";
          source.innerHTML =
            "<b>source:  </b>" + data.hits[index].recipe.source;
          source.style.background = "white";
        }
      }); //(replace console.log with code to show )
  }

  //
});
// function for random number generator

function getRandomNumber(min, max) {
  var first = max - min + 1;
  var second = Math.random() * first;
  var result = Math.floor(second) + min;
  return result;
}

var button_drinkRandom = document.querySelector("#drinkRandom");

var searchdrink = document.querySelector("#search_drink");
var errorMessage1 = document.querySelector("#error_message1");

var drink_result = document.querySelector(".drink_result");
var drinkResult = document.querySelector("#drinkResult");
var cuisine_type = document.querySelector("#cuisine_type");
var healthLabels = document.querySelector("#health_labels");
var dietLabels = document.querySelector("#diet_labels");
var ingredientLines = document.querySelector("#ingredientLines");
var url = document.querySelector("#url");
var calories = document.querySelector("#calories");
var image = document.querySelector("#image");
var source = document.querySelector("#source");
var mealType = document.querySelector("#mealType");

var nameDisplay2 = document.querySelector("#name_display2");
var recipeFound = document.querySelector("#recipeFound");
// can't accept blank value
function noBlankValue() {
  mealResult.style.display = "none";
  errorMessage.textContent = "Please enter something!";
  errorMessage.style.color = "orange";
  errorMessage.style.background = "red";
  errorMessage.style.fontSize = "30px";
}
// if input value is blank, execute the function and  display error message back to user , otherwise  enter something and get api value
button_drinkRandom.addEventListener("click", function drinkRandom() {
  if (!searchdrink.value) {
    noBlankValue();
  } else if (searchdrink.value) {
    errorMessage.textContent = "";
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        searchdrink.value
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // check if the input data is found in array
        if (data.drinks.length === 0) {
          errorMessage.textContent = "Sorry.... No recipe found!";
          errorMessage.style.background = "red";
        } else {
          var index = getRandomNumber(0, data.drinks.length - 1);
          errorMessage.textContent =
            "Recipe for " + data.drinks[index].strDrink;
          errorMessage.style.background = "black";
          //do we need id?
          recipeFound.style.display = "block";
          recipeFound.innerHTML =
            "<b>Recipe Label: </b> " + data.drinks[index].strCategory;
          recipeFound.style.background = "white";

          cuisine_type.style.display = "block";
          cuisine_type.innerHTML =
            " <b>Drink Tag: </b>" + data.drinks[index].strTags;
          cuisine_type.style.background = "white";

          image.style.display = "block";
          image.innerHTML = data.drinks[index].strDrinkThumb;
          image.innerHTML = ` <img src="${data.drinks[index].strDrinkThumb}" width="500px"  /> `;
          image.style.background = "white";

          // mealType.style.display = "block";
          // mealType.innerHTML = "<b>Meal Type: </b> " + data.hits[index].recipe.mealType;
          // mealType.style.background = "white";

          // url.style.display = "block";
          // url.innerHTML = "<b>URL:  </b>" + data.hits[index].recipe.url;
          // url.style.background = "white";

          // source.style.display = "block";
          // source.innerHTML = "<b>source:  </b>" + data.hits[index].recipe.source;
          // source.style.background = "white";
        }
      }); //(replace console.log with code to show )
  }

  //
});
// function for random number generator

function getRandomNumber(min, max) {
  var first = max - min + 1;
  var second = Math.random() * first;
  var result = Math.floor(second) + min;
  return result;
}
