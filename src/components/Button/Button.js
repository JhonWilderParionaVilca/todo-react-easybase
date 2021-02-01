import { useEasybase } from "easybase-react";

const Button = () => {
  const { Frame, sync } = useEasybase();

  const buttonStyle = {
    position: "absolute",
    left: 10,
    top: 10,
    fontSize: 21,
  };

  const handleClick = () => {
    const newTitle = prompt("Please enter a title for your note");
    const newDescription = prompt("Please enter your description");

    Frame().push({
      titulo: newTitle,
      description: newDescription,
      createat: new Date().toISOString(),
    });

    sync();
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      📓 Add Note 📓
    </button>
  );
};
export default Button;
