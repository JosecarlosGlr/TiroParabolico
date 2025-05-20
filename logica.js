function calculaDistancia(angulo, velIni){
    let distancia=(Math.pow(velIni)*Math.sin(2*angulo))/9.81;
    return distancia;
}

function gradosARadianes(grados){
    let radianes=(Math.PI/180)*grados;
    return radianes;
}