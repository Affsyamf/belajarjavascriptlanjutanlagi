// $('.search-btn').on('click', function(){
//     $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=540941ba&S=' + $('.input-keyword').val(),
//     success: results => {
//         const movies = results.Search;
//         let cards = '';
//         movies.forEach(m => {
//             cards += showcards(m);
//         });
//         $('.movie-container').html(cards);



//         //tombol di klik
//         $('.detail-btn').on('click', function() {
//             $.ajax({
//                 url: 'http://www.omdbapi.com/?apikey=540941ba&i=' + $(this).data('imdbid'),
//                 success: m => {
//                     const movieDetail = showMovieDetail(m);

//         $('.modal-body').html(movieDetail)
//                 },
//                 error: (e) => {
//                     console.log(e.responseText)
//                 }
//             })
//         });


//     },
//     error: (e) => {
//         console.log(e.responseText)
//     }
// });
// })




//fetch
// const searchButton = document.querySelector('.search-btn')
// searchButton.addEventListener('click', function(){
//     const inputKeyword = document.querySelector('.input-keyword')
//     fetch('http://www.omdbapi.com/?apikey=540941ba&S=' + inputKeyword.value)
//      .then(response => response.json())
//      .then(response => {
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showcards(m))
//         const movieContainer = document.querySelector('.movie-container') 
//         movieContainer.innerHTML = cards;



//         //ketika tombol detail klik
//         const detailButton = document.querySelectorAll('.detail-btn');
//         detailButton.forEach(btn => {
//             btn.addEventListener('click', function(){
//                 const imdbid = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=540941ba&i=' + imdbid) 
//                 .then(response => response.json())
//                 .then(m => {
//                     const movieDetail = showMovieDetail(m);
//                     const modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = movieDetail;
//                 })
//             })
//         })

//     })

// })




//menggunakan fetch refactor async await

const searchButton = document.querySelector('.search-btn')
searchButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword')
   const movies = await getMovies(inputKeyword.value)
   updateUI(movies)
})


//event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('detail-btn')) {
        const imdbid = e.target.dataset.imdbid
        const movieDetail = await getMovieDetail(imdbid)
        updateUIDetail(movieDetail)
    }
})

function getMovieDetail (imdbid) {
  return  fetch('http://www.omdbapi.com/?apikey=540941ba&i=' + imdbid) 
    .then(response => response.json())
    .then(m => m)                   
}

function updateUIDetail (m) {
     const movieDetail = showMovieDetail(m);
     const modalBody = document.querySelector('.modal-body');
     modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=540941ba&S=' + keyword)
     .then(response => response.json())
     .then(response => response.Search)
       
}

function updateUI (movies) {
     let cards = '';
     movies.forEach(m => cards += showcards(m))
     const movieContainer = document.querySelector('.movie-container') 
     movieContainer.innerHTML = cards;
}

function showcards (m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary detail-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid=${m.imdbID}>Show Details</a>
                    </div>
                    </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid" alt="">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
                <li class="list-group-item"><h4>Actors : </h4>${m.Actors}</li>
                <li class="list-group-item"><h4><strong>Genre : </strong> </h4>${m.Genre}</li>
                <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                </ul>
                </div>
            </div>
        </div>`;
}