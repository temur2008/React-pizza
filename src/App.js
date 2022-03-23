
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
     
      <Drawer />
      <Header />

     <div className="content">
       <div className="search-block">
       <h1 className="textPasta">Паста</h1>
        <div className="search">
        <img width={16} height={16} src="./img/search.svg" alt="Search"/>
        <input placeholder="Поиск..."/>
        </div>
       </div>
      <div className="pizzas">

        <Card />
        <Card />
        <Card />
        <Card />
        
        
        </div>

     </div>
    </div>
  );
}

export default App;
