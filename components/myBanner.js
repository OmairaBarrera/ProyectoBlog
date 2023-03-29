import config from "../storage/config.js";
export default{
    fragShowB(){
        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));

        const ws = new Worker("storage/wsMyBanner.js", {type:"module"});
        let count = 0;
        ws.postMessage({module:"showImage", data: this.image});
        ws.postMessage({module:"showContenido", data: this.info});
        let id = [".imgStyle", "#contenidoBanner"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): undefined;
            count++;
        });
    }
}