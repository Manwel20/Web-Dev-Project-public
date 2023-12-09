class Goal1{
    constructor(desc, img){
        this.desc = desc;
        this.img = img;
    }
}

const goal1Content = new Goal1("Goal 1 is about promoting inclusive and sustainable economic growth, employment and decent work for all. Multiple crises are placing the global economy under serious threat. Global real GDP per capita growth is forecast to slow down in 2023 and with ever increasing challenging economic conditions, more workers are turning to informal employment.Globally, labour productivity has increased and the unemployment rate has decreased. However, more progress is needed to increase employment opportunities, especially for young people, reduce informal employment and labour market inequality (particularly in terms of the gender pay gap), promote safe and secure working environments, and improve access to financial services to ensure sustained and inclusive economic growth.The global unemployment rate declined significantly in 2022, falling to 5.4 per cent from a peak of 6.6 per cent in 2020 as economies began recovering from the shock of the COVID-19 pandemic. This rate was lower than the pre-pandemic level of 5.5 per cent in 2019.What does “decent work” mean?Decent work means opportunities for everyone to get work that is productive and delivers a fair income, security in the workplace and social protection for families, better prospects for personal development and social integration. A continued lack of decent work opportunities, insufficient investments and under-consumption lead to an erosion of the basic social contract underlying democratic societies: that all must share in progress.","images/image3B.png" )

const array = [];

array.push(goal1Content);

console.log(array.length);

array.map((item)=>{
    console.log(`item ${item.desc}`);
})

const sectionCenter = document.querySelector("#section-info");


function loadContent(){
    let displayItem = array.map((item) => {
        return `
            <article class ="item">
            <img src=${item.img} alt="Decent work and economic growth" class="photo"/>
                
                <div class ="para">
                    <p class="item-description">${item.desc}</p>
                </div>
                <div id="result"></div>
            </article>
        
        `
        
    })

    displayItem = displayItem.join("");
    sectionCenter.innerHTML = displayItem;
    sectionCenter.addEventListener("click", clickHandler);
}
window.addEventListener("DOMContentLoaded", loadContent, false);
