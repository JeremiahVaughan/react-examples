import Button from "../components/button/button";
import './button-page.scss'


function ButtonPage() {
  const handleButtonClick = () => {
    console.log("sommmmmm stuff")
  }

  return (
      <div className="button-container">
        <Button onClick={handleButtonClick}>Click here</Button>
        <Button onMouseEnter={handleButtonClick} type="primary">Buy Now</Button>
        <Button type="secondary">Heeeeeey</Button>
        <Button type="success">Virus</Button>
        <Button type="warning">Virus now</Button>
        <Button type="danger">Virus</Button>
      </div>
  );
}

export default ButtonPage;

