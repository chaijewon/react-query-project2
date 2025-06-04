import {BrowserRouter as Router,Routes,Route} from "react-router";
import {Fragment} from "react";
import FoodList from "./components/food/FoodList";
import InfoList from "./components/info/InfoList";
// <FoodList/> => return에 설정한 HTML을 받는다 => 메소드 호출
function App() {
  return (
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<FoodList/>} />
            <Route path="/info/list" element={<InfoList/>} />
          </Routes>
        </Router>
      </Fragment>
  );
}

export default App;
