import React,{useState, useEffect} from "react";
import TopBar from './TopBar';
import Categorias from "./Categorias"

function CategoriaList() {

  const [CategoriaList, setCategoriaList] = useState([])


  useEffect(() => {
    fetch('/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(data => {
            setCategoriaList(data.categories)
        })
        .catch(error => console.log(error))
}, [])

console.log(CategoriaList);




return (
    <React.Fragment>
      
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4 ">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Categorías</h5>
                </div>
                    
                <div className="card-body">
                  
                <ol class="list-group list-group-numbered">

                  {
                    CategoriaList.map((elemento, index) => {
                      return (
                        <li class="list-group-item d-flex justify-content-between align-items-start" key={elemento + index}>
                          <div class="ms-2 me-auto">
                            <div class="h5 fw-bolder"><strong>{elemento.name}</strong></div>
                          </div>
                          <span class="badge bg-info rounded-pill" style={{ color: 'white'}}>{elemento.products.length} </span>
                        </li>
                      )
                    })
                  }
                 
                </ol>


                </div>
                {
                  /*
                  <div className="tarjeta-popUp ">
                      
                          <div className="row gap">
                              {
                                  CategoriaList.map((categoria, index) => {
                                      return <Categorias categoria={categoria} key={categoria + index} />
                                  })
                              }
                          </div>
                      </div>
                    
                  
                  */
                }
                </div>
            </div>

            
         
    </React.Fragment>
)
}




export default CategoriaList;
