class Goal2{
    constructor(desc, img){
        this.desc = desc;
        this.img = img;
    }
}

const goal2Content = new Goal2("Every person, in every country in every continent will be impacted in some shape or form by climate change. There is a climate cataclysm looming, and we are underprepared for what this could mean. Climate change is caused by human activities and threatens life on earth as we know it. With rising greenhouse gas emissions, climate change is occurring at rates much faster than anticipated. Its impacts can be devastating and include extreme and changing weather patterns and rising sea levels. If left unchecked, climate change will undo a lot of the development progress made over the past years. It will also provoke mass migrations that will lead to instability and wars. To limit global warming to 1.5°C above pre- industrial levels, emissions must already be decreasing and need to be cut by almost half by 2030, just seven years away. But, we are drastically off track from this target. Urgent and transformative going beyond mere plans and promises are crucial. It requires raising ambition, covering entire economies and moving towards climate-resilient development, while outlining a clear path to achieve net-zero emissions. Immediate measures are necessary to avoid catastrophic consequences and secure a sustainable future for generations to come. Act Now The climate crisis continues unabated as the global community shies away from the full commitment required for its reversal. 2010 – 2019 was the warmest decade ever recorded, bringing with it massive wildfires, hurricanes, droughts, floods and other climate disasters across continents. Climate change is disrupting national economies and affecting lives and livelihoods, especially for the most vulnerable. Between 2010 and 2020, highly vulnerable regions, home to approximately 3.3–3.6 billion people, experienced 15 x higher human mortality rates from floods, droughts and storms compared to regions with very low vulnerability. What happens if you don’t take action? If left unchecked, climate change will cause average global temperatures to increase beyond 3°C, and will adversely affect every ecosystem. Already, we are seeing how climate change can exacerbate storms and disasters, and threats such as food and water scarcity, which can lead to conflict. Doing nothing will end up costing us a lot more than if we take action now. Solving the problem To address climate change, we have to vastly raise our ambition at all levels. Much is happening around the world","images/image2B.png" )

const array = [];

array.push(goal2Content);

console.log(array.length);

array.map((item)=>{
    console.log(`item ${item.desc}`);
})

const sectionCenter = document.querySelector("#section-info3");


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