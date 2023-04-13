import './App.css';
import Header from './components/header';
import FeedbackList from './components/FeedbackList';
import { Items } from "./data/feedbackData";
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';


function App() {

  const [ feedback, setFeedack ] = useState(Items);
  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedack(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <Header></Header>
      <div className='container'>
        <FeedbackForm/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteFeedback={handleDelete}></FeedbackList>
      </div>
    </>
  );
}

export default App;
