export default{
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

    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend", `
            <a class="blog-header-logo text-dark" href="${this.title.href}">${this.title.name}</a>
        `);
    },

    listWomes(){
        let plantilla = "";
        this.womes.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}" target="_blank">${val.name}</a>`
        });
        document.querySelector("#womes").insertAdjacentHTML("beforeend", plantilla);
    }
}