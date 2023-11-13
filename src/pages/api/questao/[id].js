export default function questao(req, res) {
    if (req.method === "GET") {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'Qual é sua cor preferida?',
            respostas: [
                'Azul', 'Verde', 'Branco', 'Prento', 'vermelho'
            ]
        })
    } else {
        res.status(405).send() //URL existe, mas o método não é permitido
    }
}