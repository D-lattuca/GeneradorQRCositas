const formulario = document.getElementById("formulario");
const QrModel = document.getElementById("QrModel");

const QR = new QRCode(QrModel);


class Cliente{
    constructor(nombre){
        this.nombre = nombre
    }
};
 

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    QR.makeCode(formulario.nombre.value)
});

