const hambuger = document.querySelector(".hambuger");
const navBar = document.querySelector(".navBar");
const postLink = document.querySelectorAll(".post-img");
const singlePost = document.querySelector(".singlePost");

const singlePostTitle = document.querySelector('.singlePost-title');
const singlePostDescription = document.querySelector(".singlePost-description");
const singlePostImg = document.getElementById("singlePost-img");

hambuger.onclick = function () {
    navBar.classList.toggle("visible")
    hambuger.classList.toggle("cross")
} 

const postInfo = [
    {
        img: '../images/blogImages/post1.webp',
        email: 'faheemkhan.pg@gmail.com',
        time: '15',
        titile: 'The power of Effective Marketing',
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim.`
    },
    {
        img: '../images/blogImages/post2.webp',
        email: 'faheemkhan.pg@gmail.com',
        time: '15',
        titile: 'The power of Effective Marketing',
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim.`
    },
    {
        img: '../images/blogImages/post3.webp',
        email: 'faheemkhan.pg@gmail.com',
        time: '15',
        titile: 'The power of Effective Marketing',
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga magni eum quaerat
        natus eaque alias optio repudiandae iusto laboriosam provident, adipisci nemo amet dolores
        cumque maiores excepturi! Libero, repellat quo. Ex quaerat rem fuga recusandae esse
        reiciendis suscipit enim.`
    }
]
postLink.forEach((link,index)=>{
    link.addEventListener("click",()=>{
        window.location.href = "post.html"
        localStorage.setItem('currentPost',JSON.stringify(index));
    })
});
window.onload = function(){
    let currentIndex = JSON.parse(localStorage.getItem('currentPost'));
    const currentPost = postInfo[currentIndex];
    singlePostImg.src = currentPost.img;
    singlePostDescription.textContent = currentPost.description;
    singlePostTitle.textContent = currentPost.titile;
}




