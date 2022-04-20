window.onload = function () {

    const bod = document.body;
    const bgColor = document.getElementById('bg-color');
    const textColor = document.getElementById('tx-color');

    bod.style.backgroundColor = localStorage.getItem('bgColor');
    bod.style.backgroundColor = localStorage.getItem('txtColor');

    document.getElementById('clear').addEventListener('click' , function () {
        localStorage.clear();
    });

    bgColor.addEventListener('input', function () {
        bod.style.backgroundColor = bgColor.value;
        localStorage.setItem('bgColor', bgColor.value)
    });

    textColor.addEventListener('input', function () {
        bod.style.color = textColor.value;  
        localStorage.setItem('txtColor', textColor.value);   
    });

}