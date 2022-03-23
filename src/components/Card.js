function Card() {
return (
<div className="card">
          <div className="favorite">
          <img width={20} height={20}src="./img/unlikedHeart.png" alt="Unliked"/>
          </div>
          <img width={144} height={144} src="./img/1.png" alt="Pizza"/>
          <h5>С креветками и трюфелями</h5>
          <div className="cardBottom">
            <div className="cardSpan">
            <span>Цена:</span>
            <b>49 999 сум</b>
            <button className="button">
              <img width={21} height={21} src="./img/plus.svg" alt="Plus"/>
            </button>
            </div>
          </div>
        </div>
    )
};

export default Card;