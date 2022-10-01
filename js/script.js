const inputDayOrNight = document.querySelector('input[name=checkbox]')

inputDayOrNight.addEventListener('change', function() {
    const trocaCor = document.getElementById('colordays')

    if (this.checked) {
        trocaCor.classList.remove('day')
        trocaCor.classList.add('nigth')
    } else {
        trocaCor.classList.remove('nigth')
        trocaCor.classList.add('day')
    }
})

function buttonCv() {
    window.open('./DOM/cv.pdf', '_blank');
}
