const cardTemplate = document.querySelector(".card");
const cardTxTemplate = document.querySelector(".card-tx");
const challenge = document.querySelector(".attribution");
const btnSubmit = document.getElementById("btn-submit");
const rate = document.getElementById("rate");
const rates = document.querySelectorAll("#rates");

rates.forEach((value) => {
    value.addEventListener("click", () => {
        console.log(value.innerHTML);
        rate.innerHTML = value.innerHTML;
    });
});



btnSubmit.addEventListener("click", () => {
    cardTxTemplate.classList.remove("hidden");
    cardTemplate.classList.add("hidden");
    challenge.classList.add("hidden");
});