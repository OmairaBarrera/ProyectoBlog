import config from "../storage/config.js";
export default{
    fragShowPost(){
        config.dataMyPost();
        Object.assign(this, JSON.parse(localStorage.getItem("myPost")));
        const ws = new Worker("storage/wsMyPost.js", {type:"module"});
        ws.postMessage({module:"showPost", data: this.post});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#post").append(...doc.body.children);
            ws.terminate();
        });
    }
}