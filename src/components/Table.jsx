import React from 'react';
import TableRow from "./TableRow";
import './table.css';

export default class Table extends React.Component {
    render() {
        let itemMax=0;
        const filter = this.props.filter;
        const info = this.props.data.results.map((item) => {
            
            if (item.name.indexOf(filter) === -1) {
                return;
              }
            
              if( itemMax <= item.height){
                itemMax = item.height; 
                console.log(itemMax)
                return {...item}
            }
            console.log(item)

            return {...item}
           
        }
        );   

        const infoFiltr = info.map((items) => {

  
              if( items.height === itemMax ){ 
                items.name= <span style={{color: 'red'}}>
                 {items.name}
                 </span>; 
                  return (
                    <TableRow key={items.name} {...items}/>
                );                             
            }
            return (
                <TableRow key={items.name} {...items}/>
            );
           
        }
        );   
     


    
        return (
            <div>
               
                <table>
                <tbody>
                    <tr>
                        <th>name</th>
                        <th>height</th>
                        <th>mass</th>
                        <th>hair_color</th>
                        <th>skin_color</th>
                        <th>eye_color</th>
                        <th>birth_year</th>
                        <th>gender</th>
                    </tr>
                    {infoFiltr}
                    </tbody>
                </table>
            </div>
        );
    };
}
