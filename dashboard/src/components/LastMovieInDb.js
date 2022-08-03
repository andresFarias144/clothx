import React,{ useState, useEffect }  from 'react';

 

function LastMovieInDb(){

    

    const [ultimoProducto, setUltimoProducto] = useState({});

    const srcImg = "http://localhost:3030/img/products/"+(ultimoProducto.image);

    useEffect(() => {
        fetch('/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(productos => {
                setUltimoProducto(productos.data[productos.data.length - 1]);
                
            })

            .catch(error => console.log(error))
        }, [])

       

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto</h5>
                </div>
                <div className="card-body">
                     

                <div className=" col-lg-12">
                       

                    <div class="container">
                    <div class="row">

            
                        <div class="col">
                            <br/>
                        {ultimoProducto !== {} ? <h3>{ultimoProducto.name}</h3> : null}
                        {ultimoProducto !== {} ? <p>{ultimoProducto.description}</p> : null}
                        {ultimoProducto !== {} ? <h5>Precio: <strong>   {ultimoProducto.price}</strong> </h5> : null}
                        </div>


                        <div class="col">
                        <figure class="figure ">
                        <img src={srcImg} class="figure-img img-fluid rounded " alt="..."/>
                        </figure>
                        </div>


                    </div>
                    </div>
                  
                    
                    


                    
                     
                    </div></div>
                
            </div>
        </div>
    )
}

export default LastMovieInDb;
