function AppExample(){


    // 1. 사용자의 이름을 입력 받아준다.
    // 2. 혀재 연, 월, 일을 가져온다.
    let today = new Date();
    console.log('today',today)

    let date=today.toLocaleDateString()
    console.log('date',date)

    let month =parseInt(today.getMonth()+1) //0~11 로 들어있음.
    console.log('month',month) 
    // 3. 계절 별 조건 작성
    //(3~5월 : 봄 / 6~8월 : 여름/
    // 9~11월 : 가을 / 12,1,2 : 겨울)
    let season;
    if(parseInt(month/3)===1){
        season="봄"
    }
    else if(parseInt(month/3)===2){
        season="여름"
    }
    else if(parseInt(month/3)===3){
        season="가을"
    }
    else{
        season="겨울"
    }
    //결과 :
    // 2024.7.3. (h1)
    // 수평선 ----
    // 000님 지금은 여름입니다. 좋은 하루 보내세요!(p)
    let name=prompt("이름")
    return(
        <>
        <h1>{date}</h1>
        <hr/>
        <p>{name}님 지금은 {season}입니다. 좋은하루 보내세요!</p>
        
        </>
        

    );
}

export default AppExample;