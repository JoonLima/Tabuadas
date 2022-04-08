function tabuada(){
    let numero = document.getElementById('txtnum')
    let select = document.getElementById('select')
    


    if(numero.value.length == 0){

        alert('Digite um número.')

    } else {

        let n = Number(numero.value)
        select.innerHTML = ''
        for(let i = 1; i <= 10; i++){

            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            select.appendChild(item)
        }
    }

    


}