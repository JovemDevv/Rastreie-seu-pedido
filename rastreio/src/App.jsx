import  { useState } from 'react';
import clienteData from '../dados.json';
import logo from './assets/logo.png';
import lupa from './assets/lupa.png';
import './app.scss';

function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const foundOrder = clienteData.encomendas.find(
      (encomenda) => encomenda.numero === search
    );

    setResult(foundOrder || false);
  };

  return (
    <div className="my-container">
      <form>
        <div className="form-group container text-center">
          <header>
            <img src={logo} alt="Logo" id="logo" className="img-fluid mobile-logo" />
          </header>
          <main className="mt-4">
            <div className="d-flex flex-column mt-5">
              <p>Consulte sua encomenda:</p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="input-with-icon">
                  <input
                    type="text"
                    className=" text-center "
                    placeholder="Digite o número do pedido"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    maxLength={10}
                   
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
              {result !== null && (
                <div className="mt-5">
                  {result !== false ? (
                    <div>
                      <div className="info-container d-sm-flex flex-column flex-md-row">
                        <div className="mb-3 mb-sm-0 mr-sm-3">
                        {result.id} - {result.cliente.nome}
                        Número de ordem e nome do cliente 
                        </div>
                        <div className=" mb-sm-0">
                          {new Date(result.data).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                      <div className="info-container d-sm-flex flex-column flex-md-row">
                        <div className="mb-3 mb-sm-0 mr-sm-3 esconder">
                          R$ {result.valor.toFixed(2)}
                        </div>
                        <div className=" mb-sm-0">
                          {result.entregue ? 'Entregue' : 'A entregar'}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="primeiro-p">
                        <p>Encomenda</p>
                        <p>não encontrada!</p>
                      </div>
                      <div className="primeiro-p">
                      <p>Procure novamente</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </form>
    </div>
  );
}

export default App;
