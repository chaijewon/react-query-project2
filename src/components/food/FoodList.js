import {useState,Fragment} from "react";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import apiClient from "../../http-commons";
/*
    3버전 : react-query
    4버전 : tanstack-query
           서버로부터 데이터 읽기 / 데이터 캐싱 , 캐시 제어
            => 효율적으로 관리할 수 있게 만든 라이브러리
            => react-query보다 확장성이 좋다
               -----------> vue , next , nuxt
    기능
     1. 데이터 읽기 / 저장 기능 (캐싱)
     2. 동일 요청시에 중복 제거
     3. 새로운 데이터 유지
     4. 네트워트 재연결 , 요청 실패시에 자동 갱신

     useEffect(()=>{

     },[])

     => queryKey:[]
        queryFn
        -------- 중복 제거 , 재사용 , 컴포넌트 기반 Front

     => react 가능자 : react , redux , react-query , javascript
     => spring 가능자 : java , jsp , mybatis ... spring

     => return에 작성하는 HTML
                        -----
                        JSX => JavaScript + XML
                        문법 => XML
                        -----------
                        1. 한개의 Root 태그 사용
                          --------------------
                          CSS의 문제
                          --------- 임시 루트
                           <> </>
                           <Fragment>
                        2. 여는 태그 = 닫는 태그가 일치
                           계층 구조
                           단독태그 : <br/> <input/> <img/> <hr/>
                        3. 속성값 : 반드시 ""
                        4. 태그는 소문자 사용 (태그명,속성명)
                        5. 함수명 / 클래스명 => 대문자 시작
     => 유지 변수 : useState
                  ----------
                  const [변수 , set변수]=useState(초기값)
 */
function FoodList() {
    // 반드시 return을 포함 => HTML을 전송 => index.html에 출력
    const [curpage, setCurpage] = useState(1);
    const {isLoading, isError,error,data} = useQuery({
          queryKey:["food-list",curpage],
          queryFn: async (query) => {
              return await apiClient.get(`/food/list/${curpage}`);
          }
    });
    if(isLoading)
        return <h3 className={"text-center"}>서버 데이터 전송 지연...</h3>
    if(isError)
        return <h3 className={"text-center"}>서버 에러 발생:{error} </h3>

    const food_list = data.data.list
    console.log(data)
    return (
        <div className="container">
            <div className="row">
                {
                     food_list.map((food, index) =>
                         <div className="col-md-3" key={index}>
                             <div className="thumbnail">
                                 <a href="#">
                                     <img src={"https://www.menupan.com"+food.poster} style={{"width":"230px","height":"130px"}} />
                                     <div className="caption">
                                         <p>{food.name}</p>
                                     </div>
                                 </a>
                             </div>
                         </div>
                     )
                }
            </div>
        </div>
    )
}

export default FoodList;

