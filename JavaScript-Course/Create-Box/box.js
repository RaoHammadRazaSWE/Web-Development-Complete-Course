function submitForm() {
    // Get values from input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;

    // Combine values into a single string
    var resultText = "Name: " + name + "<br>" +
                     "Email: " + email + "<br>" +
                     "City: " + city + "<br>" +
                     "Country: " + country;

    // Display the result in the paragraph
    document.getElementById("result").innerHTML = resultText;
}
