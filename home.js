class Lesson{
    constructor(id, title, category, day, img, desc){
    this.id = id;
    this.title = title;
    this.category = category;
    this.day = day;
    this.img = img;
    this.desc = desc;
    }   
}

const yoga1 = new Lesson(1, "Gentle Hatha Yoga", "yoga", "Monday", "images/image3A.png","Gentle yoga is performed at a slower pace, with less intense positions, and usually includes extended time for meditation, yogic breath work, and relaxation.");
const yoga2 = new Lesson(2, "Vinyasa Yoga", "yoga", "Tuesday", "images/image1B.png","Vinyasa is a style of yoga characterised by stringing postures together so that you move from one to another, seamlessly, using breath.");
const yoga3 = new Lesson(3, "Restorative Yoga", "yoga", "Friday", "images/image2A.png","Restorative yoga is a restful practice that is all about slowing down and opening your body through passive stretching");


const lesson = [];

lesson.push(yoga1);
lesson.push(yoga2);
lesson.push(yoga3);

console.log(lesson.length);

lesson.map((item)=>{
    console.log(`item ${item.id}`);
})

const sectionCenter = document.querySelector("#section-center");

function loadContent() {
    let displayItem = lesson.map((item) => {
        return `
            <article class="item">
                <img src=${item.img} alt=${item.title} id=${item.id} class="photo"/>
                <div class="item-info">
                    <div class="item-header">
                        <h4 class="day"><i class="fa-regular fa-calendar-days"></i></h4>
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
        const item = lesson.find(i => i.id == targetID);
        if(typeof item !== "undefined"){
        console.log(item.title);
            alert(item.desc);
        }
    }
}
window.addEventListener("DOMContentLoaded", loadContent, false);
