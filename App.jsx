import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    const tarefaTrim = input.trim();

    if(!tarefaTrim)return;
    
    const tarefaExiste = tarefas.some(
      t=> t.toLowerCase() === tarefaTrim.toLowerCase()
    );

    if(tarefaExiste){
      alert("Tarefa existente!")
      return;
    }
    setTarefas([...tarefas, tarefaTrim]);
    setInput("");
  }

  function apagarTarefa(index){
    const atualizarTarefa = tarefas.filter((_,i) => i !== index);
    setTarefas(atualizarTarefa);
  }
  return (
    <>
      <div  className="bg-dark text-white p-5 " >
        <div className='box'>
          <h1 className="mb-3">Minha Lista de Tarefas</h1>
       <div className="input-group">
         <input type='text' className='form-control' value={input} onChange={e => setInput(e.target.value)} placeholder='Nova tarefa'/>
        <button  className='btn btn-success' onClick={adicionarTarefa} >Adicionar</button>
          
       </div>
        <ul className="list-unstyled mt-3">
          {tarefas.map((tarefa, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>{tarefa}
            <button className="btn btn-danger ms-4" onClick={()=> apagarTarefa(index)}>Apagar</button></li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
}
export default App
