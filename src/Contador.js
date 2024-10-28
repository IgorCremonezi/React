import React, { useState } from 'react';
import './App.css';

function Contador() {
  const [contadorHomens, setContadorHomens] = useState(0);
  const [contadorMulheres, setContadorMulheres] = useState(0);

  const incrementarHomens = () => setContadorHomens(contadorHomens + 1);
  const decrementarHomens = () => setContadorHomens(contadorHomens > 0 ? contadorHomens - 1 : 0);

  const incrementarMulheres = () => setContadorMulheres(contadorMulheres + 1);
  const decrementarMulheres = () => setContadorMulheres(contadorMulheres > 0 ? contadorMulheres - 1 : 0);

  const total = contadorHomens + contadorMulheres;

  return (
    <div className="app-container">
      <h1>Contador de Pessoas</h1>
      <div className="counter-section">
        <div className="counter">
          <h2>Homens</h2>
          <p>{contadorHomens}</p>
          <button onClick={incrementarHomens}>Adicionar</button>
          <button onClick={decrementarHomens}>Remover</button>
        </div>
        <div className="counter">
          <h2>Mulheres</h2>
          <p>{contadorMulheres}</p>
          <button onClick={incrementarMulheres}>Adicionar</button>
          <button onClick={decrementarMulheres}>Remover</button>
        </div>
      </div>
      <div className="total-section">
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
}

export default Contador;