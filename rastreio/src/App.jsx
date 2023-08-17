import { useState } from 'react'
import clienteData from '../dados.json';
import logo from './assets/logo.png'
import lupa from './assets/lupa.png'
import './app.css'

function App() {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState(null)

  const handleSearch = () => {
    const foundOrder = clienteData.encomendas.find(
      (encomenda) => encomenda.numero === search
    )

    setResult(foundOrder || false);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container text-center">
        <header className="mt-4">
          <img src={logo} alt="Logo" />
        </header>
        <main className="mt-4">
        <div className="d-flex flex-column align-items-center">
  <p>Consulte sua encomenda:</p>
  <div className="d-flex justify-content-center align-items-center">
    <div className="input-with-icon">
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Digite o número do pedido"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <img
        src={lupa}
        alt="Lupa"
        onClick={handleSearch}
        className="lupa-icon"
      />
    </div>
  </div>
</div>

<div>
  <div className="mt-2">
          {result !== null && (
            <div className="mt-4">
            {result !== false ? (
              <div>
                <div className="info-container">
                  
                  <div>
                    <strong>Nome do cliente:</strong> {result.cliente.nome}
                  </div>
                  <div>
                    <strong>Data do pedido:</strong> {new Date(result.data).toLocaleDateString('pt-BR')}
                  </div>
                </div>
                <div className="info-container">
                  <div>
                    <strong>Valor do pedido:</strong> R$ {result.valor.toFixed(2)}
                  </div>
                  
                  <div>
                    <strong>Status:</strong> {result.entregue ? 'Entregue' : 'A entregar'}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className='primeiro-p'>
                  <p>Encomenda </p>
                  <p>não encontrada!</p>
                  </div>
                  <div className='segundo-p'>
                  <p>Procure novamente</p>
                </div>
              </div>
            )}
          </div>
          
          )}
          </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;
