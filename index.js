var mainArray = [];
var secondaryNubers = [];
var lastOperation = "";
var secondary = false;
var clearClickCount = 0;

$(".n-btn, .decimal").on("click", function () {
    var clickedNumber = $(this).text();
    if (secondary) {
        secondaryNubers.push(clickedNumber);
        console.log("S: " + secondaryNubers);
        outPutNumbersSecondary();
    } else {
        mainArray.push(clickedNumber);
        console.log(mainArray);
        outPutNumbersMain();
    }
});

$(".clear").on("click", function () {
	if (clearClickCount === 1) {
		secondary = false;
		clearClickCount = 0; 
} else {
		clearClickCount++;
}

if (!secondary) {
		mainArray = [];
		secondaryNubers = [];
} else {
		secondaryNubers = [];
}

    console.log("S: " + secondaryNubers);
    outPutNumbersMain();
});

$(".index").on("click", function () {
	if (!secondary) {
			if (mainArray.length > 0) {
					var indexNumber = parseInt(mainArray.join(''));
					indexNumber *= -1;
					mainArray = [indexNumber.toString()];
					outPutNumbersMain();
			}
	} else {
			if (secondaryNubers.length > 0) {
					var indexNumber = parseInt(secondaryNubers.join(''));
					indexNumber *= -1;
					secondaryNubers = [indexNumber.toString()];
					outPutNumbersSecondary();
			}
	}
});


$(".dev, .mult, .sub, .plus").on("click", function () {
    lastOperation = $(this).text();
    secondary = true; 
});

$(".equal").on("click", function () {
    if (lastOperation === "/") {
			var firstNumber  = parseInt(mainArray.join(''));
			var secondNumber = parseInt(secondaryNubers.join(''));
			var result = firstNumber  / secondNumber 
			mainArray = []
			secondaryNubers = []
			mainArray.push(result)
			outPutNumbersMain()
			secondary = false; 
    } else {
			if(lastOperation === "X"){
				var firstNumber  = parseInt(mainArray.join(''));
				var secondNumber = parseInt(secondaryNubers.join(''));
				var result = firstNumber * secondNumber 
				mainArray = []
				secondaryNubers = []
				mainArray.push(result)
				outPutNumbersMain()
				secondary = false; 
			}else { 
				if(lastOperation === "-"){
					var firstNumber  = parseInt(mainArray.join(''));
					var secondNumber = parseInt(secondaryNubers.join(''));
					var result = firstNumber - secondNumber 
					mainArray = []
					secondaryNubers = []
					mainArray.push(result)
					outPutNumbersMain()
					secondary = false; 
				} else {
					if(lastOperation === "+"){ 
						var firstNumber  = parseInt(mainArray.join(''));
						var secondNumber = parseInt(secondaryNubers.join(''));
						var result = firstNumber + secondNumber 
						mainArray = []
						secondaryNubers = []
						mainArray.push(result)
						outPutNumbersMain()
						secondary = false; 
					} else {

					}
				}
		}

        
    }
});

$(".percent").on("click", function () {
    var number = parseFloat(mainArray.join(""));
    var percentageNumber = number / 100;
    $(".output").html(percentageNumber + "%");
});

function outPutNumbersMain() {
    $(".output").html(mainArray.join(""));
}

function outPutNumbersSecondary() {
    $(".output").html(secondaryNubers.join(""));
}
