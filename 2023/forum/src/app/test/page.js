"use client"
import React, { useState, useEffect, useRef} from 'react';

function MoneyCounter() {
  const [money, setMoney] = useState([100, 200, 300]);
  const isMounted = useRef(false);

  
  useEffect(() => {

    // 나갈떄 js 기능 추가했음...
    window.addEventListener('beforeunload', function (e) {
      const confirmationMessage = '창구에 있는 합산된 정보는 사라집니다. 정말 떠나시겠습니까?';
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    });
    // 돈 합산하기
    const sum = money.reduce((acc, currentValue) => acc + currentValue, 0);
    setMoney(sum);
  }, [])

  return (
    <div>
      <h1>창구에 있는 돈 합산 결과: {money}</h1>
    </div>
  );
}

export default MoneyCounter;