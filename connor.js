var shop =[
    {
        title: "Puppy One",
        image: "./assets/puppyOne.png",
        price: 299.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat!"
    },
    {
        title: "Puppy Two",
        pet: "Dog",
        category: "Pet",
        image: "./assets/puppyTwo.png",
        price: 249.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, incidunt."
    },
    {
        title: "Puppy Three",
        pet: "Dog",
        category: "Pet",
        image:"./assets/puppyThree.png",
        price: 319.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, incidunt."
    },
    {
        title:"Cat One",
        pet:"Cat",
        category:"Pet",
        image:"./assets/catOne.jpg",
        price:289.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat!"
    },
    {
        title:"Cat Two",
        pet:"Cat",
        category:"Pet",
        image:"./assets/catTwo.jpg",
        price: 199.99,
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, optio?",
    },
    {
        title:"Bird One",
        pet:"Other",
        category:"Pet",
        image:"./assets/birdOne.jpg",
        price:89.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veritatis.",
    },
    {
        title:"Bird Two",
        pet:"Other",
        category:"Pet",
        image:"./assets/birdTwo.jpg",
        price: 69.99,
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quas!",
    },
    {
        title:"Hamster",
        pet:"Other",
        category:"Pet",
        image:"./assets/hamster.jpeg",
        price: 39.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, illo",
    },
    {
        title:"Bone",
        pet:"Dog",
        category:"etc",
        image:"./assets/bone.jpg",
        price: 8.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, possimus.",
    },
    {
        title:"Cat Feather",
        pet:"Cat",
        category:"etc",
        image:"./assets/catFeatherToy.jpg",
        price: 3.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tempore!",
    },
    {
        title:"Dry Cat Food",
        pet:"Cat",
        category:"etc",
        image:"./assets/catFoodDry.jpg",
        price: 16.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eos.",
    },
    {
        title:"Wet Cat Food",
        pet:"Cat",
        category:"etc",
        image:"./assets/catFoodWet.jpg",
        price: 1.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos.",
    },
    {
        title:"Kitty Litter",
        pet:"Cat",
        category:"etc",
        image:"./assets/catLitter.jpeg",
        price: 29.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, deserunt?",
    },
    {
        title:"Cat Castle",
        pet:"Cat",
        category:"etc",
        image:"./assets/catPlayground.jpg",
        price:64.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eos.",
    },
    {
        title:"Scratching Post",
        pet:"Cat",
        category:"etc",
        image:"./assets/catScratcher.jpg",
        price: 25.99,
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, facilis!",
    },
    {
        title:"Dog Food",
        pet:"Dog",
        category:"etc",
        image:"./assets/dogFood.jpeg",
        price: 24.99,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, placeat.",
    },
    {
        title:"Hamster Bedding",
        pet:"Hamster",
        category:"etc",
        image:"./assets/hamsterBedding.jpg",
        price: 8.95,
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, natus.",
    },
    {
        title:"Hamster Food",
        pet:"Hamster",
        category:"etc",
        image:"./assets/hamsterFood.jpg",
        price: 7.99,
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, similique.",
    },
    {
        title:"Exercise Wheel",
        pet:"Hamster",
        category:"etc",
        image:"./assets/hamsterWheel.jpg",
        price: 14.99,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates.",
    },
    {
        title:"Laser Pointer",
        pet:"Cat",
        category:"etc",
        image:"./assets/laserPointer.jpg",
        price: 11.95,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quae.",
    },
    {
        title:"Litter Box",
        pet:"Cat",
        category:"etc",
        image:"./assets/litterBox.jpeg",
        price: 23.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat.",
    },
    {
        title:"Tennis Ball",
        pet:"Dog",
        category:"etc",
        image:"./assets/tennisBall.jpg",
        price: .99,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates.",
    }
]
var postHTML = " "
for (var i=0; i < shop.length; i++){
    var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i].image + '"/'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var description = '<div class="hoverProduct"><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
}
document.getElementById('market').innerHTML = postHTML
//<div class="product pet dog" id="puppyOne">
//<span>
  //<h5>Puppy One</h5>
  //<img src="./assets/puppyOne.png"/>
  //<p>$299.99</p>
//</span>
{/* <div class="hoverProduct">
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat!</p>
  <button type="button" class="btn btn-warning">add to cart</button>
</div>
</div> */}





