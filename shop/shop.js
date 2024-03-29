const hambuger = document.querySelector(".hambuger");
const navBar = document.querySelector(".navBar");
const products = document.querySelectorAll(".prodcut");
const singleProduct = document.querySelector(".single-product");
const productLink = document.querySelectorAll('.product-view');

hambuger.onclick = function () {
    navBar.classList.toggle("visible")
    hambuger.classList.toggle("cross")
}

const allProducts = [
    {
        img: '../images/shopImages/product (1).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (2).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (3).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (4).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (5).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (6).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (7).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (8).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (9).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (10).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (1).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
    {
        img: '../images/shopImages/product (2).webp',
        price: "Price 15.00",
        heading: "Glowing Led Ballon's",
        description: 'This is a description about the prodcut.'
    },
   
]

products.forEach((product,index)=>{
    product.addEventListener("click",()=>{
        localStorage.setItem('currentProduct',JSON.stringify(index))
        window.location.href = 'product.html?executeFunction=true';
    })
})




function createSingleProduct({ selectedImg, selectedHeading, selectedPrice,description }) {
    const rightDiv = document.createElement("div");
    const leftDiv = document.createElement("div");
    
    const img = document.createElement('img');
    img.src = selectedImg;
    const h2 = document.createElement("h2");
    h2.textContent = selectedHeading;
    const price = document.createElement("p");
    price.textContent = selectedPrice;
    const quantityDiv = document.createElement("div");
    const des = document.createElement("p");
    des.textContent = description
    const descriptionTitle = document.createElement("h3");
    descriptionTitle.textContent = "Description"
    const p = document.createElement("p");
    p.textContent = 'Quantity'
    const button = document.createElement('button');
    button.textContent = 'Add to cart'
    const input = document.createElement("input");
    
    quantityDiv.setAttribute("class",'product-quantity')
    quantityDiv.appendChild(descriptionTitle)
    quantityDiv.appendChild(des)
    quantityDiv.appendChild(p)
    quantityDiv.appendChild(input);
    quantityDiv.appendChild(button);
    leftDiv.appendChild(h2);
    leftDiv.appendChild(price)
    leftDiv.appendChild(quantityDiv);
    rightDiv.appendChild(img);
    singleProduct.appendChild(rightDiv)
    singleProduct.appendChild(leftDiv);
}
window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const executeFunction = urlParams.get("executeFunction");

    if(executeFunction === 'true'){
        let current = JSON.parse(localStorage.getItem("currentProduct"));
        const productSelected = allProducts[current];
        createSingleProduct({ selectedImg: productSelected.img, selectedPrice: productSelected.price, selectedHeading: productSelected.heading ,description: productSelected.description});
    }
}