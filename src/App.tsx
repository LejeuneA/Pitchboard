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
  const [followUpFilter, setFollowUpFilter] = useState<'All' | 'Pending' | 'Done'>('All')
  const [editingFollowUpId, setEditingFollowUpId] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<'Freelance' | 'Jobs' | 'FollowUps' | 'CareerEvidence'>('FollowUps')



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

    if (editingFollowUpId !== null) {
      const updatedFollowUps = follows.map((follow): FollowUp => {
        if (follow.id === editingFollowUpId) {
          return {
            ...follow,
            dueDate,
            title,
            relatedTo,
            source
          }
        }

        return follow
      })

      setFollows(updatedFollowUps)
      setEditingFollowUpId(null)
      setDueDate('')
      setTitle('')
      setRelatedTo('')
      setSource('')
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
          status: follow.status === 'Pending' ? 'Done' : 'Pending'
        }
      }

      return follow
    })

    setFollows(newFollowUps)
  }

  const visibleFollowUps =
    followUpFilter === 'All'
      ? follows
      : followUpFilter === 'Pending' ? follows.filter((follow) => follow.status === 'Pending')
        : follows.filter((follow) => follow.status === 'Done')

  function handleFollowUpEdit(id: number) {
    const selectedFollowUp = follows.find((follow) => follow.id === id)

    if (!selectedFollowUp) {
      return
    }

    setEditingFollowUpId(id)
    setDueDate(selectedFollowUp.dueDate)
    setTitle(selectedFollowUp.title)
    setRelatedTo(selectedFollowUp.relatedTo)
    setSource(selectedFollowUp.source)
  }

  function handleFollowUpCancelEdit() {
    setEditingFollowUpId(null)
    setDueDate('')
    setTitle('')
    setRelatedTo('')
    setSource('')

  }



  return (
    <>
      <h1>Pitchboard</h1>

      <div className="section-nav">
        <button className={activeSection === 'FollowUps' ? "nav-followups is-active" : 'nav-followups'}
          type="button"
          onClick={() => setActiveSection('FollowUps')}
        >
          Follow Up
        </button>

        <button className={activeSection === 'Freelance' ? "nav-freelance is-active" : 'nav-freelance'}
          type="button"
          onClick={() => setActiveSection('Freelance')}
        >
          Freelance
        </button>

        <button className={activeSection === 'Jobs' ? "nav-jobs is-active" : 'nav-jobs'}
          type="button"
          onClick={() => setActiveSection('Jobs')}
        >
          Job Applications
        </button>

        <button className={activeSection === 'CareerEvidence' ? "nav-career is-active" : 'nav-career'}
          type="button"
          onClick={() => setActiveSection('CareerEvidence')}
        >
          Career Evidence
        </button>
      </div>

      {
        activeSection === 'Freelance' && (
          records.map((record) =>
            <div key={record.id}>
              <FreelanceRecordCard item={record} onDelete={handleFreelanceDelete} />
            </div>
          ))
      }

      {
        activeSection === 'CareerEvidence' && (
          evidences.map((evidence) =>
            <div key={evidence.id}>
              <CareerEvidenceCard item={evidence} onDelete={handleCareerDelete} />
            </div>
          ))
      }

      {
        activeSection === 'Jobs' && (
          applications.map((application) =>
            <div key={application.id}>
              <JobApplicationCard item={application} onDelete={handleJobDelete} />
            </div>
          ))
      }

      {
        activeSection === 'FollowUps' && (
          <>
            <div className="follow-up-filters">
              <button
                type="button"
                onClick={() => setFollowUpFilter('All')}
              >
                All
              </button>

              <button
                type="button"
                onClick={() => setFollowUpFilter('Pending')}
              >
                Pending
              </button>

              <button
                type="button"
                onClick={() => setFollowUpFilter('Done')}
              >
                Done
              </button>
            </div>

            {
              visibleFollowUps.map((follow) =>
                <div key={follow.id}>
                  <FollowUpCard item={follow} onDelete={handleFollowUpDelete} onDone={handleFollowUpDone} onEdit={handleFollowUpEdit} />
                </div>
              )
            }

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
                <option value="" disabled>Select source</option>
                <option value="Job Application">Job Application</option>
                <option value="Freelance">Freelance</option>
              </select>
              <button type='submit'> {editingFollowUpId !== null ? 'Save Changes' : 'Add'} </button>
              {editingFollowUpId !== null && (
                <button type="button" onClick={handleFollowUpCancelEdit}>
                  Cancel
                </button>
              )}

            </form >
          </>
        )
      }
    </>
  )
}


export default App
