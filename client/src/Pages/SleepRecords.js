import React from 'react'
import SleepRecord from '../Components.js/SleepRecord'

 function SleepRecords({sleepRecords, recommendations, onHandleUpdate, onHandleDelete}) {
  
  const sleepRecordsList = sleepRecords?.map((sleepRecord)=> <SleepRecord 
      key={sleepRecord.id}
      sleepRecord={sleepRecord} 
      recommendations={recommendations} 
      onHandleUpdate={onHandleUpdate} 
      onHandleDelete={onHandleDelete}
  />)
  
    return (
    <div>
    <h2><u>Sleep Records</u></h2>
    {
      sleepRecordsList
    }
   
    </div>
  )
}

export default SleepRecords