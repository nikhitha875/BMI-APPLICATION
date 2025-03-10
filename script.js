function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        document.getElementById("result").innerHTML = 
            `Your BMI is <strong>${bmi.toFixed(2)}</strong> (${category})`;
    } else {
        alert("Please enter valid weight and height!");
    }
}
