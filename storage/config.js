export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
            title:{
                name: "Grandes Mujeres de la Ciencia",
                href: "#"
            },
            womes: [
                {
                    name: 'Jane Goodall',
                    href: 'https://es.wikipedia.org/wiki/Jane_Goodall'
                },
                {
                    name: 'Rosalind Franklin',
                    href: 'https://es.wikipedia.org/wiki/Rosalind_Franklin'
                },
                {
                    name: 'Vera Rubin',
                    href: 'https://es.wikipedia.org/wiki/Vera_Rubin'
                },
                {
                    name: 'Mary Anning',
                    href: 'https://es.wikipedia.org/wiki/Mary_Anning'
                },
                {
                    name: 'Marie Tharp',
                    href: 'https://es.wikipedia.org/wiki/Marie_Tharp'
                },
                {
                    name: 'Ada Lovelace',
                    href: 'https://es.wikipedia.org/wiki/Ada_Lovelace'
                },
                {
                    name: 'Helia Bravo',
                    href: 'https://es.wikipedia.org/wiki/Helia_Bravo_Hollis'
                },
            ],
        }))
    },
    dataMyBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            image: "../img/imagenBanner.jpg",
            info:{
                title: "Rompiendo con estereotipos de género",
                parragraph: "Mujeres que rompen estereotipos, que nos inspiran, para que cada día el potencial femenino sea cada vez más visible en la ciencia",
                btn:{
                    name: "Continue Leyendo ...",
                    href: "https://es.unesco.org/fieldoffice/montevideo/DerechoALaCiencia/GeneroCiencia",
                }
            },
        }))
    },
    dataMyPost(){
        localStorage.setItem("myPost", JSON.stringify({
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
        }))
    },
    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
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
        }))
    },
    dataMyArticles(){
        localStorage.setItem("myArticles", JSON.stringify({
            title: "CIENTIFICAS QUE HICIERON HISTORIA",
            articles: [
                {
                    title:"Antigüedad",
                    date: {
                        year: "11 de febrero de 2019",
                        href: "https://hipertextual.com/2019/02/mujer-historia-ciencia",
                        by: "Azucena Martín"
                    },
                    paragraph: ["La primer mujer científica de la que hay registros fue la médica egipcia Merit Ptah De hecho, hay que mirar precisamente a esta época para encontrar el nombre de la primera mujer científica de la que existen registros: Merit Ptah. Vivió aproximadamente en 2.700 antes de Cristo, en el Antiguo Egipto.", "Más tarde, las mujeres empezaron a destacar también en otras disciplinas, como las matemáticas, la astronomía o la química. En la primera categoría destacó en el siglo VI antes de Cristo la Escuela Pitagórica, a la que podían asistir tanto hombres como mujeres."],
                    subtitle: "Cuándo se pregunta por mujeres científicas",
                    enunciado: "La mitad de la población no puede identificar a ninguna mujer famosa por su contribución al mundo de la ciencia, la UNESCO y la corporacion corporativa recalcan que:",
                    said: "Los estereotipos ocultan una parte importante de la historia científica y perpetúan la desigualdad de género en el acceso a estos campos de estudio y carreras. No podemos permitir privarnos del talento de la mitad de la humanidad: las mujeres hacen avanzar la ciencia y la ciencia hace avanzar al mundo."
                },
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
                    href:"#"
                }
            ],
        }))
    }
}