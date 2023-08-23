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
                                onClick={()=>alert("삭제")}
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
