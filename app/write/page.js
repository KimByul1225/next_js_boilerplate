import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
    let session = await getServerSession(authOptions);


    if(!session){
        return(
            <div>
                로그인이 필요합니다.
            </div>
        )
    }else{
        return (
            <div className="p-20">
                <h4>글작성</h4>
                <form action="/api/post/new" method="POST">
                    <div>
                        제목
                        <input
                            type="text"
                            name="title"
                            placeholder="제목을 작성해 주세요."
                        />
                    </div>
                    <div>
                        내용
                        <textarea
                            name="content"
                            placeholder="내용을 작성해 주세요."
                        />
                    </div>
                    <button type="submit">등록</button>
                </form>
            </div>
        )
    }
    
}