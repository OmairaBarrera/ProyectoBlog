export default{
    title:{
        name: "Grandes Mujeres de la Ciencia",
        href: "#"
    },
    womes: [
        {
            name: 'Jane Goodall',
            href: '#'
        },
        {
            name: 'Rosalind Franklin',
            href: '#'
        },
        {
            name: 'Vera Rubin',
            href: '#'
        },
        {
            name: 'Mary Anning',
            href: '#'
        },
        {
            name: 'Marie Tharp',
            href: '#'
        },
        {
            name: 'Ada Lovelace',
            href: '#'
        },
        {
            name: 'Helia Bravo',
            href: '#'
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
            plantilla += `<a class="p-2 link-secondary" href="#">${val.name}</a>`
        });
        document.querySelector("#womes").insertAdjacentHTML("beforeend", plantilla);
    }
}