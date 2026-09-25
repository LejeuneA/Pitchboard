import { useState, type Key } from 'react'
import { freelanceRecords } from './data/freelanceRecords'
import FreelanceRecordCard from './components/FreelanceRecordCard'
import { careerEvidenceRecords } from './data/careerEvidenceRecords'
import CareerEvidenceCard from './components/CareerEvidenceCard'
import { jobApplicationRecords } from './data/jobApplicationRecords'
import JobApplicationCard from './components/JobApplicationCard.tsx'




function App() {

  const [records, setRecords] = useState(freelanceRecords)
  const [evidences, setEvidences] = useState(careerEvidenceRecords)
  const [applications, setApplications] = useState(jobApplicationRecords)

  function handleFreelanceDelete(id: number) {
    const newRecords = records.filter((record) => record.id !== id)
    setRecords(newRecords)
  }

  function handleCareerDelete(id: number) {
    const newEvidences = evidences.filter((evidence) => evidence.id !== id)
    setEvidences(newEvidences)
  }


  function handleJobDelete(id: number) {
    const newApplications = applications.filter((application) => application.id !== id)
    setApplications(newApplications)
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

      {applications.map((application) =>
        <div key={application.id}>
          <JobApplicationCard item={application} onDelete={handleJobDelete} />
        </div>
      )}

    </>
  )
}

export default App
