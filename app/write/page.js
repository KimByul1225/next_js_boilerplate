export default function Write() {
    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/write" method="POST">
                <button type="submit">버튼</button>
            </form>

            <hr />
            <h4>user list 불러오기</h4>
            <form action="/api/test" method="GET">
                <button type="submit">호출</button>
            </form>

            <hr />
            <h4>현재 시간 불러오기</h4>
            <form action="/api/time" method="GET">
                <button type="submit">호출</button>
            </form>
        </div>
    )
}