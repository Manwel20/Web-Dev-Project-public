class Goal2{
    constructor(name,desc,img,role){
        this.desc = desc;
        this.img = img;
        this.name = name;
        this.role = role;
    }
}

const goal2Content = new Goal2("Manwel Al Kana","A versatile and motivated individual, Manwel thrives on challenges and constantly seeks opportunities for personal and professional growth. With a background in computer science, he brings a unique blend of skills, creativity, and a strong work ethic to every endeavor. Known for CSS, JavaScript,HTML and node, Manwel is committed to making a positive impact and contributing meaningfully to the computer science industry.","images/imageTeam.jpg","Manwel is in charge of: home page, page 1, page 2, page 3 and team page" );
const goal3Content = new Goal2("Tyrone Wilson", "A versatile and motivated individual, Tyrone thrives on challenges and constantly seeks opportunities for personal and professional growth. With a background in computer science, he brings a unique blend of skills, creativity, and a strong work ethic to every endeavor. Known for CSS, JavaScript and node, Tyrone is committed to making a positive impact and contributing meaningfully to the computer science industry." ,"images/imageTeam.jpg","Tyrone is in charge of: home page, page 2, page 3 and sign up form" );
const array = [];

array.push(goal2Content);
array.push(goal3Content);

console.log(array.length);

array.map((item)=>{
    console.log(`item ${item.desc}`);
})

const sectionCenter = document.querySelector("#section-info4");


function loadContent(){
    let displayItem = array.map((item) => {
        return `
        <article id="TeamPageService">
        <figure>
        <img src=${item.img} alt="${item.desc}" id="photo"/>
            <figcaption>
                <h3 id="namePara"> "${item.name}" </h3>
                <p>
                ${item.desc}
                </p> 
                <p id="rolePara">
                ${item.role}
                </p> 
            </figcaption>
        </figure>
        </article>
        
        `
        
    })

    displayItem = displayItem.join("");
    sectionCenter.innerHTML = displayItem;
}
window.addEventListener("DOMContentLoaded", loadContent, false);
