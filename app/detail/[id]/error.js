'use client'
//에러페이지는 반드시 클라이언트 컴포넌트로 만들어야함.

export default function Error({error, reset}) {
    // error props는 에러 정보
    // reset props는 함수로 페이지를 다시 로드
    return (
        <div>
            <h4>에러페이지</h4>
            <button onClick={() => { reset() }}>페이지 다시 로드 하기</button>
        </div>
    )
}
