'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DarkMode() {
    let router = useRouter();
    let theme = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0];

    useEffect(() => {
        if (theme == '') {
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        }
    }, [])
    return (
        <button onClick={() => {
            if (theme === 'light'){
                document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400);
                router.refresh();
            } else {
                document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400);
                router.refresh();
            }
        }}> {theme === 'light' ? '☀️' : '🌙'} </button>
    )
} 