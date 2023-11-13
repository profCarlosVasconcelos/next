import { useState } from "react"

export default function Form() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);

    function salvarUsuario() {
        fetch('api/form', {
            method: 'POST', body: { nome: nome, idade: idade }
        })
    }

    return (
        <div>
            <h1>Integrando com API</h1>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            <input type="number" valar={idade} onChange={e => setNome(e.target.value)} />
            <button onClick={salvarUsuario}>Enviar</button>
        </div>
    )
}