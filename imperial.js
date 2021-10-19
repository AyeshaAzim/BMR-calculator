function imperialBMR() {
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
	
    (Gender == "Male") ? bmr = 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age) : 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age);
	
    (Gender == "Female") ? bmr = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age) : 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age);
    document.write("<p>You are a " + Gender + " and your BMR is " + bmr + ".</p>"  );
}
document.getElementById("submit").addEventListener("click", imperialBMR, false);