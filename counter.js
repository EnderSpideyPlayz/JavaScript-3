let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el") 
cnt = 0

function count() {
    cnt += 1
    countEl.textContent = cnt
}

function save() {
    let countStr = cnt + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    cnt = 0
}
