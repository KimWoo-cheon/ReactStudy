import React from 'react';
import CardBox from '../components/CardBox';
import data from '../ex06list.json';

const Ex06 = () => {
  // data.result가 배열이라고 가정
  const cardData = data.result;
  const filterData= data.result.filter(item => item.birthYear<=1994)

  return (
    <>
    <div>
      <h1>Map 실습</h1>
      <div >
        <CardBox cardData={cardData} />
      </div>
    </div>
    <br/>
    <h1>Filter 함수 실습</h1>
    <p>1994년생과 나이가 같거나, 그보다 나이가 많은 사람만 출력하세요.</p>
    <div >
        <CardBox cardData={filterData} />
    </div>
    </>
  );
};

export default Ex06;
