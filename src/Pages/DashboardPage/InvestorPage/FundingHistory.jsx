import React from 'react'
import { FundingHistory_contianer } from "./FundingHistoryStyle"
import FundingGoals from '../../../Components/FundingGoals'
import FundActivity from '../../../Components/FundActivity'
const FundingHistory = () => {
  return (
    <FundingHistory_contianer>
      <div className='funding_wrapper'>
            <h1>Funding History</h1>
            <p>Track your investments and returns</p>
        </div>
        <FundingGoals />
        <div className='read_unread'>
            <div className='active'>Active (2)</div>
            <div className='pending'>Pending (0)</div>
            <div className='completed'>Completed (0)</div>
        </div>
        <FundActivity />
    </FundingHistory_contianer>
  )
}

export default FundingHistory
