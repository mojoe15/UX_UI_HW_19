$("#submit-form-button").click(function () {
    console.log("Sent message");
});

$("#dark-mode").click(function () {
    if ($("#dark-mode").text() === "Dark Mode") {
        $("#dark-mode").text("Light Mode");
        $(".hero").css("background-color", "rgb(53,48,42)");
        $("*").css("color", "rgb(252, 251, 240)");
    } else {
        $("#dark-mode").text("Dark Mode");
        $(".hero").css("background-color", "inherit");
        $("*").css("color", "rgb(95, 97, 90)");
    }
});
