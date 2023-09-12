import { connectDB } from "@/util/database";
import ListItem from "./ListItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
export const dynamic = 'force-dynamic'

export default async function List() {
    const db = (await connectDB).db("noticeboard")
    let result = await db.collection('post').find().toArray()
    result = result.map((a) => {
        a._id = a._id.toString()
        return a
    })

    let session = await getServerSession(authOptions);
    let email;
    if (session) {
        email = session.user.email;
    }


    return (
        <>
            <ul className="list-bg">
                <ListItem
                    result={result}
                    email={email}
                />
            </ul>
        </>
        
    )
}