import React from 'react';

const page = () => {
    const market = [
        {
          category: '생선',
          items: [
            { name: '고등어', price: 1000 },
            { name: '갈치', price: 2000 },
            { name: '대게', price: 3000 },
            { name: '연어', price: 4000 },
            { name: '삼치', price: 2000 },
          ],
        },
        {
          category: '과일',
          items: [
            { name: '사과', price: 2000 },
            { name: '멜론', price: 3000 },
            { name: '포도', price: 6000 },
            { name: '복숭아', price: 2000 },
          ],
        },
      ];
      // JSON 데이터 출력
      console.log(JSON.stringify(market, null, 2));
    return (
        <div>
            {JSON.stringify(market, null, 2)}
        </div>
    );
};

export default page;