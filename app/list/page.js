import { connectDB } from "@/util/database";

export default async function List() {
    const db = (await connectDB).db("noticeboard")
    let result = await db.collection('post').find().toArray()
    return (
        <div className="list-bg">
            {
                result.map((item) => {
                    return(
                        <div className="list-item" key={item._id}>
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
} 