let count  = 0
let saveEl = document.getElementById("save-el")
let countEl  = document.getElementById("count-el")

function increment(){
    count +=1
    countEl.innerText = count

}

function save(){
    saveEl.textContent+= count +" - "
    count =0
    countEl.innerHTML = 0

}

function reset(){
    count = 0
    countEl.innerText = 0
    saveEl.innerText = "Previous Entries: " 
}