const objPelis=[];
//let i=0;
const arrayPelis =['Get out','Psycho','The babadook','The cabinet of Dr. Caligari','The silence of the Lambs','Girls Trip','Zoolander','I Heart Huckabees','Tenacious D in The Pick of Destiny','Bridesmaids','Indiana Jones','Star Wars','Jumanji','Jurassic Park','Pirates of the Caribbean: The Curse of the Black Pearl','Mad Max: Fury Road','Metropolis','Gravity','War for the Planet of the Apes','Wall-E','Die Hard','Terminator 2: Judgment Day','The Dark Knight','Drive', 'E.T. The Extra-Terrestrial', 'Seven Samurai'];
url = 'http://www.omdbapi.com/?t=';





for (let i=0; i< arrayPelis.length; i++)
{   
   let url_pelis = url+arrayPelis[i]+'&apikey=4c2bc917'
   fetch(url_pelis ) //lectura del archivo .json
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('data', JSON.stringify(data))
   // console.log (data); 
    objPelis.push(data);
    //console.log(objPelis);
    return data;
    
  }) 
  //console.log (data); 

  .catch(err => (err))
}

const dropdownGenero = document.getElementsByClassName('dropdown-item');

const selectGenero = () => {
  const arrayGenero = objPelis;
  for (let i = 0; i < dropdownGenero.length; i++) {
    dropdownGenero[i].addEventListener("click", () => {
      //console.log("hola")
      let generoId = dropdownGenero[i].id;
      const arrayGeneroPeli = window.data.filtroGenero(objPelis, generoId);
      //console.log(arrayGenero)
      return arrayGeneroPeli;
      
      //getMovies (arrayGeneroPeli)
})

  }}
  selectGenero()

  // function getMovies(objectPelis) {
  //   //const stringMovies = JSON.parse(localStorage.getItem('data'));
  //   const sectionOne = firstPage;
  //   sectionOne.innerHTML='';
  //   objectPelis.forEach( element => {
 
  //     let section = `
  //     <div class="nameList">
  //        <div id="${element.Title}"class="rolPersonajes">
  //        <img class="splashPresentation" src="${element.Poster}">
  //        </div>
  //     </div>
 
  //     `
  //     firstPage.insertAdjacentHTML("beforeend",section);
  //     //console.log(firstPage)
  //   })
  //   for(let i=0; i<cardSection.length; i++){
  //     cardSection[i].addEventListener('click', ()=>{
  //       //console.log("Casi funciono")
  //       let movieId= cardSection.title;
  //       const elementMovie= window.objPelis.selectCard(movieId, )
  //     })
  //   }
  // }