import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";


export default async function Edit(props) {
    const db = (await connectDB).db("noticeboard")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

    // await db.collection('post').updateOne({수정할 게시물정보}, {$set : {title: '', constent: ''}})
    return (
        <div className="p-20">
            <h4>수정 페이지</h4>
            <form action="/api/post/new" method="POST">
                <div>
                    제목
                    <input
                        type="text"
                        name="title"
                        defaultValue={result.title}
                    />
                </div>
                <div>
                    내용
                    <textarea
                        name="content"
                        defaultValue={result.content}
                    />
                </div>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}
