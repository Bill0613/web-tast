const 任務 = document.querySelector(".選項");
console.log(任務.textContent);

const 文字欄=document.querySelector(".文字欄");
console.log(文字欄.placeholder);
const 選項=document.querySelector(".選項");
const btn=document.querySelector(".btn");

function 新任務(){
    if(文字欄.value === ""){
        return;
    }
    const 任務 = document.createElement("li");
    任務.innerHTML =`
    <input type="checkbox"class="打勾">
    <laber>${文字欄.value}</laber>
    <button class="垃圾桶">🗑</button>
    `
    const 垃圾桶=任務.querySelector(".垃圾桶");
    const 打勾=任務.querySelector(".打勾");

    垃圾桶.addEventListener("click",function(){
        任務.remove();
    })
    打勾.addEventListener("change",function(){
        if(打勾.checked){
            任務.style.textDecoration="line-through";
            任務.style.color="#999";
            選項.append(任務);
        }else{
            任務.style.textDecoration="none";
            任務.style.color="";
            選項.prepend(任務);
        }
    })    
    選項.append(任務);
    文字欄.value=""; 
}

btn.addEventListener("click",新任務);

文字欄.addEventListener("keyup",function(b){
    if(b.key ==="Enter"){
        新任務() 
    }
});