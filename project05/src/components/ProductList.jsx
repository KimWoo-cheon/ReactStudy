import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import PropductItem from './ProductItem'

const ProductList = ({list, setList}) => {

    // 1. App.js에서 props로 보내준 list와 setList를 받아줄 것
    // 2. axios를 통해 ★배열★을 list 안에 세팅
    // 3. 세팅된 list를 통해 map 함수로 ProductItem 을 상품 개수만큼 나열해보자.




    useEffect(()=>{
        //1. axios 설치(npm)
        // 2. import로 axios 수입
        // 3. get 방식으로 bestlist.json 데이터를 가져오겠다.
        //  **힌트 : 전문제에서 외부 주소만 사용을 해봤는데,
                // 이번 bestlist.json <- 얘도 본인의 주소를 가지고 있음
                // 4. 잘 가지고 왔으면, console창에 가져온 json을 캠쳐해서 단톡방
                // axios 참고자료 project 03 -> src ->example -> Ex14.jsx
                axios
                .get(`bestlist.json`)
                .then(res=>{
                    
                    // console.log(res.data.list)
                    setList(res.data.list)
                    // console.log(list)
                   
            
            
                })
                .catch(err => {
                    console.log('err',err)
                }) 

                
    },[])
  return (
    
    <div className='list-container'>
      {list.map(item=><PropductItem item={item} key={item.no}/>)}
    </div>
  )
}

export default ProductList
