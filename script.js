window.onload = function() {
    document.querySelector("textarea").focus();
};

function convert() {
    equation.innerHTML = "$$" + document.querySelector("textarea").value + "$$";
    MathJax.typesetClear([document.getElementById("equation")]);
    MathJax.typesetPromise([document.getElementById("equation")]);
}

function insert(str) {
    const textarea = document.querySelector("textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const pos = textarea.scrollTop;
    textarea.value = textarea.value.substring(0,start) + str 
    + textarea.value.substring(end, textarea.value.length);
    textarea.focus();
    textarea.selectionStart = start + str.length;
    textarea.selectionEnd = start + str.length;
    textarea.scrollTop = pos;
}