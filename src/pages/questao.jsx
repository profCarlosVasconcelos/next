import { useEffect, useState } from "react"

export default function Questao() {
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4077/api/questao/22')
            .then(resp => resp.json())
            .then(setQuestao)

    }, [])

    function renderizarRespostas() {
        if (questao) {
            return questao.respostas.map(resp => <li key={resp.id}>{resp}</li>
            )
        }
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>
                {renderizarRespostas()}
            </div>
        </div>
    )
}