import Card from "./shared/Card";
import {FaTimes} from 'react-icons/fa';


function FeedbackItem({item, deleteItem}) {
    return (
        <Card reverse={false}>
            <div className='num-display'>{item.rating}</div>
            <button className="close" onClick={() => deleteItem(item.id)}>
                <FaTimes color="purple"/>
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}



export default FeedbackItem;