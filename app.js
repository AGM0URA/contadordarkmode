let count = 0

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

// console.log(value)
// console.log(btns)

btns.forEach(function(btn){
    
    btn.addEventListener('click', function(){
        const style = event.currentTarget.classList
        if(style.contains('decrease')){
            count--;
        }else if(style.contains('reset')){
            count = 0;
        }else if(style.contains('increase')){
            count++;
        }
            
        value.textContent = count


        if(count => 1){
            document.getElementById('value').style.color = "rgb(0, 240, 80)"
        }
        if(count === 0){
            document.getElementById('value').style.color = "gray"
        }
        if(count<0){
            document.getElementById('value').style.color = "red"
        }
    })

})

function darkMode (){
    const pagina = document.body
 pagina.classList.toggle("dark-mode")
    
}
