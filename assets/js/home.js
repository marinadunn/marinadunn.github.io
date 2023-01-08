(() => {
    const convertToRGB = (hexColor) => {
        var aRgbHex = hexColor.match(/.{1,2}/g);
        var aRgb = `rgba(${parseInt(aRgbHex[0], 16)}, ${parseInt(aRgbHex[1], 16)}, ${parseInt(aRgbHex[2], 16)}, 0.2)`;
        return aRgb;
    }
    const elements = document.querySelectorAll(".tiles article")

    elements.forEach(el => {
        console.log(convertToRGB(el.getAttribute('data-overlay-color')))
        el.style.height = el.offsetWidth + 'px'
        // el.style.backgroundImage = 'linear-gradient(' + convertToRGB(el.getAttribute('data-overlay-color')) + '), url(' + el.getAttribute('data-image-bg') + ')'
        el.style.backgroundImage = 'url(' + el.getAttribute('data-image-bg')
        el.style.backgroundSize = 'cover'
        el.style.backgroundPosition = 'center'
    })
})()