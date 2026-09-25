import type { FreelanceRecordCardProps } from '../types/FreelanceRecord'

function FreelanceRecordCard(props: FreelanceRecordCardProps) {
  return (
    <div>
      <p>Date: {props.record.date}</p>
      <p>Name: {props.record.name}</p>
      <p>Location: {props.record.location}</p>
      <p>Status: {props.record.status}</p>
      <p>{props.record.entityType}</p>
      <p>{props.record.recordCategory}</p>
    </div>
  )
}

export default FreelanceRecordCard
