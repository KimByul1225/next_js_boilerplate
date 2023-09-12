'use client'
import Link from "next/link";

export default function ListItem({ result, email }) {
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
                                <p>작성자: {item.author}</p>
                                {/* <p>{item._id}</p> */}
                            </Link>
                            
                            {
                                email === item.author &&
                                <button
                                    onClick={(e) => {
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
                                                e.target.parentElement.style.opacity = 0;
                                                setTimeout(() => {
                                                    e.target.parentElement.style.display = 'none'
                                                }, 500)
                                            })
                                    }}
                                >
                                    🗑
                                </button>
                            }
                            
                        </li>
                    )
                })
            }
        </>
    )
}
