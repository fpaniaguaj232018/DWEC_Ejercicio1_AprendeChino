function inicializar() {
        var words= new Array();
        words.push("");//Hola
        words.push("再見");//Adios
        words.push("啤酒");//Cerveza
        words.push("水");//Agua
        words.push("火");//Fuego

        var palabras = [];
        palabras[0]="Hola";
        palabras[1]="Adios";
        palabras[2]="Cerveza";
        palabras[3]="Agua";
        palabras[4]="Fuego";

        let nAciertos=0;
        let nFallos=0;

        while(nAciertos<5){
            //Generar un número aleatorio entre 0 y n
            var pos=Math.random()*words.length;
            pos = Math.floor(pos);

            //Obtener la respuesta
            var respuesta=prompt(words[pos]);
            if (respuesta==palabras[pos]){
                nAciertos++;
            } else {
                nFallos++;
            }
            console.log("Aciertos:"+ nAciertos);
            console.log("Fallos:" + nFallos);
        }
}
