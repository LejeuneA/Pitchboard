import { freelanceRecords } from './data/freelanceRecords'
import FreelanceRecordCard from './components/FreelanceRecordCard'
import { useState } from 'react'


const [records, setRecords] = useState<freelanceRecords[]>([
])

function App() {
  return (
    <>
      <h1>Pitchboard</h1>

      {records.map((record) =>
        <div key={record.id}>
          <FreelanceRecordCard item={record} />
        </div>
      )}
    </>
  )
}

export default App
