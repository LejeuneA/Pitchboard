import { freelanceRecords } from './data/freelanceRecords'
import FreelanceRecordCard from './components/FreelanceRecordCard'
import { useState } from 'react'



function App() {

  const [records, setRecords] = useState(freelanceRecords)

  function handleDelete() {
    setRecords((records))
    records.filter((record) => record.id !== 10)
  }

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
