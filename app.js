async function remove_tag(){
    let pr = new Promise(function(resolve, reject){
        let btn = document.getElementById("btn");
        function button(){
            let tag = document.getElementById("main_1");
            tag.remove();
            let msg = "Done";
            resolve(msg);
        }
        btn.addEventListener("click", button)
    });
    let wait_promise = await pr;
    return wait_promise;
}

function snippet(){
    let create_element = document.createElement("p");
    create_element.innerText = "C://ROOT-SERVER: SEARCHING USERNAME🔍"
    document.getElementById("text").appendChild(create_element);
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: ONE USERNAME FIND";
        document.getElementById("text").appendChild(create_element_1);
    },2000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: TRY TO ACCECS THE PASSWORD";
        document.getElementById("text").appendChild(create_element_1);
    },4000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: FAILD";
        document.getElementById("text").appendChild(create_element_1).style.color = "red";;
    },7000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: FAILD";
        document.getElementById("text").appendChild(create_element_1).style.color = "red";
    },9000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY ACCECS THE PASSWORD";
        document.getElementById("text").appendChild(create_element_1);
    },11000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: ENTER THE INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },13000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },16000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },19000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },21000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },23000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },26000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },29000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },16000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },31000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },33000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },36000)
    setTimeout(()=>{
        let create_element_1 = document.createElement("p");
        create_element_1.innerText = "C://ROOT-SERVER: SUCCESFULLY HACK INSTAGRAM ACCOUNT";
        document.getElementById("text").appendChild(create_element_1);
    },39000)
}

remove_tag()
.then((value)=>{
    snippet();
})