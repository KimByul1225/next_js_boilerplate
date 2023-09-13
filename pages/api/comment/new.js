import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    req.body = JSON.parse(req.body);
    const { comment, _id } = req.body;
    let email;
    let session = await getServerSession(req, res, authOptions);
    // getServerSession을 사용해서 로그인한 유저의 정보를 불러옴

    if (req.method == 'POST') {
        if (comment == '') {
            return res.status(500).json('댓글 작성이 필요합니다.')
        }
        if (session) {
            email = session.user.email
            // 요청 body에 author을 추가해서 로그인한 유저의 email정보를 추가
        }
        
        let commentData = {
            content: comment,
            parent: new ObjectId(_id),
            author: email
        }

        try{
            const db = (await connectDB).db("noticeboard")
            let result = db.collection('comment').insertOne(commentData);
            res.status(200).json('저장완료')
        } catch{
            return res.status(400).json('에러가 발생했습니다.')
        }
    }
}
