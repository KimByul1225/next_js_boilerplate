import { connectDB } from "@/util/database";

const db = (await connectDB).db("noticeboard")
let result = await db.collection('post').find().toArray()

export default function handler(req, res) {
    if (req.method == 'GET') {
        res.status(200).json(result)
    }
    if (req.method == 'POST') {
        res.status(200).json({ name: 'POST 방식' })
    }
}