import React from 'react';
import TableRow from "./TableItem";
import './table.css';

export default class Table extends React.Component {
    render() {
        const filter = this.props.filter;
        const info = this.props.data.results.map((item) => {
            if (item.name.indexOf(filter) === -1) {
                return;
              }
            return (
                <TableRow key={item.name} {...item}/>
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
