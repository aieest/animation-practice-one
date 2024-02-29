const button = document.querySelector('#button');
const spanDiv = document.querySelector('.span-div');
const numberOfSpans = Math.floor(49);


function changeClass() {
    const spans = document.querySelectorAll('.span');
    if (button.classList.contains("activate")) {
        button.classList.remove("activate");
        button.classList.add("return");
        button.textContent = "Return!";
        spans.forEach(span => {
            span.classList.remove("dots-inactive")
            span.classList.remove("dots-start")
            span.classList.add("dots-active")
        })
    } else if (button.classList.contains("return")) {
        button.classList.remove("return");
        button.classList.add("activate");
        button.textContent = "Click Me!";
        spans.forEach(span => {
            span.classList.remove("dots-active")
            span.classList.add("dots-inactive")
        })
    }
}

for (let i = 1; i <= numberOfSpans; i++) {
    const newSpan = document.createElement('span');
    newSpan.classList.add('span', 'dots-start');
    spanDiv.appendChild(newSpan);
}