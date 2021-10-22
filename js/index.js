$("#submit-form-button").click(function () {
    console.log("Sent message");
});

$("#dark-mode").click(function () {
    if ($("#dark-mode").text() === "Dark Mode") {
        $("#dark-mode").text("Light Mode");
        $(".hero").css("background-color", "black");
        $(".hero").css("color", "white");
    } else {
        $("#dark-mode").text("Dark Mode");
        $(".hero").css("background-color", "inherit");
    }
});
