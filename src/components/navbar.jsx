import React, { PureComponent } from 'react';

class navbar extends PureComponent {

    render() {
        console.log(this.props);        
        return (
            <header className="navbar">
              <i className="navbar-logo fas fa-leaf"></i>  
              <span>Habit Tracker</span>
              <span className="navbar-count">{this.props.totalCount}</span>
            </header>
        );
    }
}

export default navbar;