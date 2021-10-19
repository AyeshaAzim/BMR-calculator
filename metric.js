function metricBMR() {
    var bmr;
    var Gender;
    var calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;
	
    var range1 = document.getElementById("range1");
    var range2 = document.getElementById("range2");
    var range3 = document.getElementById("range3");
    var range4 = document.getElementById("range4");
    var range5 = document.getElementById("range5");
	
    (range1.checked) ? (calories += 1.2) : (calories += 0);
    (range2.checked) ? (calories += 1.375) : (calories += 0);
    (range3.checked) ? (calories += 1.55) : (calories += 0);
    (range4.checked) ? (calories += 1.725) : (calories += 0);
    (range5.checked) ? (calories += 1.9) : (calories += 0);
	
    (Gender == "Male") ? bmr = 66.5 + (13.75 * Weight ) + (5.003 * Height ) - (6.755 * Age ) : bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age);
    (Gender == "Female") ? bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age ) : bmr = 66.5 + (13.75 * Weight ) + (5.003 * Height ) - (6.755 * Age);
	
    document.write("<p>You are a " + Gender + " and your BMR is " + bmr + ".</p>"  );
 }
document.getElementById("submit").addEventListener("click", metricBMR, false);



