import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions);
    // getServerSession을 사용해서 로그인한 유저의 정보를 불러옴
    console.log(session);
    if(session) {
        req.body.author = session.user.email
        // 요청 body에 author을 추가해서 로그인한 유저의 email정보를 추가
    }

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
