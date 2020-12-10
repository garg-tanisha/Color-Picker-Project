function random_rgba() {
    var round = Math.round, random = Math.random, limit = 255;
    return 'rgb(' + round(random()*limit) + ',' + round(random()*limit) + ',' + round(random()*limit) + ')';
}

var won = 0;

var turn = 0;
if(document.URL.endsWith("exp1.html") || document.URL.endsWith("exp1.html#"))
{
	turn = 1;
	document.querySelector("#hard").style.background = "rgb(48, 91, 161)";
	document.querySelector("#easy").style.background = "white";
	document.querySelector("#hard").style.color = "white";	
	document.querySelector("#hard").style.paddingTop = "5px";
	document.querySelector("#hard").style.paddingBottom = "6px";
	document.querySelector("#hard").style.paddingLeft = "2.5px";
	document.querySelector("#hard").style.paddingRight = "2.5px";

}
else
{
	turn = 0;
	document.querySelector("#hard").style.background = "white";
	document.querySelector("#easy").style.background = "rgb(48, 91, 161)";
	document.querySelector("#easy").style.color = "white";
	document.querySelector("#easy").style.paddingTop = "5px";
	document.querySelector("#easy").style.paddingBottom = "6px";
	document.querySelector("#easy").style.paddingLeft = "2.5px";
	document.querySelector("#easy").style.paddingRight = "2.5px";
}

var array = [];

var colorOne = document.querySelector("#color-one");
colorOne.style.background = random_rgba();
var colorTwo = document.querySelector("#color-two");
var colorThree = document.querySelector("#color-three");
var colorFour = document.querySelector("#color-four");
var colorFive = document.querySelector("#color-five");
var colorSix = document.querySelector("#color-six");

colorTwo.style.background = random_rgba();
while(colorTwo === colorThree)
{
	colorTwo.style.background = random_rgba();
}

colorThree.style.background = random_rgba();
while(colorOne === colorThree || colorThree === colorTwo)
{
	colorThree.style.background = random_rgba();
}

array.push(colorOne);
array.push(colorTwo);
array.push(colorThree);

if(turn === 1)
{
	colorFour.style.background = random_rgba();
	while(colorOne===colorFour || colorTwo === colorFour || colorThree === colorFour)
	{
		colorFour.style.background = random_rgba();
	}

	colorFive.style.background = random_rgba();
	while(colorOne===colorFive || colorTwo===colorFive || colorThree===colorFive || colorFour===colorFive)
	{
		colorFive.style.background = random_rgba();
	}

	colorSix.style.background = random_rgba();
	while(colorOne===colorSix || colorTwo===colorSix || colorThree === colorSix || colorFour===colorSix || colorFive===colorSix)
	{
		colorSix.style.background = random_rgba();
	}

array.push(colorFour);
array.push(colorFive);
array.push(colorSix);
}

var rand = array[Math.floor(Math.random() * array.length)];
var rgb = rand.style.background.toUpperCase();
document.querySelector(".rgb").textContent = rgb;

document.querySelector("#game-status").addEventListener("click",function()
{
	won = 0;
	var  selectDiv = document.querySelector("div");
	selectDiv.style.background = "#305ba1";
	selectDiv.style.borderColor = "#305ba1";

	document.querySelector("#game-status").textContent = "NEW COLORS!";

	document.querySelector("#next-step-indicator").textContent = "";

	var blocks = 3;
	while(blocks--)
	{
		array.pop();
	}

	colorOne.style.background = random_rgba();

	colorTwo.style.background = random_rgba();
	while( colorTwo === colorOne)
	{
		colorTwo.style.background = random_rgba();
	}

	colorThree.style.background = random_rgba();
	while(colorOne===colorThree || colorThree=== colorTwo)
	{
		colorThree.style.background = random_rgba();
	}

	if(turn === 1)
	{
		blocks = 3;
		while(blocks--)
		{
			array.pop();
		}
		colorFour.style.background = random_rgba();
		while(colorOne===colorFour ||  colorTwo=== colorFour || colorThree === colorFour)
		{
			colorFour.style.background = random_rgba();
		}

		colorFive.style.background = random_rgba();
		while(colorOne===colorFive ||  colorTwo===colorFive || colorThree===colorFive || colorFour===colorFive)
		{
			colorFive.style.background = random_rgba();
		}

		colorSix.style.background = random_rgba();
		while(colorOne===colorSix ||  colorTwo === colorSix || colorThree === colorSix || colorFour===colorSix || colorFive===colorSix)
		{
			colorSix.style.background = random_rgba();
		}
		array.push(colorFour);
		array.push(colorFive);
		array.push(colorSix);
	}
	array.push(colorOne);
	array.push(colorTwo);
	array.push(colorThree);

	rand = array[Math.floor(Math.random() * array.length)];
	var rgbSecondBlockRow = rand.style.background.toUpperCase();
	// var  = rgbSecondBlockRow.toUpperCase();
	// alert(ccc);
	document.querySelector(".rgb").textContent = rgbSecondBlockRow;
});

document.querySelector("#color-one").addEventListener("click",function()
{
	if(won === 0)
	{
		if(colorOne === rand)
		{
			colorTwo.style.background = colorOne.style.background;
			colorThree.style.background = colorOne.style.background;
			if(turn === 1)
			{
				colorFour.style.background = colorOne.style.background;
				colorFive.style.background = colorOne.style.background;
				colorSix.style.background = colorOne.style.background;
			}
			var  selectDiv = document.querySelector("div");
			selectDiv.style.background = colorOne.style.background;
			selectDiv.style.borderColor = colorOne.style.background;

			document.querySelector("#game-status").textContent = "PLAY AGAIN?";

			document.querySelector("#next-step-indicator").textContent = "Correct!";
			won = 1;
		}
		else
		{
			colorOne.style.background = "black";
			document.querySelector("#next-step-indicator").textContent = "Try Again";
		}
	}
});

document.querySelector("#color-two").addEventListener("click",function()
{
	if(won === 0)
	{
		if(colorTwo === rand)
		{
			won = 1;
			colorOne.style.background = colorTwo.style.background;
			colorThree.style.background = colorTwo.style.background;
			if(turn === 1)
			{
				colorFour.style.background = colorTwo.style.background;
				colorFive.style.background = colorTwo.style.background;
				colorSix.style.background = colorTwo.style.background;
			}
			var  selectDiv = document.querySelector("div");
			selectDiv.style.background = colorTwo.style.background;
			selectDiv.style.borderColor = colorTwo.style.background;	

			document.querySelector("#game-status").textContent = "PLAY AGAIN?";
			document.querySelector("#next-step-indicator").textContent = "Correct!";
		}
		else
		{
			colorTwo.style.background = "black";
			document.querySelector("#next-step-indicator").textContent = "Try Again";
		}
	}
});

document.querySelector("#color-three").addEventListener("click",function()
{
	if(won === 0)
	{
		if(colorThree === rand)
		{
			colorOne.style.background = colorThree.style.background;
			colorTwo.style.background = colorThree.style.background;
			if(turn === 1)
			{
				colorFour.style.background = colorThree.style.background;
				colorFive.style.background = colorThree.style.background;
				colorSix.style.background = colorThree.style.background;
			}
			var  selectDiv = document.querySelector("div");
			selectDiv.style.background = colorThree.style.background;
			selectDiv.style.borderColor = colorThree.style.background;
			won = 1;
			document.querySelector("#game-status").textContent = "PLAY AGAIN?";
			document.querySelector("#next-step-indicator").textContent = "Correct!";
		}
		else
		{
			colorThree.style.background = "black";
			document.querySelector("#next-step-indicator").textContent = "Try Again";
		}
	}
});

if(turn === 1)
{
	document.querySelector("#color-four").addEventListener("click",function()
	{
		if(won === 0)
		{
			if(colorFour === rand)
			{
				colorOne.style.background = colorFour.style.background;
				colorTwo.style.background = colorFour.style.background;
				colorThree.style.background = colorFour.style.background;
				colorFive.style.background = colorFour.style.background;
				colorSix.style.background = colorFour.style.background;
				var  selectDiv = document.querySelector("div");
				selectDiv.style.background = colorFour.style.background;
				selectDiv.style.borderColor = colorFour.style.background;
				won = 1;
				document.querySelector("#game-status").textContent = "PLAY AGAIN?";
				document.querySelector("#next-step-indicator").textContent = "Correct!";
			}
			else
			{
				colorFour.style.background = "black";
				document.querySelector("#next-step-indicator").textContent = "Try Again";
			}
		}
	});

	document.querySelector("#color-five").addEventListener("click",function()
	{
		if(won === 0)
		{
			if(colorFive === rand)
			{
				colorOne.style.background = colorFive.style.background;
				colorTwo.style.background = colorFive.style.background;
				colorThree.style.background = colorFive.style.background;
				colorFour.style.background = colorFive.style.background;
				colorSix.style.background = colorFive.style.background;
				var  selectDiv = document.querySelector("div");
				selectDiv.style.background =colorFive.style.background;
				selectDiv.style.borderColor = colorFive.style.background;
				won = 1;
				document.querySelector("#game-status").textContent = "PLAY AGAIN?";
				document.querySelector("#next-step-indicator").textContent = "Correct!";
			}
			else
			{
				colorFive.style.background = "black";
				document.querySelector("#next-step-indicator").textContent = "Try Again";
			}
		}
	});

	document.querySelector("#color-six").addEventListener("click",function()
	{
		if(won === 0)
		{
			if(colorSix === rand)
			{
				colorOne.style.background = colorSix.style.background;
				colorTwo.style.background = colorSix.style.background;
				colorThree.style.background = colorSix.style.background;
				colorFour.style.background = colorSix.style.background;
				colorFive.style.background = colorSix.style.background;	
				var  selectDiv= document.querySelector("div");
				selectDiv.style.background = colorSix.style.background;
				selectDiv.style.borderColor = colorSix.style.background;
				won = 1;
				document.querySelector("#game-status").textContent = "PLAY AGAIN?";
				document.querySelector("#next-step-indicator").textContent = "Correct!";
			}
			else
			{
				colorSix.style.background = "black";
				document.querySelector("#next-step-indicator").textContent = "Try Again";
			}
		}
	});
}