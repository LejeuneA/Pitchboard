import type { FreelanceRecordCardProps } from '../types/FreelanceRecord'

function FreelanceRecordCard({ item, onDelete }: FreelanceRecordCardProps) {
  return (
    <div className="freelance-card">
      <div className="card-information">
        <p>Date: {item.date}</p>
        <p>Name: {item.name}</p>
        <p>Location: {item.location}</p>
        <p>Web Site: {item.url}</p>
        <p>Status: {item.status}</p>
        <p>{item.entityType}</p>
        <p>{item.recordCategory}</p>
      </div>
      <div className="card-actions">
        <button type='button' onClick={() => onDelete(item.id)}> Delete</button>
      </div>
    </div >
  )
}

export default FreelanceRecordCard
