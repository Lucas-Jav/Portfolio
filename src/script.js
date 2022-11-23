const inputDayOrNight = document.querySelector('input[name=checkbox]')

inputDayOrNight.addEventListener('change', function() {
    const trocaCor = document.getElementById('colordays')

    if (this.checked) {
        trocaCor.classList.toggle('day')
        trocaCor.classList.toggle('nigth')
    } else {
        trocaCor.classList.toggle('nigth')
        trocaCor.classList.toggle('day')
    }
})

const downloadCv = document.getElementById('cv')

downloadCv.addEventListener('click', function buttonCv() {
    return window.open('../DOM/cv.pdf', '_blank');
})

