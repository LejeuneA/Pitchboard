import type { FreelanceRecordCardProps } from '../types/FreelanceRecord'

function FreelanceRecordCard(props: FreelanceRecordCardProps) {
  return (
    <div>
      <p>Name: {props.record.name}</p>
      <p>Status: {props.record.status}</p>
    </div>
  )
}

export default FreelanceRecordCard
