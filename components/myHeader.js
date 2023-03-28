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

    fragShow(){
        const ws = new Worker("storage/wsMyHeader.js", {type:"module"});
        let count = 0;
        ws.postMessage({module:"listTitle", data: this.title});
        ws.postMessage({module:"listWomes", data: this.womes});
        let id = ["#title", "#womes"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): undefined;
            count++;
        });
    }
}