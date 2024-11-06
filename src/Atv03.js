import Gallery from "./Gallery";
import PackingList from "./PackingList";
import Avatar from "./Avatar";
import List from "./List";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const user = {
    name: 'Hedy Lamarr',
    image: 'https://i.imgur.com/yXOvdOSs.jpg'
};

const ingredientes = ['Farinha', 'Açúcar', 'Ovos'];

function Atv03() {
    return (
      <div className="container text-center mt-5">
        <h2 className="mb-4">Atividade 03</h2>
        <Gallery />
        <PackingList />
        <Avatar person={user} size={150} />
        <List />
        <Recipe ingredientes={ingredientes} />

        <Link to="/" className="btn btn-secondary">Voltar</Link>
      </div>
    );
  }
  
  export default Atv03;