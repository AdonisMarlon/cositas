const yesBtn = document.querySelector('#yesBtn');

yesBtn.style.background = 'pink';

yesBtn.addEventListener('click',function () {
    alert('Lo suponia JAKSDJASKJ, hare que seas la chica mas feliz del mundo<3 TQM');
});
const noBtn = document.querySelector('#noBtn');
noBtn.style.background = 'pink';
noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`traslate(-${randomX},-${randomY}%)`);
})