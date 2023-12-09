class Goal2{
    constructor(desc, img){
        this.desc = desc;
        this.img = img;
    }
}

const goal2Content = new Goal2("Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world. There has been progress over the last decades, but the world is not on track to achieve gender equality by 2030.Women and girls represent half of the world’s population and therefore also half of its potential. But gender inequality persists everywhere and stagnates social progress.On average, women in the labor market still earn 23 percent less than men globally and women spend about three times as many hours in unpaid domestic and care work as men.Sexual violence and exploitation, the unequal division of unpaid care and domestic work, and discrimination in public office, all remain huge barriers. All these areas of inequality have been exacerbated by the COVID-19 pandemic: there has been a surge in reports of sexual violence, women have taken on more care work due to school closures, and 70% of health and social workers globally are women.At the current rate, it will take an estimated 300 years to end child marriage, 286 years to close gaps in legal protection and remove discriminatory laws, 140 years for women to be represented equally in positions of power and leadership in the workplace, and 47 years to achieve equal representation in national parliaments.Political leadership, investments and comprehensive policy reforms are needed to dismantle systemic barriers to achieving Goal 5 Gender equality is a cross-cutting objective and must be a key focus of national policies, budgets and institutions.How much progress have we made?International commitments to advance gender equality have brought about improvements in some areas: child marriage and female genital mutilation (FGM) have declined in recent years, and women’s representation in the political arena is higher than ever before. But the promise of a world in which every woman and girl enjoys full gender equality, and where all legal, social and economic barriers to their empowerment have been removed, remains unfulfilled. In fact, that goal is probably even more distant than before, since women and girls are being hit hard by the COVID-19 pandemic.","images/image1A.png" )

const array = [];

array.push(goal2Content);

console.log(array.length);

array.map((item)=>{
    console.log(`item ${item.desc}`);
})

const sectionCenter = document.querySelector("#section-info2");


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