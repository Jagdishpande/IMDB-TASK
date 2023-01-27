
let imgBaseurl=`https://image.tmdb.org/t/p/w1280/`;

let movies=document.getElementById("movies")



let result="";

function rate(){
var rating=`${movieArr.vote_average}`


    movieArr.forEach(function(ele){
    
        result+=`	 <div class="col-md-3">
        <figure class="movieCard card ">
            <img src=${imgBaseurl}${ele.backdrop_path} alt="">
            <figcaption class="p-4 text-white">
                <div class="row">
                    <div class="col-10">
                        <h3>
                            ${ele.title}
                        </h3>
                    </div>
                    <div class="col-2">
                        <p>
                            ${ele.vote_average}
                        </p>
                    </div>
                    
                </div>
            </figcaption>
            <div class="overview">
                <h4>overview</h4>
                <p>
                    ${ele.overview}
                </p>
            </div>
        </figure>
    </div>
    `
    })
    
    movies.innerHTML=result;
}

rate()


