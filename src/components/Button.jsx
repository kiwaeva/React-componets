const Button = ({ text, children, onClick, color}) => {
    return (
      // example of inline styling for learning purposes 
      // the rest of the styling added in index.css
      <button 
      type="button"   
      style={{
        color: "white",          // text color
        backgroundColor: color,  // button background
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        marginRight: "10px",
        cursor: "pointer"
      }}
        onClick={onClick}>
        {text || children}
      </button>
    );
  };
  
  export default Button;