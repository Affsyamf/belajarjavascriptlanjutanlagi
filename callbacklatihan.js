$('.search-btn').on('click', function(){
    $.ajax({
    url: 'http://www.omdbapi.com/?apikey=540941ba&S=' + $('.input-keyword').val(),
    success: results => {
        const movies = results.Search;
        let cards = '';
        movies.forEach(m => {
            cards += showcards(m);
        });
        $('.movie-container').html(cards);

        //tombol di klik
        $('.detail-btn').on('click', function() {
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=540941ba&i=' + $(this).data('imdbid'),
                success: m => {
                    const movieDetail = showMovieDetail(m);

        $('.modal-body').html(movieDetail)
                },
                error: (e) => {
                    console.log(e.responseText)
                }
            })
        });


    },
    error: (e) => {
        console.log(e.responseText)
    }
});
})




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