'use client'

import { useEffect, useState } from "react"

export default function Comment({ _id }) {
    const [comment, setComment] = useState();
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        //쿼리스트링 사용
        fetch(`/api/comment/list?id=${_id}`)
        .then(r=>r.json())
        .then((result) => {
            setCommentList(result);
            console.log(result);
        })
    }, [_id])

    return (
        <div>
            <div>댓글 목록 영역</div>
            <input 
                type="text" 
                onChange={(e) => {setComment(e.target.value)}}
            />
            <button
                onClick={() => {
                    fetch('/api/comment/new', {
                        method: 'POST', 
                        body : JSON.stringify({
                            comment: comment,
                            _id: _id
                        })
                    })
                }}
            >
                댓글전송
            </button>
            {
                commentList.length > 0 ?
                    commentList.map((el, idx) => {
                        return(
                            <div key={idx}>
                                <p>
                                    댓글: {el.content}
                                </p>
                                <p>
                                    작성자: {el.author}
                                </p>
                                <hr />
                            </div>
                        )
                    })
                :
                    <p>댓글이 없습니다.</p>
            }
        </div>
    )
}
