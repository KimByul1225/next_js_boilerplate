import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function Edit(props) {
    const db = (await connectDB).db("noticeboard")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })
    //DB에서 해당 글의 상세 내용을 불러오는 작업을 실행.
    
    return (
        <div className="p-20">
            <h4>수정 페이지</h4>
            <form action="/api/post/edit" method="POST">
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
                <input 
                    type="hidden" 
                    name="_id"
                    defaultValue={result._id.toString()}
                />
                <button type="submit">수정</button>
            </form>
        </div>
    )
}
