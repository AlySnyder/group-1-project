    var button=document.querySelector("#drinkRandom1")
    button.addEventListener("click", function(){
          console.log("click")
          randomDrink()
        })
        
      function randomDrink(){
        fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/random.php`)
        .then(response => response.json())
        .then(data => { //display data to user
          displayRandomDrink(data.drinks)
        })
      };
        
      function displayRandomDrink(data) {
        console.log(data)

      var randomDrinkContainer = document.querySelector("#randomDrinkContainer")
          for (var i=0; i<data.length; i++){
          var randomDrinkDiv = document.createElement("div")
          randomDrinkDiv.className="card"

        
          var title= document.createElement("h5")
          title.className="card-title"
          var body = document.createElement("div")
          body.className="card-body"
          var img = document.createElement("img")
          img.className="card-image"
          var text = document.createElement("p")
          text.className="card-text"
          img.src = data[i].strDrinkThumb
          title.textContent = data[i].strDrink
          text.textContent = data[i].strInstructions 

          body.append(title,img,text);
          randomDrinkDiv.append(body);
          randomDrinkContainer.append(randomDrinkDiv);
            
        }
      };

        //adding event listener for the search bar, and button.

        var btn = document.querySelector("#search")
        btn.addEventListener("click",function(e){
          e.preventDefault()
          var input = document.querySelector("#searchDrinks").value
          console.log("click",input)
          searchDrinks(input)
        })

        
        //passing user input thru API data to display desired result

        function searchDrinks(input){
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
          .then(response => response.json()) 
          .then ((data)=>{
            displaySearchedDrink(data.drinks)
          })
        };
        
        //displaying searched/retrieved data from the API as per the user's input on the page

        function displaySearchedDrink(data) {
          console.log(data)

        var searchedDrinkContainer = document.querySelector("#searchedDrinkContainer")
          for (var i=0; i<data.length; i++){
            console.log(data[i].strDrink)
            var searchedDrink = document.createElement("div")
            searchedDrink.className="card"
          
            var img = document.createElement("img")
            img.className="card-image"
            var title= document.createElement("h5")
            title.className="card-title"
            var body = document.createElement("div")
            body.className="card-body"
            var text = document.createElement("p")
            text.className="card-text"
            img.src = data[i].strDrinkThumb
            title.textContent = data[i].strDrink
            text.textContent = data[i].strInstructions 

            body.append(title,img,text);
            searchedDrink.append(body);
            searchedDrinkContainer.append(searchedDrink);

          }
        };

        if ("input") {
          localStorage.setItem("input","drink");
          console.log(localStorage.getItem("input"));

          for (i=0; i<localStorage.length; i++) {
          "#searchedDrinkContainer".innerHTML += `${"input"}<br />`
          };

        }