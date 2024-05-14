function toggleDocumentation() {
    var documentation = document.getElementById("documentation");
    var dropdownContent = document.getElementById("maladies-dropdown");
    var message = document.querySelector(".centered-message");
    
    if (documentation.style.display === "none") {
        documentation.style.display = "block";
        dropdownContent.style.display = "block";
        message.style.display = "none";
    } else {
        documentation.style.display = "none";
        dropdownContent.style.display = "none";
        message.style.display = "block";
    }
}

function toggleAnalyse() {
    var analyse = document.getElementById("analyse");
    var message = document.querySelector(".centered-message");

    if (analyse.style.display === "none") {
        analyse.style.display = "block";
        message.style.display = "none";
    } else {
        analyse.style.display = "none";
        message.style.display = "block";
    }
}
