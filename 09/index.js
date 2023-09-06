import { getListMovie } from "./ListMovie";

document.querySelector('#btn-load_posts').addEventListener('click', () => {
    getListMovie()
    .then(res => {
        console.log("cekkkk",res.data.results)

        const listData = document.querySelector('div.listdata');
        for (let i = 0; i < res.data.results.length; i++) {
            listData.innerHTML += `
            <div class="card">
        <img src="https://image.tmdb.org/t/p/original/${res.data.results[i].backdrop_path}" alt="" style="width: 100%;">
        <div class="container">
            <h4 id="namemovie">${res.data.results[i].title}</h4>
            <p id="keterangan">${res.data.results[i].overview}</p>
        </div>
    </div>`;
        }
    });
})