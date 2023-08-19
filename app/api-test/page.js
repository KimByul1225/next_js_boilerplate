export default function ApiTest() {
    return (
        <div>
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