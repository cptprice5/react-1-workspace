import React from 'react';
import styles from './card.module.css';

/*
function CardFunction({name = "defaultname", age}) {
    return (
        <h1>Name: {name}</h1>
    )
}
*/

class ClassCard extends React.Component {

    constructor(props) {
        console.log("Card componennt's constructor called for name: " + props.name)
        super(props);
        this.state = {
            loginDate: new Date(),
            isClicked: false,
            clickCount: 0
        };
        this.containerClicked = this.containerClicked.bind(this);
        this.printlifecycle = this.printlifecycle.bind(this);
    }

    render() {
        this.printlifecycle("render");
        console.log("Card componennt's render called for name: " + this.props.name)
        //const cardContainerID = React.useId();
        /*var containerClicked = function() {
            console.log("containerClicked")
            this.state.isClicked = true;
        }*/
        var finalContainerStyle = null;
        if (this.state.isClicked) {
            finalContainerStyle = styles.CardContainerClicked;
        } else {
            finalContainerStyle = styles.CardContainer;
        }
        return (
            <div className={finalContainerStyle} id="container1" onClick={this.containerClicked}>
                <h1><p>Name: {this.props.name}</p></h1>
                <h1><p>ClickCount: {this.state.clickCount}</p></h1>
                <h2><p>Age: {this.props.age}</p></h2>
                <h3><p>LoginDate: {this.state.loginDate.toLocaleTimeString()}</p></h3>
           </div>
        );
    }

    componentDidMount() {
        this.printlifecycle("componentDidMount");
    }

    shouldComponentUpdate() {
        this.printlifecycle("shouldComponentUpdate");
        return true;
    }

    componentDidUpdate() {
        this.printlifecycle("componentDidUpdate");
    }

    componentWillUnmount() {
        this.printlifecycle("componentWillUnmount");
    }

    printlifecycle(lifecycleMethodName) {
        console.log("Card component's " + lifecycleMethodName + " called for name: " + this.props.name)
    }

    containerClicked() {
        this.printlifecycle("containerClicked");
        //this.state.isClicked = true;
        //this.forceUpdate();
        this.setState(function(previousState) {
            return {
                isClicked: true,
                clickCount: (previousState.clickCount + 1)
            }
        });
    }


}

export default ClassCard;