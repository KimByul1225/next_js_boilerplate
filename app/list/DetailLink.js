'use client'

import { useRouter, usePathname, useSearchParams, useParams } from "next/navigation";
// 반드시 next/navigation에서 import해야함.

export default function DetailLink() {
    const router = useRouter();

    const urlPath = usePathname();
    // console.log("urlPath", urlPath); // 해당 url의 paht name을 불러온다.

    const params = useParams()
    // console.log("useParams", params); // 해당 url의 파라미터를 불러온다.

    const searchParams = useSearchParams()
    // console.log("schParams", searchParams); // 쿼리스트링을 불러온다.

    return (
        <button
            onClick={() => { router.push('/'); }}
        >
            홈으로
        </button>
    )
}
