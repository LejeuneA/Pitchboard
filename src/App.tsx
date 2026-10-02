import { useState } from 'react'
import { freelanceRecords } from './data/freelanceRecords'
import FreelanceRecordCard from './components/FreelanceRecordCard'
import { careerEvidenceRecords } from './data/careerEvidenceRecords'
import CareerEvidenceCard from './components/CareerEvidenceCard'
import { jobApplicationRecords } from './data/jobApplicationRecords'
import JobApplicationCard from './components/JobApplicationCard'
import { followUpRecords } from './data/followUpRecords'
import FollowUpCard from './components/FollowUpCard'
import type { FollowUp } from './types/FollowUp'
import type { SubmitEvent } from 'react'





function App() {

  const [records, setRecords] = useState(freelanceRecords)
  const [evidences, setEvidences] = useState(careerEvidenceRecords)
  const [applications, setApplications] = useState(jobApplicationRecords)
  const [follows, setFollows] = useState(followUpRecords)
  const [dueDate, setDueDate] = useState('')
  const [title, setTitle] = useState('')
  const [relatedTo, setRelatedTo] = useState('')
  const [source, setSource] = useState<FollowUp['source'] | ''>('')

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

  function handleFollowUpDelete(id: number) {
    const newFollowUps = follows.filter((follow) => follow.id !== id)
    setFollows(newFollowUps)
  }

  function handleFollowUpSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    if (dueDate === '' || title === '' || relatedTo === '' || source === '') {
      return
    }

    const newFollowUp: FollowUp = {
      id: Date.now(),
      dueDate,
      title,
      relatedTo,
      source,
      status: 'Pending'
    }

    const newFollowUps = [...follows, newFollowUp]
    setFollows(newFollowUps)

    setDueDate('')
    setTitle('')
    setRelatedTo('')
    setSource('')
  }

  function handleFollowUpDone(id: number) {
    const newFollowUps = follows.map((follow): FollowUp => {
      if (follow.id === id) {
        return {
          ...follow,
          status: 'Done'
        }
      }

      return follow
    })

    setFollows(newFollowUps)
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

      {follows.map((follow) =>
        <div key={follow.id}>
          <FollowUpCard item={follow} onDelete={handleFollowUpDelete} />
        </div>
      )}

      <form onSubmit={handleFollowUpSubmit}>
        <input type="text" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        <input type="text" value={relatedTo} onChange={(event) => setRelatedTo(event.target.value)} />
        <select
          value={source}
          onChange={(event) => {
            const value = event.target.value

            if (value === 'Job Application' || value === 'Freelance') {
              setSource(value)
            }
          }}
        >
          <option value="Job Application">Job Application</option>
          <option value="Freelance">Freelance</option>
        </select>
        <button type='submit'>Add</button>
      </form >

    </>
  )
}

export default App
