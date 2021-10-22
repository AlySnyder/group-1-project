var button_foodRandom=document.querySelector(".foodRandom").addEventListener("click", function foodRandom(){
    fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=1')
    .then(response => response.json())
    .then(data => {
    console.log(data)
    })
})
var button_drinkRandom=document.querySelector(".drinkRandom").addEventListener("click", function drinkRandom(){
alert("testing2")
    })

    // search button to interact with user, create a loading button , 

