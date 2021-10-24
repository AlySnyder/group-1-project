var button_foodRandom=document.querySelector(".foodRandom").addEventListener("click", function foodRandom(){
    fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8753c07f&app_key=25bd1618a120d76adb83aa22d43f1e73")
    .then(response => response.json())
    .then(data => { //display data to user
        console.log(data)
        console.log(JSON.stringify(data))
    }); //(replace console.log with code to show )
})
var button_drinkRandom=document.querySelector(".drinkRandom").addEventListener("click", function drinkRandom(){
alert("testing2")
    })

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    myDisplay(myText);
      }


    var button_drinkRandom=document.querySelector(".drinkRandom").addEventListener("click", function drinkRandom(){
        fetch("https://www.thecocktaildb.com/api/json/v2/9973533/random.php")
        .then(response => response.json())
        .then(data => { //display data to user
            console.log(data)
        }); //(replace console.log with code to show )
    })

    // search button to interact with user, create a loading button , 

    // $ajax $get

    // var displayRecipes = function(recipes, searchTerm) {
    //     console.log(recipes);
    //     console.log(searchTerm);
    //   };
