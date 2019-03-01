window.data = {
    filtroGenero: (generoId, objPelis) => {
        const filtroporGenero = generoId.filter(generoId =>  generoId.Genre.includes(objPelis));
        //console.log(generoId);
              //console.log(filtroporGenero);
        return filtroporGenero
    },

    filtroPais: (paisId, objPelis) => {
        const filtroporPais = paisId.filter(paisId =>  paisId.Language.includes(objPelis));
        console.log(paisId);
            console.log(filtroporPais);
        return filtroporPais
    },
 
 }
