import { connectDB } from "@/util/database";


export default async function handler(req, res) {
    if (req.method == 'POST') {
        if (req.body.title == '') {
            return res.status(500).json('제목 작성이 필요합니다.')
        }
        if (req.body.content == '') {
            return res.status(500).json('내용 작성이 필요합니다.')
        }
        try{
            const db = (await connectDB).db("noticeboard")
            let result = db.collection('post').insertOne(req.body);
            res.status(200).redirect(302, '/list')
        } catch{
            return res.status(400).json('에러가 발생했습니다.')
        }
    }
}


