import { React } from 'react'
import { useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const ProductDetail = ({ list }) => {

    // list 에서 div를 클릭했을 때, 해당 아이템의 고유번호를 넘겨줬다
    // detail/ 고유번호 => detail/:num
    // >> useParams의 num안에 고유번호 존재
    const {num}  = useParams()
    console.log('내가 받아온 숫자', num)
    const nav = useNavigate()

    const linkStyle = {
        textDecoration: 'none',
        color: 'navy'
    }

    return (
        <div className='list-container'>
            
            <div className='detail-item'>
                <img height="45%" src={list.find(item=>item.no==num).imgSrc}></img>
                <h4>{list.find(item=>item.no==num).name}</h4>

                <span>country{'  '}<img  width="20px" src={list.find(item=>item.no==num).country}></img><br/></span>
                    <span>
                    
                    club{'  '}<img width="20px"  src={list.find(item=>item.no==num).club}></img><br/>
                   </span>
                    <span> Age : {list.find(item=>item.no==num).Age}</span>
                 
                
                <span>{list.find(item=>item.no==num).position}</span>
               

                <h4>
                <span>{list.find(item=>item.no==num).price}</span>
                </h4>


                <Link to="/list"> List </Link> <Link to="/"> Main </Link>
                <div><button className='left-button' onClick={()=>{parseInt(num)>1 && nav(`/detail/${parseInt(num)-1}`)}}>◀</button></div>
            <div><button className='right-button' onClick={()=>{parseInt(num)<9 && nav(`/detail/${parseInt(num)+1}`)}}>▶</button></div>
            </div>
        </div>
    )
}

export default ProductDetail