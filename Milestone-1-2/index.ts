let raees1= document.getElementById ("toggle") as HTMLButtonElement
let khuzaima1 =document.getElementById ('line3sd2') as HTMLElement
raees1.addEventListener ('click', () =>{
    if (khuzaima1.style.display === 'none'){
        khuzaima1.style.display = 'block'
    } else {
        khuzaima1.style.display = 'none'
    }
});