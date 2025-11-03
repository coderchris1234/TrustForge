import React from 'react'
import { SavedBusiness_container } from "./SavedBusStyle"
import BusinessNewsFeed from '../../../Components/BusinessNewsFeed'
const SavedBusiness = () => {
  return (
    <SavedBusiness_container>
        <div className='wrapper'>
            <h1>Saved Businesses</h1>
            <p>Businesses you’ve bookmarked for later review</p>
        </div>
        <BusinessNewsFeed />
    </SavedBusiness_container>
  )
}

export default SavedBusiness
