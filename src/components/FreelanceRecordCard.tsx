import type { FreelanceRecordCardProps } from '../types/FreelanceRecord'

function FreelanceRecordCard({ item }: FreelanceRecordCardProps) {
  return (
    <div>
      <p>Date: {item.date}</p>
      <p>Name: {item.name}</p>
      <p>Location: {item.location}</p>
      <p>Status: {item.status}</p>
      <p>{item.entityType}</p>
      <p>{item.recordCategory}</p>
    </div>
  )
}

export default FreelanceRecordCard
