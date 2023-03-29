export default{
    image: "../img/imagenBanner.jpg",
    info:{
        title: "Rompiendo con estereotipos de género",
        parragraph: "Mujeres que rompen estereotipos, que nos inspiran, para que cada día el potencial femenino sea cada vez más visible en la ciencia",
        btn:{
            name: "Continue Leyendo ...",
            href: "https://es.unesco.org/fieldoffice/montevideo/DerechoALaCiencia/GeneroCiencia",
        },
    },
    
    fragShowB(){
        const ws = new Worker("storage/wsMyBanner.js", {type:"module"});
        let count = 0;
        ws.postMessage({module:"showImage", data: this.image});
        ws.postMessage({module:"showContenido", data: this.info});
        let id = [".imgStyle", "#contenidoBanner"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): undefined;
            count++;
        });
    }
}