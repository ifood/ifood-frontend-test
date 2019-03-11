import React, { Component } from 'react';

import Filter from '../filter/filter';
import List from '../list/list';



class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <Filter/>
                <List/>
            </div>
        )
      }
}
export default Home;