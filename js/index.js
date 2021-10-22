$("#submit-form-button").click(function () {
    console.log("Sent message");
});

$("#dark-mode").click(function () {
    if ($("#dark-mode").text() === "Dark Mode") {
        $("#dark-mode").text("Switch back to Light Mode");
        $(".hero").css("background-color", "black");
    } else {
        $("#dark-mode").text("Dark Mode");
        $(".hero").css("background-color", "inherit");
    }
});
