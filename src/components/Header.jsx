import Button from "./Button";

const Header = () => {
  return (
    <header>
      <h1>Notes</h1>
      <div>
        <Button buttonName={"Toggle Mode"} />
        <Button buttonName={"Add Notes"} />
      </div>
    </header>
  );
};

export default Header;
