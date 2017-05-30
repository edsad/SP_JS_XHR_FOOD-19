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

        dogFoodData += `<div><h1>${dogBrands[i].name}</h1></div>`

        var types = dogBrands[i].types;

      for(var j = 0; j < types.length; j++){

        dogFoodData += `<h3>Type: ${types[j].type}</h3>`

        var volumes = types[j].volumes;

      for(var k = 0; k < volumes.length; k++){

        dogFoodData += `<p>Volume: ${volumes[k].name}</p>`
        dogFoodData += `<p>Price: ${volumes[k].price}</p>`
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

        catfoodData += `<div><h1>${catBrands[a].name}</h1></div>`
        catfoodData += `<h2>${catBrands[a].breeds}</h2>`
        // console.log("catfoodData", catfoodData);
        var catTypes = catBrands[a].types;

      for(var b = 0; b < catTypes.length; b++){

        catfoodData += `<h3>Type: ${catTypes[b].type}</h3>`

        var catVolumes = catTypes[b].volumes;

      for(var c = 0; c < catVolumes.length; c++){

        catfoodData += `<p>Volume: ${catVolumes[c].name}</p>`
        catfoodData += `<p>Price: ${catVolumes[c].price}</p>`
      }
    }
  }
  catfoodDiv.innerHTML += catfoodData;
}






