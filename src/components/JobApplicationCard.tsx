import type { JobApplicationCardProps } from '../types/JobApplication'


function JobApplicationCard({ item, onDelete }: JobApplicationCardProps) {
  return (
    <div>
      <div className="card-information">
        <p>Date: {item.date}</p>
        <p>Name: {item.name}</p>
        <p>Location: {item.location}</p>
        <p>Web Site: {item.url}</p>
        <p>Employment Type: {item.employmentType}</p>
        <p>Work Mode: {item.workMode}</p>
        <p>Status: {item.status}</p>
      </div>
      <div className="card-actions">
        <button type='button' onClick={() => onDelete(item.id)}> Delete</button>
      </div>
    </div >
  )
}

export default JobApplicationCard
