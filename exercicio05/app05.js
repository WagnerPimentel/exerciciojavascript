function converter(){
    let metros, centimetros
    metros = document.getElementById("metros").value
    centimetros = (parseFloat(metros)) * 100
    document.getElementById("resultado").innerText = "O valor digitado em metros, são " + centimetros + " centímetros" 
}