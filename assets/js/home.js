(() => {
    const elements = document.querySelectorAll(".tiles article")
    elements.forEach(el => {
        const childSpan = el.querySelector('span')
        const childImg = el.querySelector('img')
        const imgUrl = childImg.getAttribute('src')
        el.style.height = el.offsetWidth + 'px'
        el.style.backgroundImage = 'url(' + imgUrl + ')' 
        el.style.backgroundSize = 'cover'
        el.style.backgroundPosition = 'center'
        childSpan.remove()
    })
})()