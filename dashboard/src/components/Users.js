import React, {useState, useEffect} from 'react';
import UserRow from './UserRow';


function Chart (){
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetch("/api/users")
            .then(response => response.json())
            .then(users => setRows(users.data))
            .catch(e => console.log(e))
    },[])
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow col-lg-12 mb-4">

<div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Usuarios Registrados</h5>
                </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                            {
                            rows.map( ( row , i) => {
                                return <UserRow { ...row} key={i}/>
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