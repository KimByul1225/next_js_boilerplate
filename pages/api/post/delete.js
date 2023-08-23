import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method == 'DELETE') {
        try {
            let db = (await connectDB).db('noticeboard')
            let result = await db.collection('post').deleteOne({ _id: new ObjectId(req.body._id) });
            res.status(200).json("삭제완료")
        }
        catch (error) {
            res.status(500)
        }
    // 만약에 result 결과가 이상하면 응답.status(500)
    // result 결과가 정상이면 응답.status(200)
    }
}



