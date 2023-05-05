import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
    const db = (await connectDB).db("noticeboard")
    let result = await db.collection('post').find().toArray()
    return (
        <>
            <div className="list-bg">
                {
                    result.map((item) => {
                        return(
                            <Link 
                                className="list-item" 
                                key={item._id}
                                href={`/detail/${item._id}`}
                                prefetch={false}
                            >
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </>
        
    )
} 