import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method == 'DELETE') {
        try {
            let db = (await connectDB).db('noticeboard')
            let result = await db.collection('post').deleteOne({ _id: new ObjectId(req.body) });
            res.status(200).json("삭제완료!")
        }
        catch (error) {
            res.status(500)
        }
        

    // 만약에 result 결과가 이상하면 응답.status(500)
    // result 결과가 정상이면 응답.status(200)
    }
}



// 삭제시 회원정보 일치여부 판단
// export default async function handler(요청, 응답) {
//     if (요청.method == 'DELETE') {
//         console.log(요청.body)
//         let session = await getServerSession(요청, 응답, authOptions)

//         const db = (await connectDB).db('forum')
//         let 찾은거 = await db.collection('post').findOne({ _id: new ObjectId(요청.body) })

//         if (찾은거.author == session.user.email) {
//             let result = await db.collection('post').deleteOne({ _id: new ObjectId(요청.body) })
//             return 응답.status(200).json('삭제완료')
//         } else {
//             return 응답.status(500).json('현재유저와 작성자 불일치')
//         }

//     }
// }