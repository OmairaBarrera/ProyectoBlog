export default{
    title: "CIENTIFICAS QUE HICIERON HISTORIA",
    articles: [
        {
            title: "Jane Goodall",
            profesion: "Etóloga",
            paragraph: "Goodall es conocida por sus estudios sobre la vida social y familiar de los chimpancés. Empezó a estudiar en la comunidad de chimpancés de Kasakela, en el parque nacional Gombe Stream, Tanzania, en 1960. Sin un trasfondo universitario que influenciara su investigación, Goodall observó cosas que las estrictas doctrinas científicas habrían pasado por alto. En vez de numerar a los chimpancés que observaba, les daba nombres, y notó que tenían personalidades únicas e individuales, una idea nada convencional para su tiempo"
        },
        {
            title: "Marie Tharp",
            profesion: "Cartógrafa",
            paragraph: "fue una cartógrafa oceanográfica y geóloga estadounidense quien, junto con Bruce Heezen, creó el primer mapa científico de todo el suelo oceánico. Su obra puso de manifiesto la existencia de la dorsal mesoatlántica y revolucionó la comprensión científica de la deriva continental."
        },
        {
            title: "Rosalind Franklin",
            profesion: "Química",
            paragraph: `fue una química y cristalógrafa británica cuyo trabajo fue fundamental para la comprensión de las estructuras moleculares del ADN (ácido desoxirribonucleico), el ARN (ácido ribonucleico), los virus, el carbón y el grafito. Aunque sus trabajos sobre el carbón y los virus fueron reconocidos durante su vida, su contribución al descubrimiento de la estructura del ADN pasó desapercibida. A causa de ello, ha sido calificada como "heroína agraviada", "heroína olvidada", "dama oscura del ADN", "icono feminista" y "la Sylvia Plath de la biología molecular"`
        },
        {
            title: "Vera Rubin",
            profesion: "Astrónoma",
            paragraph: "ue una astrónoma estadounidense, pionera en la medición de la rotación de las estrellas dentro de una galaxia.3​ Sus mediciones pusieron de manifiesto que las curvas de rotación galácticas se mantenían planas, lo que contradijo el modelo teórico y fue la evidencia más directa y robusta de la existencia de la materia oscura"
        },
        {
            title: "Ada Lovelace",
            Profesion: "Matemática",
            paragraph: "ue una matemática y escritora británica, célebre sobre todo por su trabajo acerca de la computadora mecánica de uso general de Charles Babbage, la denominada máquina analítica. Fue la primera en reconocer que la máquina tenía aplicaciones más allá del cálculo puro y en haber publicado lo que se reconoce hoy como el primer algoritmo destinado a ser procesado por una máquina, por lo que se la considera como la primera programadora de ordenadores"
        },
        {
            title: "Mary Anning",
            profesion: "Paleontóloga",
            paragraph: "fue la primera paleontóloga reconocida como tal. Además de ser paleontóloga, fue una coleccionista y comerciante de fósiles inglesa, conocida en todo el mundo por sus importantes hallazgos de los lechos marinos del período Jurásico en la localidad inglesa Lyme Regis donde vivía. Su trabajo científico contribuyó a que se dieran cambios fundamentales a principios del siglo xix en la manera de entender la vida prehistórica y la historia de la Tierra."
        },
        {
            title: "Helia Bravo Hollis",
            profesion: "Botánica",
            paragraph: "fue una científica y botánica mexicana, distinguida con los títulos de investigadora emérita y doctora honoris causa de la UNAM. Casi toda su carrera científica la desarrolló en el Instituto de Biología de la Universidad Nacional Autónoma de México. Fue hermana de la helmintóloga mexicana Margarita Bravo Hollis"
        },
        {
            title: "CIENTIFICAS QUE HAN GANADO UN NOBEL",
            headTable: [
                {
                    topic: `Año`,
                },
                {
                    topic: `Nombre`,
                },
                {
                    topic: `Pais de Origen`,
                },
                {
                    topic: `Universidad`,
                }
            ],
            table: [
                {
                    year: "1903",
                    name: "Marie Curie",
                    country: "Polonia",
                    college: "Universidad de Sorbona"
                },
                {
                    year: "1963",
                    name: "Maria Goeppert-Mayer",
                    country: "Estados Unidos",
                    college: "Universidad de Gotinga"
                },
                {
                    year: "2018",
                    name: "Donna Strickland",
                    country: "Canada",
                    college: "Universidad MacMaster"
                },
                {
                    year: "2020",
                    name: "Andrea M. Ghez",
                    country: "Estados Unidos",
                    college: "Instituto Tecnologico de Massachusetts"
                },

                {
                    year: "1911",
                    name: "Marie Curie",
                    country: "Polonia",
                    college: "Universidad La Sorbona"
                },
                {
                    year: "1935",
                    name: "Irene Joliot-Curie",
                    country: "Francia",
                    college: "Universidad de Paris"
                },
                {
                    year: "1964",
                    name: "Dorothy Crowfoot Hodgkin",
                    country: "Reino Unido",
                    college: "Universidad de Oxford"
                },
                {
                    year: "2009",
                    name: "Ada Yonath",
                    country: "Israel",
                    college: "Instituto Karolinska"
                },
                {
                    year: "2018",
                    name: "Frances Arnold",
                    country: "Estados Unidos",
                    college: "Princeton University"
                },
                {
                    year: "2020",
                    name: "Emmanuelle Charpentier",
                    country: "Francia",
                    college: "Universidad Pierre y Marie Curie"
                },
                {
                    year: "2020",
                    name: "Jennifer Doudna",
                    country: "Estados Unidos",
                    college: "Escuela Medica de Harvard"
                },
            ],
        }
    ],
    nav:[
        {
            name:"Older",
            href:""
        },
        {
            name:"Newer",
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
            return((val.table)?this.table(val):this.normal(val));
        });
        document.querySelector("#contenedorArticulos").insertAdjacentHTML("beforeend", data.join(""));   
    },
    normal(val){
        return `
            <h3 class="blog-post-title">${val.title}</h3>
            <p class="blog-post-meta">${val.profesion}</p>
            <p>${val.paragraph}</p>
        `
    },
    table(val){
        let fila = val.table.map((tb,id)=>tb);
        return `
            <h3 class="blog-post-title">${val.title}</h3>
            <table class="table">
                <thead>
                    <tr>
                        ${val.headTable.map((val,id)=> `<th>${val.topic}</th>`).join("")}
                    </tr>
                </thead>
                <tbody>
                    
                        ${val.table.map((val,id)=> `
                        <tr>
                            <td>${val.year}</td> 
                            <td>${val.name}</td>
                            <td>${val.country}</td>
                            <td>${val.college}</td>
                        </tr>`
                        ).join("")}
                </tbody>
            </table>
        `
    },
    showBotones(){
        document.querySelector("#contenedorArticulos").insertAdjacentHTML("beforeend", `
            <nav class="blog-pagination" aria-label="Pagination">
                <a class="btn btn-outline-primary" href="#">Older</a>
            </nav>
        `)
    }
}
