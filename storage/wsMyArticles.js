let wsMyArticles = {
    showTitle(p1){
        return `
            <h2 class="pb-4 mb-4 fst-italic border-bottom">${p1}</h2>
        `
    },
    showArticules(p1){
        const data = p1.map((val,id)=>{
            if(val.table){
                return this.table(val)
            } else if(val.profesion) {
                return this.normal(val)
            } else if(val.date){
                return this.fecha(val)
            }
        });
        return data;  
    },
    fecha(val){
        return`
        <article class="blog-post">
                <h3 class="blog-post-title">${val.title}</h3>
                <p class="blog-post-meta">${val.date.year} by <a href="${val.date.href}" target="_blank">${val.date.by}</a></p>
                <p>${val.paragraph[0]}</p>
                <hr>
                <p>${val.paragraph[1]}</p>
                <h4>${val.subtitle}</h4>
                <p>${val.enunciado}</p>
                <blockquote class="blockquote">
                    <p>"${val.said}"</p>
                </blockquote>
                <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
                    show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
                    demonstration flowing, so be on the lookout for this exact same string of text.</p>
        </article>
        `
    },
    normal(val){
        return `
        <article class="blog-post">
            <h3 class="blog-post-title">${val.title}</h3>
            <p class="blog-post-meta">${val.profesion}</p>
            <p>${val.paragraph}</p>
        </article>
        `
    },
    table(val){
        let fila = val.table.map((tb,id)=>tb);
        return `
        <article class="blog-post">
            <h3 class="blog-post-title">${val.title}</h3>
            <table class="table">
                <thead>
                    <tr>
                        ${val.headTable.map((val,id)=> `<th>${val.topic}</th>`).join("")}
                    </tr>
                </thead>
                <tbody>
                        ${val.table.map((val,id)=> `
                        <tr>
                            <td>${val.year}</td> 
                            <td>${val.name}</td>
                            <td>${val.country}</td>
                            <td>${val.college}</td>
                        </tr>`
                        ).join("")}
                </tbody>
            </table>
        <article>
        `
    },
    showBotones(p1){
        return `
            <nav class="blog-pagination" aria-label="Pagination">
                ${p1.map((val,id)=> `<a class="btn btn-outline-primary" href="${val.href}">${val.name}</a>`)}
            </nav>
        `;
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyArticles[`${e.data.module}`](e.data.data));
})