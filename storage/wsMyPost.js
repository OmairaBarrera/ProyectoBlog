let wsMyPost = {
    showPost(p1){
        let cards = "";
        p1.forEach((val,id)=>{
            cards += `
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <!--Contenido Card-->
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                        <h3 class="mb-0">${val.title}</h3>
                        <div class="mb-1 text-muted">${val.date}</div>
                        <p class="card-text mb-auto">${val.parragrah.substr(0,88)}...</p>
                        <a href="${val.btn.href}" target="_blank" class="stretched-link">${val.btn.name}</a>
                    </div>
                    <!--Imagen Card-->
                    <div class="col-auto d-none d-lg-block">
                        <img src="${val.image}" class="responsiveImg">
                    </div>
                    </div>
                </div>  `
        });
        return cards;
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyPost[`${e.data.module}`](e.data.data));
})