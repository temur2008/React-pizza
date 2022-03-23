
function Drawer () {
    return (
      <div style={{display:'none'}} className="overlay">
        <div className="drawer">
          <h2>Корзина
          <img className="cartItemRemove" width={25} height={25} src="./img/btn-remove.png" alt="Remove" />
          </h2>

            <div className="items">
           <div className="cartItem">
             <img className="drawer-img" width={70} height={70} src="./img/1.png" alt="Pizzas"/>
             <div className="cartItem-block">
               <p className="drawer-desc">С креветками и трюфелями</p>
               <b>49 999 сум</b>
             </div>
             <img className="cartItemRemove" width={25} height={25} src="./img/btn-remove.png" alt="Remove" />
           </div>

           <div className="cartItem">
             <img className="drawer-img" width={70} height={70} src="./img/2.png" alt="Pizzas"/>
             <div className="cartItem-block">
               <p className="drawer-desc">С креветками и трюфелями</p>
               <b>49 999 сум</b>
             </div>
             <img className="cartItemRemove" width={25} height={25} src="./img/btn-remove.png" alt="Remove" />
           </div>
           
           </div>

           <div className="cartTotalBlock">
              <ul>
                <li className="total-price">
                  <span>Итого:</span>
                  <div></div>
                  <b>999 998 сум</b>
                </li>
                <li className="total-tax">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>4 999 сум</b>
                </li>
              </ul>
              <button>Оформить заказ</button>
          </div>

          </div>
        </div>
    );
}

export default Drawer;