function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var ageInput = document.getElementById("age");
    var resultInput = document.getElementById("result");

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; // Convert cm to meters
    var age = parseInt(ageInput.value);

    if (isNaN(weight) || isNaN(height) || height === 0 || isNaN(age)) {
        resultInput.value = "Invalid input";
        return;
    }

    var bmi = weight / (height * height);
    resultInput.value = bmi.toFixed(2);

    var bmiCategory = "";
    if (age < 18) {
        bmiCategory = " ,Kategori BMI tidak berlaku untuk usia di bawah 18 tahun";
    } else if (bmi < 18.5) {
        bmiCategory = " ,BMI kurang dari 18.5 - Kurang berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = " ,BMI 18.5-24.9 - Berat badan ideal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = " ,BMI 25-29.9 - Kelebihan berat badan";
    } else {
        bmiCategory = " ,BMI lebih dari 30 - Obesitas";
    }

    var resultMessage = "BMI: " + bmi.toFixed(2) + "\n" + bmiCategory;
    resultInput.value = resultMessage;
}
