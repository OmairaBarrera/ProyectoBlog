export default{
    title: "Mujeres Empoderadas",
    articles: [
        {
            title: "Sample blog post",
            date: {
                name:"January 1, 2021 by",
                by:"Mark",
                href:""
            },
            paragraph: "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basictypography, lists, tables, images, code, and more are all supported as expected."
        },
        {
            title: "",
            date: "",
            paragraph: "",
            subcontenido:[
                {
                    subtitule: "",
                    paragraph: "",
                }
            ]
        }
    ],
    nav:[
        {
            name:"",
            href:""
        },
        {
            name:"",
            href:""
        },
    ],

    showTitle(){
        document.querySelector("#contenedorArticulos").insertAdjacentHTML("beforeend", `
            <h2 class="pb-4 mb-4 fst-italic border-bottom">${this.title}</h2>
        `)
    },
    showArticules(){
        const data = this.articles.map((val,id)=>{
            return((val.subcontenido)?this.contenido(val):this.normal(val));
        });
        document.querySelector("#contenedorArticulos").insertAdjacentHTML("beforeend", data.join(""));   
    },
    normal(val){
        return `
            <h3 class="blog-post-title">${val.title}</h3>
            <p class="blog-post-meta">${val.date.name}<a href="${val.date.href}">${val.date.by}</a></p>
            <p>${val.paragraph}</p>
        `
    },
    contenido(val){
        console.log("contenido");
    }
}