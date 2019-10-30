import React from 'react';
import Search from './Search';
import Table from './Table';


export default class searchTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filter: ''
        };
        this.handleFilter = this.handleFilter.bind(this);
      }

      handleFilter(filterText) {
        this.setState({
          filter: filterText
        });
      }
    render() {
      return (
        <div>
          <Search  
            filter={this.state.filter}
            onFilter={this.handleFilter} />
          <Table 
            data={this.props.data}
            filter={this.state.filter} />
        </div>
      );
    }
  }