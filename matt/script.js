var button_foodRandom=document.querySelector(".foodRandom").addEventListener("click", function foodRandom(){
    fetch("htps://api.edemem.com/api/recipes/v2?type=public&q=chicken&app_id=8753c07f&app_key=25bd1618a120d76adb83aa22d43f1e73")
    .then(response => response.json())
    .then(data => { 
        console.log(data)
    });
})
var button_drinkRandom=document.querySelector(".drinkRandom").addEventListener("click", function drinkRandom(){
    alert("testing2")
})