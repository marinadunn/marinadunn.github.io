(() => {
    const convertToRGB = (hexColor) => {
        var aRgbHex = hexColor.replace('#', '').match(/.{1,2}/g)
        var aRgb = `rgba(${parseInt(aRgbHex[0], 16)}, ${parseInt(aRgbHex[1], 16)}, ${parseInt(aRgbHex[2], 16)}, 0.6)`
        return aRgb
    }
    const elements = document.querySelectorAll(".tiles article")

    elements.forEach(el => {
        const hexColor = convertToRGB(el.getAttribute('data-overlay-color'))
        el.style.height = el.offsetWidth + 'px'
        el.style.backgroundImage = `linear-gradient(to bottom, ${hexColor}, ${hexColor}),` + 'url(' + el.getAttribute('data-image-bg')
        el.style.backgroundSize = 'cover'
        el.style.backgroundPosition = 'center'
        el.style.transition = 'all ease 0.9s !important'
        el.addEventListener('mouseover', () => {
            el.style.backgroundImage = 'url(' + el.getAttribute('data-image-bg')
        })
        el.addEventListener('mouseout', () => {
            el.style.backgroundImage = `linear-gradient(to bottom, ${hexColor}, ${hexColor}),` + 'url(' + el.getAttribute('data-image-bg')
        })
    })
})()