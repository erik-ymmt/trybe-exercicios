const title = document.getElementById('header-container');
title.style.backgroundColor = '#569c58';

const subtilesLeft = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < subtilesLeft.length; i += 1) {
    subtilesLeft[i].style.backgroundColor = '#8c3fd4';
}

const leftSideTable = document.getElementsByClassName('emergency-tasks')[0];
leftSideTable.style.backgroundColor = '#e89a79';

const subtilesRight = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < subtilesLeft.length; i += 1) {
    subtilesRight[i].style.backgroundColor = '#1c1b1a';
}

const rightSideTable = document.getElementsByClassName('no-emergency-tasks')[0];
rightSideTable.style.backgroundColor = '#e6c353 ';

const foot = document.getElementById('footer-container');
foot.style.backgroundColor = 'darkgreen';