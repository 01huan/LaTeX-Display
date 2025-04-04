window.onload = function() {
    document.getElementById('code').focus();
};
function LaTeX() {
    equation.innerHTML = "$$" + document.getElementById("code").value + "$$"; MathJax.typesetClear([document.getElementById("equation")]);
    MathJax.typesetPromise([document.getElementById("equation")]);
}

function Limit() {
    let word = "\\lim_{{}\\to{}}";
    let textarea = document.getElementById("code");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    textarea.setRangeText(word, start, end, "end");
    textarea.selectionStart = start;
    textarea.selectionEnd = start + word.length;
    textarea.focus();
}
function Fraction() {
    let word = "\\dfrac{}{}";
    let textarea = document.getElementById("code");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    textarea.setRangeText(word, start, end, "end");
    textarea.selectionStart = start;
    textarea.selectionEnd = start + word.length;
    textarea.focus();
}
function Integral() {
    let word = "\\int_{}^{}{}";
    let textarea = document.getElementById("code");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    textarea.setRangeText(word, start, end, "end");
    textarea.selectionStart = start;
    textarea.selectionEnd = start + word.length;
    textarea.focus();
}
function Binomial() {
    let word = "\\binom{}{}";
    let textarea = document.getElementById("code");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    textarea.setRangeText(word, start, end, "end");
    textarea.selectionStart = start;
    textarea.selectionEnd = start + word.length;
    textarea.focus();
}
function Summation() {
    let word = "\\sum_{{}={}}^{}";
    let textarea = document.getElementById("code");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    textarea.setRangeText(word, start, end, "end");
    textarea.selectionStart = start;
    textarea.selectionEnd = start + word.length;
    textarea.focus();
}
function Matrix() {
    let word = "\\begin{bmatrix}\n\t{} & {} & {}\\\\\n\t{} & {} & {}\\\\\n\t{} & {} & {}\n\\end{bmatrix}";
    let textarea = document.getElementById("code");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    textarea.setRangeText(word, start, end, "end");
    textarea.selectionStart = start;
    textarea.selectionEnd = start + word.length;
    textarea.focus();
}
function LinearSystem() {
    let word = "\\begin{cases}\n\t{}\\\\\n\t{}\n\\end{cases}";
    let textarea = document.getElementById("code");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    textarea.setRangeText(word, start, end, "end");
    textarea.selectionStart = start;
    textarea.selectionEnd = start + word.length;
    textarea.focus();
}
function nthRoot() {
    let word = "\\sqrt[]{}";
    let textarea = document.getElementById("code");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    textarea.setRangeText(word, start, end, "end");
    textarea.selectionStart = start;
    textarea.selectionEnd = start + word.length;
    textarea.focus();
}