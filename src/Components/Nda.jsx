import React from 'react'
import { ndadata } from "../Config/Data"
import { Nda_container } from './NdaStyle'
const Nda = () => {
  return (
    <Nda_container>
      {ndadata.map((nda, index) =>(
        <div className='ndadata_main' key={index}>
            <div className='nda_top'>
              <div className='ndadata_text'>
                <h3>{nda.ai}</h3>
                <small>{nda.tech}</small>
              </div>
              <div className='download'>
                  <div className='sign_icon'>{nda.icon}{nda.sign}</div>
                  <div className='download_view'>{nda.icon2}{nda.download}</div>
                  <div className='view'>{nda.view}</div>
              </div>
            </div>  
            <div className='nda_bottom'>
              <div className='date'>
               <p> {nda.signed}</p>
               <p><b>{nda.date1}</b></p>
                </div>
              <div className='expiry'>
               <p>{nda.expiry}</p>
               <p> <b>{nda.date2}</b></p>
                </div>
              <div className='active'>
                <p>{nda.status}</p> 
               <p><b><span>{nda.active}</span></b></p>
              </div>
            </div>
        </div>
      ))}
    </Nda_container>
  )
}

export default Nda
