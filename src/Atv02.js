import Contador from "./Contador";
import { Link } from "react-router-dom";

function Atv02() {
    return (
      <div className="container text-center mt-5">
        <h2 className="mb-4">Atividade 02</h2>
        <Contador />

        <Link to="/" className="btn btn-secondary">Voltar</Link>
      </div>
    );
  }
  
  export default Atv02;