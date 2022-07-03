function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {options.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
