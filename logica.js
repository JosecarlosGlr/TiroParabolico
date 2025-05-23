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
     angulo = parseFloat(document.getElementById('angulo').value);
    const velocidad = parseFloat(document.getElementById('velocidad').value);

    if (isNaN(angulo) || isNaN(velocidad)) {
        document.getElementById('resultado').textContent = "Por favor introduce valores numéricos válidos.";
        return;
    }
    else if ((angulo)<90 || (angulo)>0 || (velocidad)>0) {
        document.getElementById('resultado').textContent = "Por favor el angulo debe ser mayor de 0 y menor de 90º.";
        return;
    }
    else if ((velocidad)>0) {
        document.getElementById('resultado').textContent = "Por favor introduce una velocidad positiva";
        return;
    }
    const distancia = calculaDistancia(angulo, velocidad);
    document.getElementById('resultado').textContent = `La distancia es: ${distancia} metros.`;
}