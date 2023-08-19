export default function handler(eq, res) {
    // let today = new Date();
    // let year = today.getFullYear(); // 년도
    // let month = today.getMonth() + 1;  // 월
    // let date = today.getDate();  // 날짜
    // let hours = today.getHours(); // 시
    // let minutes = today.getMinutes();  // 분
    // let seconds = today.getSeconds();  // 초
    // const dateNow = `${year}/${month}/${date}`;
    // const timeNow = `${hours}:${minutes}:${seconds}`;

    let date = new Date()
    res.status(200).json(date)
}