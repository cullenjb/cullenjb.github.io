var image = document.getElementById("redLight");
var shark = document.getElementById("shark");
var whale = document.getElementById("whale");
var winningAnimal1 = document.getElementById("winningAnimal");
winningAnimal.style.display = 'none';


//Declare random numbers
    var number = Math.random() * 150;
    var number1 = Math.random() * 150;
    var raceStarted = false;

function turnGreen()
{
    image.src ="https://cdn.pixabay.com/photo/2013/07/12/15/17/traffic-light-149580_640.png";
}

//Starts race and moves animals at random intervals
function startRace()
{
    raceStarted = true;

    setTimeout(function () {
        var newNumber = ((Math.random() * 150)+5) + number;
        var newNumber1 = ((Math.random() * 150)+5) + number1;
        
        shark.style.marginLeft = newNumber + 'px';
                
        whale.style.marginLeft = newNumber1 + 'px';
        
        number = newNumber;
        number1 = newNumber1;
        
        
        
                var sharkDistance = shark.style.marginLeft.slice(0, -4);
                var whaleDistance = whale.style.marginLeft.slice(0, -4);

      
        
           //Displays winning animal
               var width = screen.width;
        
        if (sharkDistance >= width - 175)
        {
            shark.style.display = 'none';
            whale.style.display= 'none';
            winningAnimal1.style.display = 'list-item';
            
        }
        else if (whaleDistance >= width - 125) // Whale's distance is longer to compensate for bigger background size of png
        {           
            document.getElementById("winningAnimal").src  = "http://pngimg.com/uploads/whale/whale_PNG19266.png";
            shark.style.display = 'none';
            whale.style.display= 'none';
            winningAnimal1.style.display = 'list-item';               
        }
        
        
        else
        {
            startRace();
        }       
    }, 750)       
}


//Resets the game and returns animals to the starting line
function reset()
{
    image.src = "https://cdn.pixabay.com/photo/2013/07/12/15/17/traffic-light-149581_960_720.png";
    winningAnimal1.style.display = 'none';
    shark.style.display = 'initial';
    whale.style.display= 'initial';
    shark.style.marginLeft = 0;
    whale.style.marginLeft = 0;
    sharkDistance = 0;
    whaleDistance = 0;
    newNumber = 0;
    newNumber1 = 0;
    number = 0;
    number1 = 0;
}
