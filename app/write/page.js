"use client"

import { useState } from "react"

export default function Write() {
    const [boardDetail, setBoardDetail] = useState({
        title: "",
        body: ""
    }); 


    const inputHandler = (e) => {
        const { value, name } = e.target;
        setBoardDetail({
            ...boardDetail,
            [name] : value
        })
    }

    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/write" method="POST">
                <div>
                    <h5>제목</h5>
                    <input 
                        type="text" 
                        name="title"
                        value={boardDetail.title}
                        onChange={inputHandler}
                    />
                </div>
                <div>
                    <h5>내용</h5>
                    <textarea
                        name="body"
                        value={boardDetail.body}
                        onChange={inputHandler}
                    />
                </div>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}