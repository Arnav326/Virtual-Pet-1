//Create variables here
var dog, happyDog, database, FoodS, foodStock
function preload()
{
  //Loading Images
  dogImage = loadImage('images/dogImg.png');
  happyDogImage = loadImage('images/dogImg1.png');
  
}

function setup() 
{
	createCanvas(800, 700);
  dog = createSprite(400, 300, 20, 20);
  dog.addImage("dogImage",dogImage);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}

function draw()
 {  
    background(46,139,87);
    if (keyWentDown(UP_ARROW))
    {
      writeStock(foodS);
      dog.addImage(happyDogImage);
    }
    drawSprites();
    textSize(15);
    fill("white");
    stroke("white");
    text("Note: Press UP_ARROW Key To Feed The Dog Milk!", 400, 100);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  database.ref('/').update
  ({
    Food:x
  })
}

