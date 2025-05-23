function gradosARadianes(grados){
    let radianes=(Math.PI/180)*grados;
    return radianes;
}
function calculaDistancia(angulo, velIni){
    let angulorad=gradosARadianes(angulo);
    let distancia=(Math.pow(velIni,2)*Math.sin(2*angulorad))/9.81;
    return distancia;
}
function calcular() {
    document.getElementById('resultado').value = " ";
    const angulo = parseFloat(document.getElementById('angulo').value);
    const velocidad = parseFloat(document.getElementById('velIni').value);
    
    if (isNaN(angulo) || isNaN(velocidad)) {
        document.getElementById('resultado').value = "Por favor introduce valores numéricos válidos.";
        return;
    }
    if((velocidad)<0 ||(angulo)>90 || (angulo)<0) {
        document.getElementById('resultado').value = "Por favor introduce valores correctos";
        return;
    }
    if((velocidad)<0) {
        document.getElementById('resultado').value = "Por favor introduce una velocidad positiva";
        return;
    }
    if ((angulo)>90 || (angulo)<0) {
        document.getElementById('resultado').value = "Por favor el angulo debe ser mayor de 0 y menor de 90º.";
        return;
    }
    const distancia = calculaDistancia(angulo, velocidad);
    document.getElementById('resultado').value= `La distancia es: ${distancia.toFixed(2)} metros.`;
}