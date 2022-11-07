import './Card.css';
import Avatar from './Avatar';
import Detail from './Detail';
function Card(props) {
    return (

        <div className="card-container">
            <div className="card-container__top">
                <h2 className="card-container__name">{props.name}</h2>
                <Avatar image={props.image} />
            </div>
            <div className="card-container__bottom">
                <Detail detailInfo={props.phoneNo} />
                <Detail detailInfo={props.mail} />
            </div>
        </div>

    )
}

export default Card;