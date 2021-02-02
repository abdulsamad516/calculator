function getvalue(e){
    var a = document.getElementById('ansbar')
    a.value += e
}


function calculate(){
    var a = document.getElementById('ansbar')
    var val =  a.value
    var final = eval(val)
    a.value = final
   

}

function clearvalue(){
    var a = document.getElementById('ansbar')
    a.value = ''
}