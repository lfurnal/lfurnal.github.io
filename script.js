marked.setOptions({
    highlight: (code, lang) => hljs.highlightAuto(code).value
});

const input = document.getElementById("mdInput");
const output = document.getElementById("output");

function render() {
    output.innerHTML = marked.parse(input.value);
}

input.addEventListener("input", render);
render();
