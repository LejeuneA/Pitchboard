import type { FreelanceRecordCardProps } from '../types/FreelanceRecord'

function FreelanceRecordCard(props: FreelanceRecordCardProps) {
  return (
    <div>
      <p>Date: {props.item.date}</p>
      <p>Name: {props.item.name}</p>
      <p>Location: {props.item.location}</p>
      <p>Status: {props.item.status}</p>
      <p>{props.item.entityType}</p>
      <p>{props.item.recordCategory}</p>
    </div>
  )
}

export default FreelanceRecordCard
