const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = `https://source.unsplash.com/random`
            observer.unobserve(entry.target)
        }
    })
})

const allImages = document.querySelectorAll('img.lazy')
allImages.forEach((image) => observer.observe(image))
