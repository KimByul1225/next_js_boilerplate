export default async function Detail(props) {
    return (
        <div>
            <h4>상세페이지임</h4>
            <h4>글제목</h4>
            <p>글내용</p>

            <p>parameter : {props.params.id}</p>
        </div>
    )
}