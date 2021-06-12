 function ADD() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    const cal = parseFloat(n1) + parseFloat(n2);
    document.getElementById("ans").innerText = cal;
}
function SUB() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    console.log(n1);
    const cal= parseFloat(n1) - parseFloat(n2);

    document.getElementById("ans").innerText = cal;
}
function MUL() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    const cal = parseFloat(n1) * parseFloat(n2);
    document.getElementById("ans").innerText = cal;
}
function DIV() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    const cal = parseFloat(n1) / parseFloat(n2);
    document.getElementById("ans").innerText = cal;
}

