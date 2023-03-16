let Btn01 = document.querySelector('#btn01')
let box1 = document.querySelector('#box-1')
let Btn02 = document.querySelector('#btn02')
let box2 = document.querySelector('#box-2')
let Btn03 = document.querySelector('#btn03')
let box3 = document.querySelector('#box-3')
let Btn04 = document.querySelector('#btn04')
let box4 = document.querySelector('#box-4')
let hiddenBtn1 = document.querySelector('#hiddenBtn1')
let hiddenBtn2 = document.querySelector('#hiddenBtn2')
let hiddenBtn3 = document.querySelector('#hiddenBtn3')
let hiddenBtn4 = document.querySelector('#hiddenBtn4')
let hiddenBG = document.querySelector('.hiddenBG')



// console.log(boxAll.textContent)
// console.log(BtnAll.textContent)

Btn01.addEventListener('click' ,() => {
    box1.classList.remove('hidden')
    hiddenBG.classList.remove('hidden')
})
Btn02.addEventListener('click' ,() => {
box2.classList.remove('hidden')
hiddenBG.classList.remove('hidden')

})
Btn03.addEventListener('click' ,() => {
box3.classList.remove('hidden')
hiddenBG.classList.remove('hidden')

})
Btn04.addEventListener('click' ,() => {
box4.classList.remove('hidden')
hiddenBG.classList.remove('hidden')

})
// box2.classList.add('hidden')

hiddenBtn1.addEventListener('click',() => {
    box1.classList.add('hidden')
    hiddenBG.classList.add('hidden')

})
hiddenBtn2.addEventListener('click',() => {
    box2.classList.add('hidden')
    hiddenBG.classList.add('hidden')

})
hiddenBtn3.addEventListener('click',() => {
    box3.classList.add('hidden')
    hiddenBG.classList.add('hidden')

})
hiddenBtn4.addEventListener('click',() => {
    box4.classList.add('hidden')
    hiddenBG.classList.add('hidden')

})