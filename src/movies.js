const objTitlePelis=[];
//let i=0;
const titlePelis ='Get out';
const url = 'http://www.omdbapi.com/?t=';


const searchMovie = document.getElementById('tite-mov');
const productWrapper = document.getElementById('list-movies');

const viewMovies = () => { //muestra pokemon por tipo   
    search = searchMovie.value
    let viewMovie = '';
    for (let i in objTitlePelis) {
      //console.log('Tipo Poekemon: ',pokemon);
      viewMovie = viewMovie + `  
        
          <div class="card col-lg-3 col-md-6 col-sm-12">
           <div class="card-body bg-dark" style="width = 20rem;">
             <img src="${objTitlePelis[i].Poster}" class="card-img-top" alt="${objTitlePelis[i].Title}">
             <div class="card-body">
             <h5 id="product-name" class="card-title d-flex justify-content-center">${objTitlePelis[i].Title}</h5>
             </div>
           </div> 
          </div>               
          `
          }
              
    productWrapper.innerHTML = viewMovie;
    return viewMovie;
  }
  searchMovie.addEventListener('click', viewMovies); //fin muestreo de tarjetas











   let url_pelis = url+titlePelis+'&apikey=4c2bc917'
   fetch(url_pelis ) //lectura del archivo .json
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('data', JSON.stringify(data))
   // console.log (data); 
    objTitlePelis.push(data);
    console.log(objTitlePelis);
    return data;
    
  }) 
  //console.log (data); 

  .catch(err => (err))


