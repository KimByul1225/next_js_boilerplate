import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";


export default async function Detail(props) {
    const db = (await connectDB).db("noticeboard")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })
    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>


            <p>parameter : {props.params.id}</p>

            <hr />
            <Link
                href={`/edit/${props.params.id}`}
            >
                ✏️ 글 수정하기
            </Link>
        </div>
    )
}
