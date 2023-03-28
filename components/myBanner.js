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
    
    /* showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `
            url(${this.image})`;
    },
    showContenido(){
        document.querySelector("#contenidoBanner").insertAdjacentHTML("beforeend", `<h1 class="display-4 fst-italic">${this.title}</h1>
        <p class="lead my-3">${this.parragraph}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" target="_blank" class="text-white fw-bold">${this.btn.name}</a></p>`)
    } */

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