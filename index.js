const shareBtn =  document.querySelector('.arrow-img');
const toolTip =  document.querySelector('.tooltip');

shareBtn.addEventListener('click', () => {
    toolTip.classList.toggle('hidden')
    shareBtn.classList.toggle('active')

})