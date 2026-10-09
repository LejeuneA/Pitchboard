import { useState } from 'react'
import FreelanceSection from './sections/FreelanceSection'
import FollowUpSection from './sections/FollowUpSection'
import { careerEvidenceRecords } from './data/careerEvidenceRecords'
import CareerEvidenceCard from './components/CareerEvidenceCard'
import { jobApplicationRecords } from './data/jobApplicationRecords'
import JobApplicationCard from './components/JobApplicationCard'
import type { SubmitEvent } from 'react'


function App() {


  const [evidences, setEvidences] = useState(careerEvidenceRecords)
  const [applications, setApplications] = useState(jobApplicationRecords)

  const [activeSection, setActiveSection] = useState<'Freelance' | 'Jobs' | 'FollowUps' | 'CareerEvidence'>('FollowUps')


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

      {activeSection === 'Freelance' && <FreelanceSection />}
      {activeSection === 'FollowUps' && <FollowUpSection />}

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

    </>
  )
}


export default App
