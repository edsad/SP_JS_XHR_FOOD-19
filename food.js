"use strict"
console.log("food.js is working");

 //dog food //

var dogRequest = new XMLHttpRequest();

dogRequest.addEventListener("load", dogRequestComplete);
dogRequest.addEventListener("error", dogRequestFailed);

function dogRequestComplete(event){
  console.log("dog food data");
  var dogData = JSON.parse(event.target.responseText);
  console.log("more dog food data", dogData);

  showDogData(dogData);
}

function dogRequestFailed(event){
  console.log("Error");
}

dogRequest.open("GET", "dogs.json");
console.log("dog food");

dogRequest.send();

function showDogData(dogData){
  var dogFoodDiv = document.getElementById("canine-list");
  var dogFoodData = "";
  var dogBrands = dogData.dog_brands;
  // console.log("dogBrands", dogBrands);

      for(var i = 0; i < dogBrands.length; i++){

        dogFoodData += `<div id="wow"><h1>${dogBrands[i].name}</h1></div>`

        var types = dogBrands[i].types;

      for(var j = 0; j < types.length; j++){

        dogFoodData += `<div id="wow"><h3>Type: ${types[j].type}</h3></div>`

        var volumes = types[j].volumes;

      for(var k = 0; k < volumes.length; k++){

        dogFoodData += `<div id="wow"><p>Volume: ${volumes[k].name}</p></div>`
        dogFoodData += `<div id="wow"><p>Price: ${volumes[k].price}</p></div>`
      }
    }
  }
  dogFoodDiv.innerHTML += dogFoodData;
}

//cat food //

var catRequest = new XMLHttpRequest();

catRequest.addEventListener("load", catRequestComplete);
catRequest.addEventListener("error", catRequestFailed);

function catRequestComplete(event){
  console.log("cat food data");
  var catData = JSON.parse(event.target.responseText);
  console.log("more cat food data", catData);

  showCatData(catData);
}

function catRequestFailed(event){
  console.log("Error");
}

catRequest.open("GET", "cats.json");
console.log("cat food");

catRequest.send();

function showCatData(catData){
  var catfoodDiv = document.getElementById("feline-list");
  var catfoodData = "";
  var catBrands = catData.cat_brands;
  // console.log("catBrands", catBrands);
      for(var a = 0; a < catBrands.length; a++){

        catfoodData += `<div id="wow"><h1>${catBrands[a].name}</h1></div>`
        catfoodData += `<div id="wow"><h2>${catBrands[a].breeds}</h2></div>`
        // console.log("catfoodData", catfoodData);
        var catTypes = catBrands[a].types;

      for(var b = 0; b < catTypes.length; b++){

        catfoodData += `<div id="wow"><h3>Type: ${catTypes[b].type}</h3></div>`

        var catVolumes = catTypes[b].volumes;

      for(var c = 0; c < catVolumes.length; c++){

        catfoodData += `<div id="wow"><p>Volume: ${catVolumes[c].name}</p></div>`
        catfoodData += `<div id="wow"><p>Price: ${catVolumes[c].price}</p></div>`
      }
    }
  }
  catfoodDiv.innerHTML += catfoodData;
}






