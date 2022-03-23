function Header () {
    return (
        <header>
       <div className="headerLeft">
       <img width={80} height={60} src="img/Logo.png"/>
       <div className="headerInfo">
         <h3>Доставка пасты</h3>
         <p>Ташкент</p>
       </div>
       </div>
       <ul className="headerRight">
         <li className="liCart">
         <img width={24} height={24} src="img/cart.png"/>
           
         </li>
         <span>21000 сум</span>

         <li className="liUser">
         <img width={24} height={24} src="img/user.png"/>

         </li>
       </ul>
     </header>
    );
}

export default Header;
