// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
    nome: string;
    telefone: string;
    email: string;
}>;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json([
        { nome: 'John Doe', telefone: '1234567890', email: 'johndoe@example.com' },
        { nome: 'Jane Doe', telefone: '9876543210', email: 'janedoe@example.com' },
        { nome: 'Carlos Vasconcelos', telefone: '945455454', email: 'cvasconcelos@email.com' },
        { nome: 'Maria', telefone: '912345678', email: 'maria@email.com' },
    ]);
}