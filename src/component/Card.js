const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
    const {titleText,desText}=props;
  return <div className='Card'>
              <h1 className="cardTitle">{titleText}</h1>
              <p className="cardDes">{desText} </p>
              <h3 className='cardFooter'>{dateName + "/" +   monthName + "/" + currentYear}</h3>
          </div>
}
export default Card;