document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded')
    addRamen()
    newRamen()
})
function addRamen() {
    fetch ('http://localhost:3000/ramens')
    .then (resp => resp.json())
    .then (data => {
        // console.log(data)
        const menu= document.querySelector('#ramen-menu')
        data.forEach(ramen => {
            const img = document.createElement('img')
            img.src= ramen.image
            img.addEventListener('click', function(event) {
                document.querySelector('.detail-image').src= ramen.image
                document.querySelector('.name').innerHTML= ramen.name
                document.querySelector('.restaurant').innerHTML= ramen.restaurant
                document.querySelector('#rating-display').innerHTML= ramen.rating
                document.querySelector('#comment-display').innerHTML= ramen.comment
            })
            menu.appendChild(img)
        })    

    })
}
function newRamen() {
    const form=document.querySelector('#new-ramen')
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const ramenObj = {}
            ramenObj.name = document.getElementById('new-name').value;
            ramenObj.restaurant = document.getElementById('new-restaurant').value;
            ramenObj.image = document.getElementById('new-image').value;
            ramenObj.rating = document.getElementById('new-rating').value;
            ramenObj.comment = document.getElementById('new-comment').value;
        const newImg = document.createElement('img')
        newImg.src= ramenObj.image
        document.querySelector('#ramen-menu').append(newImg);

    })
}