let  objTitlePelis=[];
//let i=0;
 
const searchMovie = document.getElementById("src-title");
const titleMov = document.getElementById("title-mov");
function SearchData(){    
    const titlePelis = searchMovie.value;
    const url = `https://www.omdbapi.com/?apikey=4c2bc917&s=${titlePelis}`;
    fetch(url) //lectura del archivo .json
    .then(response => response.json())
    .then(data => {
     const dataSearch = data.Search;
     objTitlePelis.push(dataSearch);  
      viewMovies(objTitlePelis);
    }) 
  
   .catch(err => (err)) 
    
}
titleMov.addEventListener('click',SearchData);



const productWrapper = document.getElementById('list-movies');
const viewMovies = (objTitlePelis) => { //muestra peliculas de acuerdo a la busqueda por coincidencia   
    let data=  objTitlePelis[0];
    let viewMovie = '';

    data.forEach(element => {
        viewMovie += `          
        <div class="card col-lg-3 col-md-6 col-sm-12">
         <div class="card-body bg-dark" style="width = 20rem;">
           <img src="${element.Poster}" class="card-img-top" alt="${element.Title}">
           <div class="card-body">
           <h5 id="product-name" class="card-title d-flex justify-content-center">${element.Title}</h5>
           </div>
         </div> 
        </div>               
        `
    productWrapper.insertAdjacentHTML('beforeend', viewMovie);

    });
 
    return viewMovie;
  }


  



 
 



 


