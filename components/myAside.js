export default{
    nav:[
        {
            title: "Una Mirada Femenina",
            parragrah: "Las mujeres deben luchar por desigualdades sistematicas basadas en el genero, y en gran medida siguen siendo invisibles. Esto crea la necesidad de que se las escuche y se comuniquen sus experiencias y prespectivas unicas.",
        },
        {
            title: "LIBROS",
            link: [
                {
                    name:"Mujeres de ciencia",
                    href: "https://www.buscalibre.com.co/libro-mujeres-de-ciencia/9788491873334/p/51434165"
                },
                {
                    name:"Mujeres olvidadas : las científicas",
                    href: "https://www.buscalibre.com.co/libro-mujeres-olvidadas-las-cientificas-libros-singulares/9788441542143/p/52358812"
                },
                {
                    name:"Las Mentiras Científicas Sobre las Mujeres",
                    href: "https://www.buscalibre.com.co/libro-las-mentiras-cientificas-sobre-las-mujeres/9788490972656/p/48005610"
                },
                {
                    name:"Tierra de Mujeres",
                    href: "https://www.buscalibre.com.co/libro-tierra-de-mujeres/9789569949890/p/53321725"
                },
                {
                    name:"Visionarias. Inventoras Desconocidas",
                    href: "https://www.buscalibre.com.co/libro-visionarias-inventoras-desconocidas/9788416670888/p/52360402"
                },
                {
                    name:"Las chicas son de ciencias",
                    href: "https://www.buscalibre.com.co/libro-las-chicas-son-de-ciencias/9788490438824/p/49582303"
                }
            ],
        },
        {
            title: "DOCUMENTALES",
            link: [
                {
                    name:"Efecto Matilda",
                    href: "https://youtu.be/Fx0ztzf-2V0"
                },
                {
                    name:"Mi mensaje a las niñas",
                    href: "https://www.youtube.com/watch?v=HnGKvC4iDG0&ab_channel=AprendemosJuntos2030"
                },
                {
                    name:"La brecha de genero",
                    href: "https://www.youtube.com/watch?v=i7juz-U5GAk&ab_channel=FECYTciencia"
                },
                {
                    name:"Genero en las STEM",
                    href: "https://www.youtube.com/watch?v=2G80ak9bZMw&ab_channel=TEDxTalks"
                }
            ],
        },
    ],

    showAside(){
        const data = this.nav.map((val,id)=>{
            return((val.link)?this.list(val):this.cards(val));
        });
        document.querySelector("#contenidoAside").insertAdjacentHTML("beforeend", data.join(""));
    },
    cards(val){
        return `
            <div class="p-4 mb-3 bg-light rounded">
                <h4 class="fst-italic">${val.title}</h4>
                <p class="mb-0">${val.parragrah}</p>
            </div>
        `;
    },
    list(val){
        return `
            <div class="p-4">
                <h4 class="fst-italic">${val.title}</h4>
                <ol class="list-unstyled">
                    ${val.link.map((val,id)=> `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
                </ol>
            </div>
        `;
    }
}