import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>
                        {props.category.name}
                    </td>
                    <td>{props.description}</td>
                    <td>{props.color}</td>
                    
                    <td>{props.price}</td>
                </tr>
            )
    }
    
        

export default ChartRow;