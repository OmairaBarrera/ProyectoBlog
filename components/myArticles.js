import config from "../storage/config.js";
export default{
    fragShowArticle(){
        config.dataMyArticles();
        Object.assign(this, JSON.parse(localStorage.getItem("myArticles")));
        const ws = new Worker("storage/wsMyArticles.js", {type:"module"});
        let count= 0;
        let vari = 3;
        ws.postMessage({module:"showTitle", data: this.title});
        ws.postMessage({module:"showArticules", data: this.articles})
        ws.postMessage({module:"showBotones", data: this.nav})
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#contenedorArticulos").append(...doc.body.children);
            (vari-1==count) ? ws.terminate(): undefined;
            count++;
        });
    }
}
