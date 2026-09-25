import type { FreelanceRecordCardProps } from '../types/FreelanceRecord'

function FreelanceRecordCard({ item, onDelete }: FreelanceRecordCardProps) {
  return (
    <div>
      <p>Date: {item.date}</p>
      <p>Name: {item.name}</p>
      <p>Location: {item.location}</p>
      <p>Status: {item.status}</p>
      <p>{item.entityType}</p>
      <p>{item.recordCategory}</p>
      <button type='button' onClick={() => onDelete(item.id)}> Delete</button>
    </div >
  )
}

export default FreelanceRecordCard
