function firstPage(){
    document.getElementById("intro").innerHTML = "Hi! My name is Nathan and my full name is Gabrielle Jonathan Juanillo,  20 years of age living in Makati City. I was born on August 22, 2002. My hobbies are making music, playing video games, reading, listening to music and going out a lot.";

}

function secondPage() {
    document.getElementById("intro").innerHTML = "I graduated Senior High School in Treston International College Located at BGC, Taguig City. I'm currently a sophomore in Asia Pacific College taking Bachelor of Science in Computer Science specializing in Software and Systems. My goal in life is to finish my course and be able to work abroad while alsohaving a sidejob as a Music Producer.";

}

function thirdPage() {
    document.getElementById("intro").innerHTML = "I always wanted to pursue a career in the music industry but chose Computer Science because Music Production has a lot of risks to take and takes a lot of time to have a decent career in the field. If you want to know more about me, just navigate through this page!";
}

function giveNotice() {
    window.alert("This button is still on progress!")
}

function showForm() {
    document.getElementById("email-form").style.display = "block";
    document.getElementById("email").style.display = "none";
  }

function startTypingAnimation() {
    var text = "If you are interested in reaching me out, send me and email by clicking this button";
    var el = document.getElementById("typewriter");
    var index = 0;
    function updateText() {
    el.innerHTML += text[index];
    index++;
    if (index > text.length - 1) {
        clearInterval(intervalId);
    }
    }

    var intervalId = setInterval(updateText, 70);
    }

    window.onload = function() {
        startTypingAnimation("I'm Nathan, Welcome to my Personal page!", 100);
      };

// Get a reference to the body element
var body = document.getElementsByTagName("body")[0];

// Create a function to generate a random number between min and max
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Use setInterval to create new drops every 30 milliseconds
setInterval(function() {
  // Create a new div element
  var drop = document.createElement("div");
  drop.classList.add("drop");

  // Set a random position and size for the drop
  drop.style.left = randomInt(0, window.innerWidth) + "px";
  drop.style.top = "-50px";
  drop.style.width = randomInt(3, 8) + "px";
  drop.style.height = randomInt(10, 25) + "px";
  drop.style.background = "#00BFFF";

  // Add the drop to the body element
  body.appendChild(drop);

  // Use setInterval to animate the falling of the drop
  var fallingInterval = setInterval(function() {
    // Update the top position of the drop
    drop.style.top = parseInt(drop.style.top) + 5 + "px";

    // Remove the drop from the body if it falls out of the screen
    if (parseInt(drop.style.top) > window.innerHeight) {
      body.removeChild(drop);
      clearInterval(fallingInterval);
    }
  }, 30);

}, 30);