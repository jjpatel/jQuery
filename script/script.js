
let url = "https://davids-restaurant.herokuapp.com/menu_items.json";

let data = null;
let buyItemList = [];

$("document").ready(function(){
    $.get(url,function(jsonObj,success){
        data = jsonObj.menu_items;

        for (const item in data) {
                let itemName = data[item].name;
                let eachItem=document.createElement("option");
                eachItem.textContent=itemName;
                eachItem.value=item;
                document.querySelector('#dropdown').appendChild(eachItem);
    
            }
            let submitbtn = document.querySelector("#submitbtn");
            submitbtn.addEventListener('click',addItem);
    });

    function addItem() {
        
        document.querySelector('#eachRow').innerHTML="";
        let item=document.querySelector('#dropdown').value;
        let list=data[item];

        for (i in list) {
            let tr=document.createElement("tr");
            let th=document.createElement("th");

            th.textContent=i;
            tr.appendChild(th);

            let td=document.createElement("td");
            td.textContent=list[i];
            
            tr.appendChild(td);
            document.querySelector('#eachRow').appendChild(tr);
        }
    }
    
    
});