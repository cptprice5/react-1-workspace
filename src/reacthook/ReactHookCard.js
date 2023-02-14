import styles from './react_hook_card.module.css';
import UseEffectHookTest from './use_effect/UseEffectHookTest'
import UseMemoHookTest from './use_memo/UseMemoHookTest'
import UseRefHookTest from './use_ref/UseRefHookTest'
const ReactHookCard = (props) => {
	return (
		<div className={styles.CardContainer} >
		    ReactHookCard hook card content
		    <UseEffectHookTest/>
		    <UseMemoHookTest/>
		    <UseRefHookTest/>
		</div>
	)
}

export default ReactHookCard;