import { useEffect, useState } from "react"

export default function Questao() {
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4077/api/questao/123456')
            .then(resp => resp.json())
            .then(setQuestao)

    }, [])
    return (
        <div>
            <h1>Questão</h1>
            <div><>
                <span>{questao?.enunciado}</span>
                <br />
                <span>{questao?.respostas}</span>
            </>

            </div>
        </div>
    )
}