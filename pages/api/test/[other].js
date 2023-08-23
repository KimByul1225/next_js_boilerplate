import { connectDB } from "@/util/database";

export default function handler(req, res) {
    console.log(req.query, "url 파라미터 사용");
    return res.status(200).json()
}
