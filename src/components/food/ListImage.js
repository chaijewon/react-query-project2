import {Link} from "react-router-dom";

const ListImage=({name,poster,index})=>{
    return (
        <div className="col-md-3" key={index}>
            <div className="thumbnail">
                <a href="#">
                    <img src={poster} style={{"width":"230px","height":"130px"}} />
                    <div className="caption">
                        <p>{name}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default ListImage;