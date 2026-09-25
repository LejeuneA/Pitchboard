import { freelanceRecords } from './data/freelanceRecords'
import FreelanceRecordCard from './components/FreelanceRecordCard'
import { useState } from 'react'
import { careerEvidenceRecords } from './data/careerEvidences'




function App() {

  const [records, setRecords] = useState(freelanceRecords)

  function handleDelete(id: number) {
    const newRecords = records.filter((record) => record.id !== id)
    setRecords(newRecords)
  }

  return (
    <>
      <h1>Pitchboard</h1>

      {records.map((record) =>
        <div key={record.id}>
          <FreelanceRecordCard item={record} onDelete={handleDelete} />
        </div>
      )}
    </>
  )
}

export default App
