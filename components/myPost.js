export default{
    post:[
        {
            article: "INTERNACIONAL",
            title: "Dia de celebracion",
            date: "Feb 11",
            parragrah: `Día Internacional de la Mujer y la Niña en la Ciencia`,
            image: "/img/post1.jpg",
            btn:{
                name: "Continue reading",
                href: "https://elpais.com/especiales/2018/mujeres-de-la-ciencia/"
            },
        },
        {
            article: "RECOMENDADOS",
            title: "No more Matildas",
            date: "2021",
            parragrah: `#Nomorematildas es una asociación que surge de la campaña creada con AMIT que busca ...`,
            image: "/img/post2.jpg",
            btn:{
                name: "Continue reading",
                href: "https://www.nomorematildas.com/"
            },
        },
        {
            article: "LATINOAMERICA",
            title: "Ciencia y tecnologia",
            date: "2021",
            parragrah: `Dar a las mujeres igualdad de oportunidades para desarrollar y prosperar en carreras STEM ...`,
            image: "/img/post3.jpg",
            btn:{
                name: "Continue reading",
                href: "#"
            },
        },
        {
            article: "RECOMENDADOS",
            title: "Red Colombiana",
            date: "2019",
            parragrah: `Motivación de las niñas en las ciencias, políticas de género en ciencias empoderamiento de científicas ...`,
            image: "/img/post4.jpg",
            btn:{
                name: "Continue reading",
                href: "https://www.redcolombianamujerescientificas.org/"
            },
        },
        {
            article: "INTERNACIONAL",
            title: "Estadisticas",
            date: "2021",
            parragrah: `el informe Women in Science  de la Organización sólo el 30% de investigadores y científicos ...`,
            image: "/img/post5.jpg",
            btn:{
                name: "Continue reading",
                href: "https://cods.uniandes.edu.co/dia-internacional-mujer-nina-ods-cifras/#:~:text=Solo%20el%206%25%20de%20los,han%20sido%20otorgados%20a%20hombres."
            },
        },
    ],

    showPost(){
        this.post.forEach((val,id)=>{
            document.querySelector('#post').insertAdjacentHTML("beforeend",`
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <!--Contenido Card-->
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                        <h3 class="mb-0">${val.title}</h3>
                        <div class="mb-1 text-muted">${val.date}</div>
                        <p class="card-text mb-auto">${val.parragrah}</p>
                        <a href="${val.btn.href}" target="_blank" class="stretched-link">${val.btn.name}</a>
                    </div>
                    <!--Imagen Card-->
                    <div class="col-auto d-none d-lg-block">
                        <img src="${val.image}" class="responsiveImg">
                    </div>
                    </div>
                </div>
            `)
        })
    },
}