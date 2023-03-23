export default{
    nav:[
        {
            title: "About",
            parragrah: "Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.",
        },
        {
            title: "About",
            parragrah: "Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.",
        },
        {
            title: "About",
            link: [
                {
                    name:"desencadenamiento",
                    href: ""
                },
                {
                    name:"desencadenamiento",
                    href: ""
                },
                {
                    name:"desencadenamiento",
                    href: ""
                }
            ],
        },
        {
            title: "About",
            parragrah: "Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.",
        },
        {
            title: "About",
            link: [
                {
                    name:"desencadenamiento",
                    href: ""
                },
                {
                    name:"desencadenamiento",
                    href: ""
                },
                {
                    name:"desencadenamiento",
                    href: ""
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