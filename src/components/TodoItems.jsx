import './Css/TodoItems.css';
import tick from './Assets/check-mark.png';
import notTick from './Assets/rec.png';
import cross from './Assets/remove.png'; 


const TodoItems = ({no, display, text}) => {
    return (
        <div className="todoitems">
            <div className="todoitems-container">
                <img src={tick} alt="" />
                <img src={notTick} alt="" />
                <div className="todoitems-text">{text}</div>
            </div>
            <img src={cross} alt="" />
        </div>
    )
}

export default TodoItems