import { useState } from 'react'
import type { FreelanceRecord } from '../types/FreelanceRecord'
import { freelanceRecords } from '../data/freelanceRecords'
import FreelanceRecordCard from '../components/FreelanceRecordCard'
import type { SubmitEvent } from 'react'


function FreelanceSection() {
  const [records, setRecords] = useState(freelanceRecords)
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [url, setUrl] = useState('')
  const [entityType, setEntityType] = useState<FreelanceRecord['entityType'] | ''>('')
  const [recordCategory, setRecordCategory] = useState<FreelanceRecord['recordCategory'] | ''>('')
  const [status, setStatus] = useState('')
  const [freelanceRecordFilter, setFreelanceRecordFilter] = useState<'All' | 'Application' | 'Partner Lead'>('All')
  const [editingFreelanceRecordId, setEditingFreelanceRecordId] = useState<number | null>(null)

  function handleFreelanceDelete(id: number) {
    const newRecords = records.filter((record) => record.id !== id)
    setRecords(newRecords)
  }

  function handleFreelanceRecordsSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    if (date === '' || name === '' || entityType === '' || recordCategory === '' || status === '') {
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
      date,
      name,
      location,
      url,
      entityType,
      recordCategory,
      status
    }

    const newFreelanceRecords = [...records, newFreelanceRecord]
    setRecords(newFreelanceRecords)

    setDate('')
    setName('')
    setLocation('')
    setUrl('')
    setEntityType('')
    setRecordCategory('')
    setStatus('')


  }

  const visibleFreelanceRecords =
    freelanceRecordFilter === 'All'
      ? records
      : freelanceRecordFilter === 'Application' ? records.filter((record) => record.recordCategory === 'Application')
        : records.filter((record) => record.recordCategory === 'Partner Lead')

  function handleFreelanceRecordEdit(id: number) {
    const selectedFreelanceRecord = records.find((record) => record.id === id)

    if (!selectedFreelanceRecord) {
      return
    }

    setEditingFreelanceRecordId(id)
    setDate(selectedFreelanceRecord.date)
    setName(selectedFreelanceRecord.name)
    setLocation(selectedFreelanceRecord.location ?? '')
    setUrl(selectedFreelanceRecord.url ?? '')
    setEntityType(selectedFreelanceRecord.entityType)
    setRecordCategory(selectedFreelanceRecord.recordCategory)
    setStatus(selectedFreelanceRecord.status)

  }

  function handleFreelanceCancelEdit() {
    setEditingFreelanceRecordId(null)
    setDate('')
    setName('')
    setLocation('')
    setUrl('')
    setEntityType('')
    setRecordCategory('')
    setStatus('')

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

      {activeSection === 'Freelance' && (
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
              onClick={() => setFreelanceRecordFilter('Application')}
            >
              Application
            </button>

            <button
              type="button"
              onClick={() => setFreelanceRecordFilter('Partner Lead')}
            >
              Partner Lead
            </button>
          </div>

          {
            visibleFreelanceRecords.map((record) =>
              <div key={record.id}>
                <FreelanceRecordCard item={record} onDelete={handleFreelanceDelete} onEdit={handleFreelanceRecordEdit} />
              </div>
            )
          }

          <form onSubmit={handleFreelanceRecordsSubmit}>
            <label>
              Date
              <input type="text" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>

            <label>
              Name
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>

            <label>
              Location
              <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
            </label>

            <label>
              Website
              <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
            </label>

            <label>
              Status
              <input type="text" value={status} onChange={(event) => setStatus(event.target.value)} />
            </label>

            <label>
              Entity Type
              <select
                value={entityType}
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
            </label>

            <label>
              Category
              <select
                value={recordCategory}
                onChange={(event) => {
                  const value = event.target.value

                  if (value === 'Application' || value === 'Partner Lead') {
                    setRecordCategory(value)
                  }
                }}
              >
                <option value="" disabled>Select category</option>
                <option value="Application">Application</option>
                <option value="Partner Lead">Partner Lead</option>
              </select>
            </label>

            <div className="form-actions">
              <button type='submit'> {editingFreelanceRecordId !== null ? 'Save Changes' : 'Add'} </button>
              {editingFreelanceRecordId !== null && (
                <button type="button" onClick={handleFreelanceCancelEdit}>
                  Cancel
                </button>
              )}
            </div>

          </form >
        </>
      )
      }
    </>
  )
}

export default FreelanceSection
