import styles from './funccard.module.css';

import React from 'react';

const FuncCard1 = function(props) {

	const [nameValue, overwriteNameValue] = React.useState('initial name something')
	const [bigStateObj, setBigStateObj] = React.useState({
		isClicked: 'not clicked',
		counter: 0
	});

	//console.log("this.state: " + this.state);

	var cardClickListner = () => {
		console.log("cardClickListner called")
		//nameValue = "Changed value";
		overwriteNameValue("Changed value")
		setBigStateObj(function(prevState){
			return {
				...prevState,
				isClicked: 'clicked by human',
				counter: (prevState.counter + 1)
			}
		})
	}

	return (
		<div className={styles.CardContainer} onClick={cardClickListner}> 
			FuncCard1 content::::::::  {nameValue} 
			<p>bigStateObj.isClicked:::: {bigStateObj.isClicked} </p>
			<p>bigStateObj.counter:::: {bigStateObj.counter} </p>
		</div>
	);
}

export default FuncCard1;
