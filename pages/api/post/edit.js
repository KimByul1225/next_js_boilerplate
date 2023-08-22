import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function handler(req, res) {
    if (req.method == 'POST') {
        if (req.body.title == '') {
            return res.status(500).json('제목 작성이 필요합니다.')
        }
        if (req.body.content == '') {
            return res.status(500).json('내용 작성이 필요합니다.')
        }
        try {
            let changeData = {
                title: req.body.title, 
                content: req.body.content
            }
            const db = (await connectDB).db("noticeboard")
            let result = await db.collection('post').updateOne({ _id: new ObjectId(req.body._id) }, { $set: changeData })

            res.status(200).redirect(302, `/detail/${req.body._id}`)
        } catch {
            return res.status(400).json('에러가 발생했습니다.')
        }
    }
}

