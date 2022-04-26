window.onload = function () {

    //DOM selectors
    const bod = document.body;
    const bgColor = document.getElementById('bg-color');
    const textColor = document.getElementById('tx-color');
    const fontSize = document.getElementById('font-size');
    const lineHeight = document.getElementById('line-height');
    const fontFam = document.getElementById('font-family')

    //use values saved on local storage
    bod.style.backgroundColor = localStorage.getItem('bgColor');
    bod.style.color = localStorage.getItem('txtColor');
    bod.style.fontSize = localStorage.getItem('font-size');
    bod.style.lineHeight = localStorage.getItem('line-heigth');
    bod.style.fontFamily = localStorage.getItem('font-family')

    //clear button
    document.getElementById('clear').addEventListener('click' , function () {
        localStorage.clear();
    });

    //reset button
    document.getElementById('reset').addEventListener('click' , function () {
        localStorage.setItem('bgColor', 'grey')
        localStorage.setItem('txtColor', 'white');
        localStorage.setItem('font-size', '1em');
        localStorage.setItem('line-heigth', 'normal');
        localStorage.setItem('font-family', 'sans-serif');
        location.reload();
    });

    //change background color
    bgColor.addEventListener('input', function () {
        bod.style.backgroundColor = bgColor.value;
        localStorage.setItem('bgColor', bgColor.value)
    });

    //change text color
    textColor.addEventListener('input', function () {
        bod.style.color = textColor.value;  
        localStorage.setItem('txtColor', textColor.value);   
    });

    //change font size
    fontSize.addEventListener('input', function () {
        bod.style.fontSize = fontSize.value;
        localStorage.setItem('font-size', fontSize.value);
    });

    //change line height
    lineHeight.addEventListener('input', function () {
        bod.style.lineHeight = lineHeight.value;
        localStorage.setItem('line-heigth', lineHeight.value);
    });

    //change font family
    fontFam.addEventListener('input', function () {
        bod.style.fontFamily = fontFam.value;
        localStorage.setItem('font-family', fontFam.value);
    });
}