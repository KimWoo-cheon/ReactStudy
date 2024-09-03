// [Case 1]
// import React from 'react'

// const MemberBox = (props) => {
//   return (
//     <div>
//       <h2>안녕하세요 {props.team}의 {props.name}입니다.</h2>
//     </div>
//   )
// }

// export default MemberBox


// [Case2] 객체 비구조화 할당
import React from 'react'

const MemberBox = ({team,name}) => { // 중괄호 필수

    let user ={
        id : 'abc',
        pw : 1234

    }
    console.log(user.id+"님 환영합니다.")
    let {id,pw} ={
        id : 'abc',
        pw : 1234

    }
    console.log(id+"님 환영합니다. 비밀번호는"+pw)
  return (
    <div>
      안녕하세요. {team}팀의 {name}입니다.
    </div>
  )
}

export default MemberBox
