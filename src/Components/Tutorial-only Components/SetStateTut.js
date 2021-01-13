import React, { Component } from 'react'

class SetStateTut extends Component {

    //rconst 
    constructor(props) {
        super(props)

        this.state = {
            tutCounter: 0
        }
    }

    increment() {
        //SETSTATE1
        // this.setState({
        //     tutCounter: this.state.tutCounter = this.state.tutCounter + 1
        // })
        //SETSTATE2
        this.setState((prevState, props) => ({
            tutCounter: prevState.tutCounter + 1 //but can also use props here
        })
        )
        console.log(this.state.tutCounter)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>
                    prop tutCounter should appear as: {this.state.tutCounter}
                </div>

                <div>
                    <button onClick={() => this.increment()}>
                        Increment tutCounter by one
                    </button><br />
                    <button onClick={() => this.incrementFive()}>Increment tutCounter by five</button>
                </div>


            </div>
        )
    }
}

export default SetStateTut




/*
TLDR
1. always make use of setState and never modify the state directly.
2. code has to be executed after the state has been updated? place that code in the c/b func which is the 2nd arg to the setState(). 
3. when you have to update state based on the previous state's value, pass in a func as an arg vs. (the traditional) object.  

//SETSTATE 1
//whenever you need to execute some code after the state has been changed, 
//do not place that code right after the said setState method. instead place the code in the callback function which is passed to the second param of the setState method.

//SETSTATE 2
//when you have to update the state based on previous state maek sure to pass in function as an arg instead of object. 
//function has access to previous state 

*/
