class Lesson{
    constructor(id, title, img, desc){
    this.id = id;
    this.title = title;
    this.img = img;
    this.desc = desc;
    }   
}

const goal1 = new Lesson(1, "Decent work and Economic growth", "images/image3A.png","Sustainable economic growth will require societies to create the conditions that allow people to have quality jobs.");
const goal2 = new Lesson(2, "Gender Equality", "images/image1B.png","Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world.");
const goal3 = new Lesson(3, "Climate action", "images/image2A.png","Climate change is a global challenge that affects everyone, everywhere.");


const goals = [];

goals.push(goal1);
goals.push(goal2);
goals.push(goal3);

console.log(goals.length);

goals.map((item)=>{
    console.log(`item ${item.id}`);
})

const sectionCenter = document.querySelector("#section-center");

function loadContent() {
    let displayItem = goals.map((item) => {
        return `
            <article class="item">
                <img src=${item.img} alt=${item.title} id=${item.id} class="photo"/>
                <div class="item-info">
                    <div class="item-header">
                        <h4>${item.title}</h4>
                    </div>
                    <p class="item-text">${item.desc}</p>
                </div>
                <div id="result"></div>
            </article>
        `;
    });

    displayItem = displayItem.join("");
    sectionCenter.innerHTML = displayItem;
    sectionCenter.addEventListener("click", clickHandler);
}

function clickHandler(e){
    console.log(e.currentTarget);
    console.log(e.target);
    if(e.currentTarget != e.target){
        const targetID = e.target.id;
        console.log(targetID);
        const item = goals.find(i => i.id == targetID);
        if(typeof item !== "undefined"){
        console.log(item.title);
            alert(item.desc);
        }
    }
}
window.addEventListener("DOMContentLoaded", loadContent, false);

var button1 = document.getElementById("button1");

    button1.addEventListener("click", function() {
        window.location.href = "page1.html";
    });
