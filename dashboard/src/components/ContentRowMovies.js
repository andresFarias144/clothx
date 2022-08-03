import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';



function ContentRowMovies() {

    const [totalDeProductos, setTotalDeProductos] = useState([]);

    const [totalCategorias, setTotalCategorias] = useState([]);

    const [totalDeUsuarios, setTotalDeUsuarios] = useState([]);

    

    useEffect(() => {
        fetch('/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(response => {
                let productos = response.count
                let categories = response.categories.length
                setTotalDeProductos(productos)
                setTotalCategorias(categories)
            })

            .catch(error => console.log(error))



        fetch('/api/users')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(response => {
                let users = response.count
                setTotalDeUsuarios(users)
                
            })
            .catch(error => console.log(error))
    }, [])


    console.log(totalDeProductos);
    console.log(totalCategorias);
    console.log(totalDeUsuarios);

  


    /* <!-- Movies in DB --> */

    let productsInDb = {
        title: 'Total de productos',
        color: 'primary',
        cuantity: totalDeProductos,
        icon: 'fa-clipboard-list'
    }

    /* <!-- Total awards --> */

    let totalDeCategorias = {
        title: ' Total de categorías',
        color: 'success',
        cuantity: totalCategorias,
        icon: 'fa-award'
    }

    /* <!-- Actors quantity --> */

    let cantidadDeUsuarios = {
        title: 'Total de usuarios',
        color: 'warning',
        cuantity: totalDeUsuarios,
        icon: 'fa-user-check'
    }

   let cartProps = [productsInDb, totalDeCategorias, cantidadDeUsuarios];
 


    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
} 

export default ContentRowMovies;