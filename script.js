var num = localStorage.getItem('number');
var head = document.getElementById('num').innerText = num;

function inc() {
    num++;
    localStorage.setItem('number', num);
    document.getElementById('num').innerText = num;
}

function reset(){
    num = 0;
    localStorage.setItem('number', num);
    document.getElementById('num').innerText = num;
}
