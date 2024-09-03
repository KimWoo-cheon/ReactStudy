import React from 'react'
import { useEffect } from 'react'
import '../style/ex14.css'
import axios from 'axios'
import {Button, ButtonGroup} from 'react-bootstrap'
import { useState } from 'react'

const Ex14 = () => {
   let cityList = ['Mokpo','Madrid','Liverpool','Barcelona','Milano','Vancouver','Sydney','Cairo'] 
   const [temp,setTemp] = useState()
   const [city,setCity] = useState('Mokpo')
   const [cloud, setCloud] = useState()
   const btnCk = (event) => {
    setCity(event.target.innerText);
  };
    const getData = ()=>{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=603aa562f93c1b6e5fb4e7596aa820d5`
        
        // React 비동기통신 axios
        // 서버와 데이터를 주고 받을 때 사용하는 API
        // 장점 : 기능이 다양하고 응답이 쉬움

        //1. 설치 : npm i axios
        // 서버 끄고(ctrl+c 두번) > 설치 > npm start
        //2. import axios from 'axios'
        //3. axios.방식(url주소)
        //          .then(함수)
      



        /* 만약 React에서 서버로 데이터를 보내주고 싶다면?  
        let url = "서버주소"
        axios.post(url,{
            id : 'abc',
            pw : 1234
            })
        .then((res)=>{
            // 매개변수에는 서버에서 보낸 return값이 넘오온다
            
            })
        .catch(()=>{})
        
        */

            

        axios
        .get(url)
        .then(res =>{
            console.log('data',res.data)
            // axios를 통해서 가져온 정보는 매개변수로 데이터를 사용하기 때문에
            // then 안에서만 'res'를 쓸수 있다
            // => 그렇기 때문에 유용한 정보를 state에 따로 저장
            console.log('온도', Math.round((res.data.main.temp-273)*10)/10)
            setTemp(Math.round((res.data.main.temp-273)*10)/10)

            // 미션1. 도시이름을 화면에 띄우자(city, setCity)
            console.log('도시이름', res.data.name)
            // setCity(res.data.name)

            
            // 미션2. 구름의 양에 따른 날씨를 화면에 띄우자
            // 구름의 양이 90이상이면 매우흐림, 70이상이면 흐림,
            // 50이상이면 약간 흐림, 나머지는 맑음 (cloud, setCloud)
            console.log('구름', res.data.clouds.all)
            if(parseInt(res.data.clouds.all)>=90){
    
                setCloud('매우흐림')
            }else if(parseInt(res.data.clouds.all)>=70){
    
                setCloud('흐림')
            }
            else if(parseInt(res.data.clouds.all)>=50){
    
                setCloud('약간 흐림')
            }else{
                setCloud('맑음')
            }



            

            

            
        })
        .catch(err => {
            console.log('err',err)

        })


    }
    
    useEffect(()=>{
        // API를 통해 데이터를 가지고 올 때 useEffect를 사용
        // 화면이 먼저 뜨고 -> 무거운 데이터를 가져와야
        // 사용자가 빠른 페이지라고 느낌

        getData()


    },[city])
  return (
    <div className='weather-container'>
        <div className='weather-item'>
            <h1>날씨</h1>

            <div className='weather-data'>
                <h2>{city}</h2>
                <h3>{temp}</h3>
                <h4>{cloud}</h4>

            </div>
            <div style={{display:'flex'}} >                
                <ButtonGroup aria-label="Basic example" onClick={btnCk} >
                    {cityList.map(item=> 
                        <Button variant="primary" key={item}>{item}</Button>)}
                   
                
                </ButtonGroup>
            </div>

        </div>

    </div>
    )
    }

export default Ex14
