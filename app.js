const numBtn = document.querySelectorAll('.numbers button')
let pText = document.querySelector('.cal-text')

numBtn.forEach(num => {
 num.addEventListener('click', function(){
    console.log(num)
    pText.innerHTML += num.value
 })
})