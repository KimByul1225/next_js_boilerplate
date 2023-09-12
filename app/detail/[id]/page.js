import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import Comment from "./Comment";


export default async function Detail(props) {
    const db = (await connectDB).db("noticeboard")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })
    
    let session = await getServerSession(authOptions);
    let email;
    if (session) {
        email = session.user.email;
    }
    
    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <p>parameter : {props.params.id}</p>
            <p>email: {result.author && result.author}</p>
            <hr />
            {
                email === result.author && 
                <Link
                    href={`/edit/${props.params.id}`}
                >
                    ✏️ 글 수정하기
                </Link>
            }
            {/* 수정을 위한 버튼 생성 */}
            <Comment/>
        </div>
    )
}
