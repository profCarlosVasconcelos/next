export default function minha(req, res) {
    res.status(200).json({
        metodo: req.method
    })
}