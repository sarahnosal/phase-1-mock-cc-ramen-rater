document.addEventListener("DOMContentLoaded", () => {
    const ramenMenu = document.querySelector('div#ramen-menu')           // store node where we want to add all ramen images in
    const selectedImage = document.querySelector('img.detail-image')
    const selectedName = document.querySelector('h2.name')
    const selectedRestaurant = document.querySelector('h3.restaurant')
    const selectedRating = document.querySelector('span#rating-display')
    const selectedComment = document.querySelector('p#comment-display')
    const newRamenForm = document.querySelector("form#new-ramen")
    const newName = document.querySelector('input#new-name')
    const newRestaurant = document.querySelector('input#new-restaurant')
    const newImage = document.querySelector('input#new-image')
    const newRating = document.querySelector('input#new-rating')
    const newComment = document.querySelector('textarea#new-comment')

    fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((ramenData) => {
        ramenData.forEach((ramenItem) => {
            const ramenImage = document.createElement("img")
            ramenImage.setAttribute('src', `${ramenItem.image}`)
            ramenMenu.appendChild(ramenImage)
            ramenImage.addEventListener('click', (e) =>{
                selectedImage.setAttribute("src", e.target.src)
                selectedName.innerText= ramenItem.name
                selectedRestaurant.innerText= ramenItem.restaurant
                selectedRating.innerText = ramenItem.rating
                selectedComment.innerText = ramenItem.comment
            })
        })
    })

    newRamenForm.addEventListener("submit", (e) => {
        e.preventDefault()
        selectedName.innerText = newName.value
        selectedImage.setAttribute('src', `${newImage.value}`)
        const ramenImage = document.createElement("img")
        ramenImage.setAttribute('src', `${newImage.value}`)
        selectedRestaurant.innerText= newRestaurant.value
        selectedRating.innerText = newRating.value
        selectedComment.innerText= newComment.value
        ramenMenu.appendChild(ramenImage)
        newRamenForm.reset()
    })


})