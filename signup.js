class Goal2{
    constructor(){
        
    }
}

const goal2Content = new Goal2();

const array = [];

array.push(goal2Content);


console.log(array.length);

array.map((item)=>{
    console.log(`item ${item.desc}`);
})

const sectionCenter = document.querySelector("#section-info5");


function loadContent(){
    let displayItem = array.map((item) => {
        return `
              <div>
                <form method="post" action="">
                    <fieldset>
                        <legend>Sign up<i class="fa-solid fa-users"></i></legend>
                        <label for="Fullname">Full name*</label>
                        <input type="text" id="fullname1" name="myname" placeholder="Full name" required>
                        <label for="email">Email address*<i class="fa-solid fa-users"></i></label>
                        <input type="text" id="email1" name="emailaddress" placeholder="Email" required>
                        <label for="message">Which goal are you interested in?<i class="fa-solid fa-users"></i></label>
                        <textarea id="comment1" name="message1" rows="5" cols="33" placeholder="Write comment here and submit" required></textarea>
                        <input type="submit" id="submitplease" value="Send"/>
                    </fieldset>
                    </form> 
               </div>
        
        `
        
    })

    displayItem = displayItem.join("");
    sectionCenter.innerHTML = displayItem;
}
window.addEventListener("DOMContentLoaded", loadContent, false);