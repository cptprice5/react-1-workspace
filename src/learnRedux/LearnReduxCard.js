import styles from './learn_redux_card.module.css';
import { connect } from 'react-redux';

const LearnReduxCardVanilla = (props) => {
    const { inputCounter1 } = props;
	return (
		<div className={styles.CardContainer} >
		    Learn Redux card content
		    Input prop inputCounter1 value is {inputCounter1}
		</div>
	)
}

var mapStateToProps = function(state) {
    console.log('Called mapStateToProps with state: ', state)
    return {
        inputCounter1: state.learnRedux.commonCounter1
    }
}

const LearnReduxCard = connect(mapStateToProps)(LearnReduxCardVanilla);
export default LearnReduxCard;