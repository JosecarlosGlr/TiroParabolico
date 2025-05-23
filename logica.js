function gradosARadianes(grados){
    let radianes=(Math.PI/180)*grados;
    return radianes;
}
function calculaDistancia(angulo, velIni){
    let angulorad=gradosARadianes(angulo);
    let distancia=(Math.pow(velIni,2)*Math.sin(2*angulorad))/9.81;
    return distancia;
}