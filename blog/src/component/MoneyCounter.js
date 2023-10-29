"use client"
import React, { useState, useEffect } from 'react';

function MoneyCounter() {
  const [money, setMoney] = useState([100, 200, 300]);
  const [summoney, setSummoney] = useState();

  // 페이지 진입 시에 한 번만 실행되는 useEffect
  useEffect(() => {
    const sum = money.reduce((acc, currentValue) => acc + currentValue, 0);
    setSummoney(sum);
  }, []);

  // 페이지를 나갈 때 실행되는 useEffect
  useEffect(() => {
    const handlePageExit = () => {
      alert('창구에 있는 합산된 정보는 사라집니다');
    };

    window.addEventListener('beforeunload', handlePageExit);

    return () => {
      window.removeEventListener('beforeunload', handlePageExit);
    };
  }, []);

  return (
    <div>
      <h1>창구에 있는 돈 합산 결과: {summoney}</h1>
    </div>
  );
}

export default MoneyCounter;
