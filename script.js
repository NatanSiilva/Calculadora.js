function tabuadaMult() {
    
    let num = document.getElementById("txtn")
    let numope = document.getElementById("txtope")
    let tab = document.getElementById("seltab")
    if (num.value.length == 0) {
       window.alert("Por favor digite um numero! ")
    } else {
        let n = Number(num.value)
        let openum = Number(numope.value)
        tab.innerHTML = ''
        for (c = 1; c <= openum; c++) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`
            item.style.background ='black'
            item.style.color = 'red'
            item.style.width = '200px'
            item.style.padding = '5px 0px 0px 20px'
            tab.appendChild(item)
            
        }
    }
}

function carregarMult() {
    
    let emogiMult = document.getElementById("emogMult")
    emogiMult.innerHTML = `Tabuada de Multplicação \u{2716}`
    
}   



function tabuadaDiv() {
    
    let num = document.getElementById("txtn")
    let numope = document.getElementById("txtope")
    let tab = document.getElementById("seltab")
    if (num.value.length == 0) {
       window.alert("Por favor digite um numero! ")
    } else {
        let n = Number(num.value)
        let openum = Number(numope.value)
        tab.innerHTML = ''
        for (c = 1; c <= openum; c++) {
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${n/c}`
            item.value = `tab${c}`
            item.style.background ='black'
            item.style.color = 'red'
            item.style.width = '200px'
            item.style.padding = '5px 0px 0px 20px'
            tab.appendChild(item)
            
        }
    }
}


function carregarDiv() {

    let emogiDvi = document.getElementById("emogDiv")
    emogiDvi.innerHTML = `Tabuada de Divisão \u{2797}`
}    
    

function tabuadaAdc() {
    
    let num = document.getElementById("txtn")
    let numope = document.getElementById("txtope")
    let tab = document.getElementById("seltab")
    
    if (num.value.length == 0) {
       window.alert("Por favor digite um numero! ")
    } else {
        let n = Number(num.value)
        let openum = Number(numope.value)
        tab.innerHTML = ''
        for (c = 1; c <= openum; c++) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab${c}`
            item.style.background ='black'
            item.style.color = 'red'
            item.style.width = '200px'
            item.style.padding = '5px 0px 0px 20px'
            tab.appendChild(item)
            
        }
    }
}

function carregarAdi() {

    let emogiAdi = document.getElementById("emogAdi")
    emogiAdi.innerHTML = `Tabuada de Adição \u{2795}`
}


function tabuadaSub() {

    let num = document.getElementById("txtn")
    let numope = document.getElementById("txtope")
    let tab = document.getElementById("seltab")
    if (num.value.length == 0) {
       window.alert("Por favor digite um numero! ")
    } else {
        let n = Number(num.value)
        let openum = Number(numope.value)
        tab.innerHTML = ''
        for (c = 1; c <= openum; c++) {
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            item.value = `tab${c}`
            item.style.background ='black'
            item.style.color = 'red'
            item.style.width = '200px'
            item.style.padding = '5px 0px 0px 20px'
            tab.appendChild(item)
            
        }
    }


}


function carregarSub() {

    let emogiSub = document.getElementById("emogSub")
    emogiSub.innerHTML = `Tabuada de Subtração \u{2796}`
}

    

