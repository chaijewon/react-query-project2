import {useQuery} from "@tanstack/react-query";
import {useNavigate,useParams} from "react-router-dom";
import {getCookie,setCookie} from "../util/cookie";
import apiClient from "../../http-commons";
/*
      useQuery : 서버와 연결 => 서버에서 데이터를 전송
      useNavigate : 화면 이동 => history
      useParams : react = 화면 변경시에 데이터 전송값을 받는 경우
      개인 PR : 양적
      => 의심

      /food/detail/1/admin
 */
function FoodDetail(){
    const {fno} = useParams()
    const nav=useNavigate(); // 화면 이동
    // 같은 키 => 내장된 데이터 , 새로운 키 => 서버
    // 서버에서 출력에 필요한 데이터 읽기
    const {isLoading,isError,error,data}=useQuery({
        queryKey:["food-detail",fno],
        queryFn: async ()=>{
            return await apiClient.get(`/food/detail/${fno}`);
        }
    })
    if(isLoading)
        return <h3 className={"text-center"}>서버 데이터 전송 지연...</h3>
    if(isError)
        return <h3 className={"text-center"}>서버 에러 발생:{error} </h3>
    console.log(data)
    setCookie("food"+fno,data.data.poster) // 쿠키 저장
    // 화면 출력
    return (
        <div className={"container"}>
            <div className={"row"}>

            </div>
        </div>
    )
}

export default FoodDetail;