export default function handler(req, res) {
    if (req.method == 'GET') {
        res.status(200).json()
    }
    if (req.method == 'POST') {
        res.status(200).json({ name: 'POST 방식' })
    }
}