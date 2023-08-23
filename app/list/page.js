import { connectDB } from "@/util/database";
import ListItem from "./ListItem";


export default async function List() {
    const db = (await connectDB).db("noticeboard")
    let result = await db.collection('post').find().toArray()
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