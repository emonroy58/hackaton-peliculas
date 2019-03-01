window.data = {
    filtroGenero: (generoId, objPelis) => {
        const filtroporGenero = generoId.filter(generoId =>  generoId.Genre.includes(objPelis));
        //console.log(generoId);
              console.log(filtroporGenero);
        return filtroporGenero
    },
 
 }