const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(){
  return <div className='Card'>
              <h1 className="cardTitle">Top heading</h1>
              <p className="cardDes">Lorem Ipsum is simply dummy text of the printing </p>
              <h3 className='cardFooter'>{dateName + "/" +   monthName + "/" + currentYear}</h3>
          </div>
}
export default Card;