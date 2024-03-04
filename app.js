const Encriptar = document.querySelector(".encriptar");

const Encriptado = document.querySelector(".desencriptar");

function btencriptar(){
    const textoEncriptado = encriptar(Encriptar.value);
    Encriptado.value = textoEncriptado;
    Encriptar.value = "";
    Encriptado.style.backgroundImage = "none";
}

function encriptar(StringEncriptada){

let codigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
StringEncriptada = StringEncriptada.toLowerCase();

for (let i = 0; i < codigo.length; i++){
    if(StringEncriptada.includes (codigo[i][0])){

        StringEncriptada = StringEncriptada.replaceAll(codigo[i][0], codigo[i][1]);
    }

}
return StringEncriptada;
}

function btDesencriptar(){
    const textoEncriptado = desencriptar(Encriptar.value);
    Encriptado.value = textoEncriptado;
    Encriptar.value = "";
}

function desencriptar(StringDesencriptada){

    let codigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    StringDesencriptada = StringDesencriptada.toLowerCase();
    
    for (let i = 0; i < codigo.length; i++){
        if(StringDesencriptada.includes (codigo[i][1])){
    
            StringDesencriptada = StringDesencriptada.replaceAll(codigo[i][1], codigo[i][0]);
        }
    
    }
    return StringDesencriptada;
    }

    function bt_copiar(){
        let texto = document.getElementById("copia");

        let copiatexto = document.getElementById("copia") 
        copiatexto.select();

        navigator.clipboard.writeText(copiatexto.value);

        swal({
            title: "¡COPIADO!",
            text: "Texto copiado al portapapeles",
            timer: 2000

        });


    reset()
    }

    function reset() {
        let desencriptar = document.querySelector(".desencriptar");
        desencriptar.value = "";

    }


    








    

