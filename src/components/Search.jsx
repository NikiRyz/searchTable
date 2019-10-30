import React from 'react';

export default class Search extends React.Component {
   
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
      }

      handleFilter(e) {
        this.props.onFilter(e.target.value);
      }
    render() {
      
         
        const filter = this.props.filter;
        return(
            <div>
                 <input type="text"  placeholder="Search..."   value={this.props.filter} onChange={this.handleFilter}/>
            </div>
        );
    };
}
