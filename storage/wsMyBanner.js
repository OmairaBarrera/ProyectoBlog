let wsMyBanner = {
    showImage(p1){
        return `url(${p1.image})`;
    },
    showContenido(p1){
        return `<h1 class="display-4 fst-italic">${p1.title}</h1>
        <p class="lead my-3">${p1.parragraph}</p>
        <p class="lead mb-0"><a href="${p1.btn.href}" target="_blank" class="text-white fw-bold">${p1.btn.name}</a></p>`;
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
})