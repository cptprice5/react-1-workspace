import React from 'react';
import ClassCard from '../card/ClassCard'
import styles from './cardlist.module.css';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: this.props.userList,
            componentStatus: 'created'
        }
    }
//{this.props.children}
    componentDidMount() {
        var componentThis = this;
        fetch(this.props.sourceUrl)
        .then(async function(result) {
            console.log(result);
            var resultAsJson = await result.json();
            console.log("resultAsJson: " + resultAsJson);
            componentThis.setState((prevState) => {
                return {
                    userList: resultAsJson.users,
                    componentStatus: 'dataloaded'
                }
            })
        });
    }
    render() {
        console.log("render Called");
        var childElements = null;
        var shouldRenderCards = false;
        if (this.state.componentStatus == 'dataloaded' || this.state.userList.length > 0) {
            shouldRenderCards = true;
            childElements = [];
            for (var i=0; i < this.state.userList.length; i++) {
                var data = this.state.userList[i];
                childElements.push(<ClassCard name={data.name} age={data.age}/>)
            }
        }
        return (
            <div id="cardlistcontainer" className={styles.cardlistcontainer}>
                {shouldRenderCards && childElements}
                {!shouldRenderCards && <div className={styles.loadingCard}>Loading from internet</div>}
            </div>
        )
    }
}

export default CardList;