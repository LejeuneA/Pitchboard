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
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [url, setUrl] = useState('')
  const [entityType, setEntityType] = useState<'Company' | 'Person'>('')
  const [recordCategory, setRecordCategory] = useState<'Application' | 'Partner Lead'>('')
  const [status, setStatus] = useState('')
  const [evidences, setEvidences] = useState(careerEvidenceRecords)
  const [applications, setApplications] = useState(jobApplicationRecords)
  const [follows, setFollows] = useState(followUpRecords)
  const [dueDate, setDueDate] = useState('')
  const [title, setTitle] = useState('')
  const [relatedTo, setRelatedTo] = useState('')
  const [source, setSource] = useState<FollowUp['source'] | ''>('')
  const [followUpFilter, setFollowUpFilter] = useState<'All' | 'Pending' | 'Done'>('All')
  const [editingFollowUpId, setEditingFollowUpId] = useState<number | null>(null)
  const [freelanceRecordFilter, setFreelanceRecordFilter] = useState<'All' | 'Pending' | 'Done'>('All')
  const [editingFreelanceRecordId, setEditingFreelanceRecordId] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<'Freelance' | 'Jobs' | 'FollowUps' | 'CareerEvidence'>('FollowUps')




  function handleCareerDelete(id: number) {
    const newEvidences = evidences.filter((evidence) => evidence.id !== id)
    setEvidences(newEvidences)
  }


  function handleJobDelete(id: number) {
    const newApplications = applications.filter((application) => application.id !== id)
    setApplications(newApplications)
  }

  // Freelance
  function handleFreelanceDelete(id: number) {
    const newRecords = records.filter((record) => record.id !== id)
    setRecords(newRecords)
  }

  function handleFreelanceRecordsSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    if (date === '' || name === '' || location === '' || url === '' || entityType === '' || recordCategory === '' || status === '') {
      return
    }

    if (editingFreelanceRecordId !== null) {
      const updatedFreelanceRecords = records.map((record): FreelanceRecord => {
        if (record.id === editingFreelanceRecordId) {
          return {
            ...record,
            date,
            name,
            location,
            url,
            entityType,
            recordCategory,
            status
          }
        }

        return record
      })

      setRecords(updatedFreelanceRecords)
      setEditingFreelanceRecordId(null)
      setDate('')
      setName('')
      setLocation('')
      setUrl('')
      setEntityType('')
      setRecordCategory('')
      setStatus('')
      return
    }

    const newFreelanceRecord: FreelanceRecord = {
      id: Date.now(),
      name,
      location,
      url,
      entityType,
      recordCategory,
      status: 'Pending'
    }

    const newFreelanceRecords = [...records, newFreelanceRecord]
    setFollows(newFreelanceRecords)

    setDate('')
    setDate('')
    setName('')
    setLocation('')
    setUrl('')
    setEntityType('')
    setRecordCategory('')
    setStatus('')


  }

  function handleFreelanceDone(id: number) {
    const newFreelanceRecords = records.map((record): FreelanceRecord => {
      if (record.id === id) {
        return {
          ...record,
          status: record.status === 'Pending' ? 'Done' : 'Pending'
        }
      }

      return record
    })

    setFollows(newFreelanceRecords)
  }

  const visibleFreelanceRecords =
    freelanceRecordFilter === 'All'
      ? records
      : freelanceRecordFilter === 'Pending' ? records.filter((record) => record.status === 'Pending')
        : follows.filter((record) => record.status === 'Done')

  function handleFreelanceRecordEdit(id: number) {
    const selectedFreelanceRecord = records.find((record) => record.id === id)

    if (!selectedFreelanceRecord) {
      return
    }

    setEditingFreelanceRecordId(id)
    setDate(selectedFreelanceRecord.date)
    setName(selectedFreelanceRecord.name)
    setLocation(selectedFreelanceRecord.location)
    setUrl(selectedFreelanceRecord.url)
    setEntityType(selectedFreelanceRecord.entityType)
    setRecordCategory(selectedFreelanceRecord.recordCategory)
    setStatus(selectedFreelanceRecord.status)

  }

  function handleFreelanceRecordEdit() {
    setEditingFreelanceRecordId(null)
    setDate('')
    setName('')
    setLocation('')
    setUrl('')
    setEntityType('')
    setRecordCategory('')
    setStatus('')

  }



  // Follow Up
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
          <>
            <div className="follow-up-filters">
              <button
                type="button"
                onClick={() => setFreelanceRecordFilter('All')}
              >
                All
              </button>

              <button
                type="button"
                onClick={() => setFreelanceRecordFilter('Pending')}
              >
                Pending
              </button>

              <button
                type="button"
                onClick={() => setFreelanceRecordFilter('Done')}
              >
                Done
              </button>
            </div>

            {
              records.map((record) =>
                <div key={record.id}>
                  <FreelanceRecordCard item={record} onDelete={handleFreelanceDelete} onDone={handleFreelanceDone} onEdit={handleFreelanceEdit} />
                </div>
              )
            }

            <form onSubmit={handleFreelanceRecordsSubmit}>
              <input type="text" value={date} onChange={(event) => setDate(event.target.value)} />
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
              <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
              <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
              <input type="text" value={recordCategory} onChange={(event) => setRecordCategory(event.target.value)} />
              <input type="text" value={status} onChange={(event) => setStatus(event.target.value)} />
              <select
                value={source}
                onChange={(event) => {
                  const value = event.target.value

                  if (value === 'Company' || value === 'Person') {
                    setEntityType(value)
                  }
                }}
              >
                <option value="" disabled>Select type</option>
                <option value="Company">Company</option>
                <option value="Person">Person</option>
              </select>
              <button type='submit'> {editingFollowUpId !== null ? 'Save Changes' : 'Add'} </button>
              {editingFreelanceRecordId !== null && (
                <button type="button" onClick={handleFreelanceRecordEdit}>
                  Cancel
                </button>
              )}

            </form >
          </>
        )
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
