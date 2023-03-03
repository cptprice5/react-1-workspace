import styles from './learn_redux_card.module.css';
import { connect } from 'react-redux';

const SEND_INCREMENT_ACTION_TYPE = 'INCREMENT_COUNTER1';
const SEND_INCREMENT_ACTION = {
    type: SEND_INCREMENT_ACTION_TYPE
}

const IncrementButton = (props) => {
    const { sendIncrementAction } = props;
    const buttonClickHandler = function() {
        sendIncrementAction();
    }
	return (
		<div className={styles.IncrementButtonContainer} onClick={buttonClickHandler}>
		    Increment counter
		</div>
	)
}

var sendIncrementDispatch = function() {
    return (dispatch) => {
        dispatch(SEND_INCREMENT_ACTION);
    }
}

var mapDispatchToProps = function(storeDispatcher) {
    console.log('dispatchMapper called with storeDispatcher: ', storeDispatcher)
    return {
        sendIncrementAction: () => storeDispatcher(sendIncrementDispatch())
    }
}
const ReduxConnectedButton = connect(null, mapDispatchToProps) (IncrementButton);
export default ReduxConnectedButton;