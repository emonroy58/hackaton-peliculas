const objPelis=[];
let dataMovies;

const arrayPelis =['Get out','Psycho','The babadook','The cabinet of Dr. Caligari','The silence of the Lambs','Girls Trip','Zoolander','I Heart Huckabees','Tenacious D in The Pick of Destiny','Bridesmaids','Indiana Jones','Star Wars','Jumanji','Jurassic Park','Pirates of the Caribbean: The Curse of the Black Pearl','Mad Max: Fury Road','Metropolis','Gravity','War for the Planet of the Apes','Wall-E','Die Hard','Terminator 2: Judgment Day','The Dark Knight','Drive', 'E.T. The Extra-Terrestrial', 'Seven Samurai'];
//const arrayPelis =['Get out','Psycho','The babadook','The cabinet of Dr. Caligari',];
url = 'https://www.omdbapi.com/?t=';


  for (let i=0; i< arrayPelis.length; i++)
  {   
     let url_pelis = url+arrayPelis[i]+'&apikey=4c2bc917'
     fetch(url_pelis ) //lectura del archivo .json
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('data', JSON.stringify(data))
     // console.log (data); 
      objPelis.push(data);
      PrintMovies(objPelis)
    // const dataMovies =  objPelis;
    //getMovies();
     return objPelis;
      
    }) 
    //console.log (data); 
  
    .catch(err => (err))
  }


const radomBoton= document.getElementById("btnn");
const listRandom =document.getElementById("list-random");
function randMovies() {//imprime carousel

for(let j=0; j<objPelis.length; j++){
  let random = objPelis[Math.floor(Math.random()*objPelis.length)]
  let arrayRandom = [];
  arrayRandom.push(random); 
 
  console.log(random);
}

  for(let i in objPelis) {
       //    console.log(objPelis[i])
   let section = `
   <div class="card col-lg-3 col-md-6 col-sm-12">
         <div class="card-body bg-dark" style="width = 20rem;">
           <img src="${arrayRandom[i].Poster}" class="card-img-top" alt="${arrayRandom[i].Title}">
           <div class="card-body">
           <h5 id="product-name" class="card-title d-flex justify-content-center">${arrayRandom[i].Title}</h5>
           </div>
         </div> 
        </div>               
        `
    listRandom.insertAdjacentHTML("beforeend",section);
  }
  return listRandom;

  //console.log(listRandom);

}
radomBoton.addEventListener('click',randMovies)


const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const discover = document.getElementById("discover");
const carrousel = document.getElementById("carrousel");
const dropdownGenero = document.getElementsByClassName('dropdown-item'); //funcion filtro
const selectGenero = () => {
 for (let i = 0; i < dropdownGenero.length; i++) {
   dropdownGenero[i].addEventListener("click", () => {
     //console.log("hola")
     let generoId = dropdownGenero[i].id;
     title.innerHTML = "";
     subtitle.innerHTML = generoId;
     const arrayGeneroPeli = window.data.filtroGenero(objPelis, generoId);
     //console.log(arrayGenero)
     PrintMovies(arrayGeneroPeli);
     productWrapper.innerHTML = "";
     document.getElementById("subtitle").style.display = "block"
     document.getElementById("list-genero").style.display = "block";
     document.getElementById("carousel-genero").style.display = "none";
     return arrayGeneroPeli;
     //getMovies (arrayGeneroPeli)
})
 }}
 selectGenero()
 const dropdownLanguage = document.getElementsByClassName('dropdown-item Language');
 const selectPais = () => {
   for (let i = 0; i < dropdownLanguage.length; i++) {
     dropdownLanguage[i].addEventListener("click", () => {
       //console.log("hola")
       let paisId = dropdownLanguage[i].id;
       const arrayPaisPeli = window.data.filtroPais(objPelis, paisId);
       //console.log(arrayGenero)
       PrintMovies(arrayPaisPeli);
       productWrapper.innerHTML = "";
       document.getElementById("subtitle").style.display = "block"
       document.getElementById("list-genero").style.display = "block";
       document.getElementById("carousel-genero").style.display = "none";
       return arrayPaisPeli;
       //getMovies (arrayGeneroPeli)
 })
   }}
   selectPais()
 const productWrappGener = document.getElementById('list-genero');
   const PrintMovies = (objTitlePelis) => { //muestra peliculas por genero
     let viewMovie = '';
     for (let i in objTitlePelis) {
        viewMovie = viewMovie + `
        <div id="printMovies" class="card col-lg-3 col-md-6 col-sm-12">
         <div class="card-body bd-dark style="width = 20rem;">
           <img src="${objTitlePelis[i].Poster}" class="card-img-top" alt="${objTitlePelis[i].Title}">
           <div class="card-body">
           <h5 id="product-name" class="card-title d-flex justify-content-center">Title: ${objTitlePelis[i].Title}</h5>
           <h6 id="product-name" class="card-title d-flex justify-content-center">Genre: ${objTitlePelis[i].Genre}</h6>
           <h6 id="product-name" class="card-title d-flex justify-content-center">Year: ${objTitlePelis[i].Year}</h6>
           </div>
         </div>
        </div>
        </div>
        `
       }
     productWrappGener.innerHTML = viewMovie;
     return viewMovie;
   }
