let allCard = document.getElementById("allCard");

allCard.addEventListener("click", function (e) {

    if (e.target.classList.contains("fa-trash-can")) {

        e.target.closest('.mt-3').classList.add("hidden");

    }

});