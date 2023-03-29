import config from "../storage/config.js";
export default{
    fragShow(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
        
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