import React, {useState, useEffect} from 'react';
import ChartRow from './ChartRow';


function Chart (){
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then(response => response.json())
            .then(products => setRows(products.data))
    },[])
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow col-mb-4 col-lg-12">
            <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Todos los Productos</h5>
                </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Descripcion</th>
                                <th>Color</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                            {
                            rows.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;