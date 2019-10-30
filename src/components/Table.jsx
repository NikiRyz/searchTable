import React from 'react';
import dataJSON from "./data";
import TableItem from "./TableItem";
import './table.css';

export default class Table extends React.Component {
    render() {
        const info = dataJSON.results.map((item) => {
            return (
                <TableItem key={item.name} {...item}/>
            );
        });

        return (
            <div>
               
                <table>
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
                    {info}
                </table>
            </div>
        );
    };
}
