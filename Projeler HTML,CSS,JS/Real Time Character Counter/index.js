const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textAreaEl.value.length
    remainingEl.innerText = textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
}