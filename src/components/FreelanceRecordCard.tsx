import type { FreelanceRecordCardProps } from '../types/FreelanceRecord'

function FreelanceRecordCard(props: FreelanceRecordCardProps) {
  return (
    <div>
      <p>Date: {props.record.date}</p>
      <p>Name: {props.record.name}</p>
      <p>Name: {props.record.location}</p>
      <p>Status: {props.record.status}</p>
      <p>{props.record.entityType = 'Company'}</p>
      <p>{props.record.recordCategory = 'Application'}</p>
    </div>
  )
}

export default FreelanceRecordCard
