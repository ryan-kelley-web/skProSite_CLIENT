import React from 'react';

class Navbar extends React.Component {
   

    render() {
        return (
            <div>
                <h1>Navbar: {this.props.name} and {this.props.anotherProp}</h1>
                {this.props.children}
               
                
                
                </div>
        )
    }
}

export default Navbar;