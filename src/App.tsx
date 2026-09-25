import { freelanceRecords } from './data/freelanceRecords'
import FreelanceRecordCard from './components/FreelanceRecordCard'
import { useState } from 'react'
import { careerEvidenceRecords } from './data/careerEvidenceRecords'
import CareerEvidenceCard from './components/CareerEvidenceCard'




function App() {

  const [records, setRecords] = useState(freelanceRecords)
  const [evidences, setEvidences] = useState(careerEvidenceRecords)

  function handleDelete(id: number) {
    const newRecords = records.filter((record) => record.id !== id)
    const newEvidences = evidences.filter((evidence) => evidence.id !== id)
    setRecords(newRecords)
    setEvidences(newEvidences)
  }

  return (
    <>
      <h1>Pitchboard</h1>

      {records.map((record) =>
        <div key={record.id}>
          <FreelanceRecordCard item={record} onDelete={handleDelete} />
        </div>
      )}

      {evidences.map((evidence) =>
        <div key={evidence.id}>
          <CareerEvidenceCard item={evidence} onDelete={handleDelete} />
        </div>
      )}

    </>
  )
}

export default App
