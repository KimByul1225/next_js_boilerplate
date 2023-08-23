import { connectDB } from "@/util/database";
import ListItem from "./ListItem";


export default async function List() {
    const db = (await connectDB).db("noticeboard")
    let result = await db.collection('post').find().toArray()
    result = result.map((a) => {
        a._id = a._id.toString()
        return a
    })
    return (
        <>
            <ul className="list-bg">
                <ListItem
                    result={result}
                />
            </ul>
        </>
        
    )
}