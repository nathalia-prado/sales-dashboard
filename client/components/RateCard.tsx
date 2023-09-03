import { Rating } from "@mui/material"
import { RateData } from "./utils/useRateData"

function RateCard({cardInfo} : {cardInfo: RateData}) {
    
    return (
      <div className="rate-card-div">
        <ul className="rate-card-ul">
          <li className="rate-card-li">
            <img className="rate-card-img" src={`assets/${cardInfo.employeePhoto}`} alt={`Employee ${cardInfo.employeeName}`} />
          </li>
          <li className="rate-card-li rate-card-li-name">
            <p className="rate-card-p">{cardInfo.employeeName}</p>
          </li>
          <li className="rate-card-li">
            <Rating name="simple-controlled" value={cardInfo.averageRate} readOnly={true} precision={0.5} />
          </li>
        </ul>
      </div>
    )
  }
  
  export default RateCard
  