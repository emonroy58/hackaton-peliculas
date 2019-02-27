const objPelis=[];
//let i=0;
const arrayPelis =['Get out','Psycho','The babadook','The cabinet of Dr. Caligari'];
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
    console.log(objPelis);
    return data;
    
  }) 
  //console.log (data); 

  .catch(err => (err))
}



function getMovies() {
    const stringMovies = JSON.parse(localStorage.getItem('data'));
    console.log(stringPokemon);
    objPelis.push(stringMovies);
    console.log(objPelis);
    return objPelis;
  }