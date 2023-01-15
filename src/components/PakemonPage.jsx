import React from 'react'
import PakemonCard from './PakemonCard'
import PakemonDetails from './PakemonDetails'
function PakemonPage() {
    return (
        <div>
            <div className='container'>
               <div className='pakemoncard'>
               <PakemonCard />
               </div>
                
                <div className='pakemondetails'>
                <PakemonDetails />
                </div>
            </div>
        </div>
    )
}

export default PakemonPage
