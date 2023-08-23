'use client'
import Link from "next/link";
import { useEffect } from "react";

export default function ListItem({result}) {
    return (
        <>
            {
                result.map((item) => {
                    return (
                        <li
                            key={item._id}
                            className="list-item"
                        >
                            <Link
                                href={`/detail/${item._id}`}
                                prefetch={false}
                            >
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </Link>
                            <button
                                onClick={()=>{
                                    fetch('/api/post/delete', { method: 'DELETE', body: item._id })
                                    .then((r) => {
                                        if (r.status == 200) {
                                            return r.json()
                                        } else {
                                            //서버가 에러코드전송시 실행할코드
                                        }
                                    })
                                    .then((result) => {
                                        //성공시 실행할코드
                                        console.log(result);
                                    }).catch((error) => {
                                        //인터넷문제 등으로 실패시 실행할코드
                                        console.log(error)
                                    })
                                }}
                            >
                                🗑
                            </button>
                        </li>
                    )
                })
            }
        </>
    )
}
