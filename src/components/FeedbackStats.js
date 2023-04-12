function FeedbackStats({feedback}) {
    const sum = feedback.reduce((total, current) => total + current.rating, 0);
    const average = (sum / feedback.length).toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats;