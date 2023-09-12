'use client'

import { useState } from "react"

export default function Comment() {

    const [comment, setComment] = useState();

    return (
        <div>
            <div>댓글 목록 영역</div>
            <input 
                type="text" 
                onChange={(e) => {setComment(e.target.value)}}
            />
            <button
                onClick={() => {
                    fetch('/api/comment/new', {method: 'POST', body : comment})
                }}
            >
                댓글전송
            </button>
        </div>
    )
}
