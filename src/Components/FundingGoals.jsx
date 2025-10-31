import React from 'react'
import { funding } from "../Config/Data"
import { Funding_container } from "./FundingGoalsStyle"
const FundingGoals = () => {
  return (
    <Funding_container>
             {funding.map((funds, index) =>(
        <div className='funding_wrapper' key={index}>
          <div className='total_wrapper'>
              <div className='total'>{funds.tittle}</div>
              <div className='sign'>{funds.icon}</div>
          </div>
          <div className='amount'>{funds.amount}</div>
      </div>
      ))}
    </Funding_container>
  )
}

export default FundingGoals
