function verificar(){
    let qhoras= document.getElementById('txth')
    let vhoras= document.getElementById('txthv')
    let inss= document.getElementById('txtin')
    let res= document.getElementById('res')

    if(qhoras.value.length==0||vhoras.value.length==0|| inss.value.length==0){
        window.alert('Campo vazio')
    }else{
        let horasq= Number(qhoras.value)
        let horasv= Number(vhoras.value)
        let ins= Number(inss.value)

        let salbruto= horasv * horasq
        let totdes=(ins/100) * salbruto
        let saliquido= salbruto - totdes

        if(horasq> 180){
            res.innerHTML=('Valor maximo')
        }if(horasq<135){
            res.innerHTML=('Valor minimo')
        }if(horasv> 50){
            res.innerHTML=('Valor maximo')
        }if(horasv< 25){
            res.innerHTML=('Valor minimo')
        }if(ins>15){
            res.innerHTML=('Valor maximo')
        }if(ins< 5){
            res.innerHTML=('Valor minimo')
        }

        res.innerHTML+=(`<br>Salario bruto: ${salbruto}`)
        res.innerHTML+=(`<br>Total de descontos: ${totdes}`)
        res.innerHTML+=(`<br>Salario liquido: ${saliquido}`)

        if(saliquido> 10500){
            res.innerHTML+=(` Salario elevado`)
        }else if(saliquido> 6000){
            res.innerHTML+=(` Salario satisfatorio`)
        }else if(saliquido> 3000){
            res.innerHTML+=(` Salario moderado`)
        }else{
            res.innerHTML+=(` Salario insatisfatório`)
        }



            
        
    }
}