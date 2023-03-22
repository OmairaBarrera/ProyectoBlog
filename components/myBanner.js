export default{
    image: "../img/imagenBanner.jpg",
    title: "Rompiendo con estereotipos de género",
    parragraph: "Mujeres que rompen estereotipos, que nos inspiran, para que cada día el potencial femenino sea cada vez más visible en la ciencia",
    btn:{
        name: "Continue Leyendo ...",
        href: "https://es.unesco.org/fieldoffice/montevideo/DerechoALaCiencia/GeneroCiencia",
    },

    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `
            url(${this.image})`;
    },
    showContenido(){
        document.querySelector("#contenidoBanner").insertAdjacentHTML("beforeend", `<h1 class="display-4 fst-italic">${this.title}</h1>
        <p class="lead my-3">${this.parragraph}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" target="_blank" class="text-white fw-bold">${this.btn.name}</a></p>`)
    }
}