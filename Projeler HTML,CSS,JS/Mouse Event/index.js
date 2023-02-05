const containerEl = document.querySelector(".container");
const mouseEventEl = document.querySelector(".mouse-event");
const mouseXEl = document.querySelector(".x");
const mouseYEl = document.querySelector(".y");

window.addEventListener("mousemove",(event)=>{
    containerEl.innerHTML = `
    <div class="mouse-event">
        ${event.clientX}
        <h4 class="x">Mouse X Position(px)</h4>
    </div>
    <div class="mouse-event">
        ${event.clientY}
        <h4 class="y">Mouse Y Position(px)</h4>
    </div>`
})