const menu = document.querySelector('.menu')

fetch('https://api.escuelajs.co/api/v1/products/')
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        menu.innerHTML += `
            <div class="card">
                <img class="card_img" src='${item.images}' alt="">
                <p class="card_title">${item.title}</p>
                <p class="card_title">${item.price}</p>
                <p class="card_description">${item.description}</p>
            </div>
        `
    })
})