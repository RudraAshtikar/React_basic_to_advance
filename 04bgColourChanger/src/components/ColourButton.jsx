function ColourButton({ colour, setColour }) {
  return (
    <button
      onClick={() => setColour(colour)}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"
      style={{ backgroundColor: colour }} //double curly braces is just part of syntax, in these double curly braces we don't have to input another curly brace for variables
    >
      {colour}
    </button>
  );
}

export default ColourButton;
