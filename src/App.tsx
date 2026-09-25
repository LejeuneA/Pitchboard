import { freelanceRecords } from './data/freelanceRecords'
import FreelanceRecordCard from './components/FreelanceRecordCard'
import { useState } from 'react'
import { careerEvidenceRecords } from './data/careerEvidenceRecords'
import CareerEvidenceCard from './components/CareerEvidenceCard'




function App() {

  const [records, setRecords] = useState(freelanceRecords)
  const [evidences, setEvidences] = useState(careerEvidenceRecords)

  function handleFreelanceDelete(id: number) {
    const newRecords = records.filter((record) => record.id !== id)
    setRecords(newRecords)
  }

  function handleCareerDelete(id: number) {
    const newEvidences = evidences.filter((evidence) => evidence.id !== id)
    setEvidences(newEvidences)
  }

  return (
    <>
      <h1>Pitchboard</h1>

      {records.map((record) =>
        <div key={record.id}>
          <FreelanceRecordCard item={record} onDelete={handleFreelanceDelete} />
        </div>
      )}

      {evidences.map((evidence) =>
        <div key={evidence.id}>
          <CareerEvidenceCard item={evidence} onDelete={handleCareerDelete} />
        </div>
      )}

    </>
  )
}

export default App
