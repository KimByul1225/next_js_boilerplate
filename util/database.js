
import { MongoClient } from 'mongodb';

const url = process.env.NEXT_PUBLIC_API_URL;
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
    // 해당부분을 변수에 저장해놓고 사용하면 매번 DB에 접근하는 코드를 실행 하지 않아도 됨.
}
export { connectDB }
