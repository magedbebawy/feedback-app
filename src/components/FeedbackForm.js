import { useState } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from "./shared/Card";

function FeedbackForm() {
    const [ text, setText ] = useState('');
    const [ btnDisabled, setBtnDisabled ] = useState(true);
    const [ message, setMessage ] = useState('');
    const handleInputChange = (e) => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length < 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect/>
                <div className="input-group">
                    <input onChange={handleInputChange} type='text' placeholder="Write a review" value={text}></input>
                    <Button isDisabled={btnDisabled} type='submit'>Submit</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;