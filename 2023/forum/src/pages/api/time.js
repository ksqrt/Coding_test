export default function handler(req,res) {
    if(req.method == "GET") {
        // 현재 날짜와 시간을 가져오기
        const currentDate = new Date();

        // 시, 분, 초 추출
        const hours = currentDate.getHours().toString().padStart(2, '0'); // 두 자릿수로 맞추기 위해 padStart 사용
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');

        // 문자열로 변환
        const currentTimeString = `${hours}:${minutes}:${seconds}`;

        console.log(currentTimeString); // 예: "14:25:08"

        return res.status(200).json(currentTimeString)
    }
}