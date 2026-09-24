import type { FreelanceRecordCardProps } from '../types/FreelanceRecord'

function FreelanceRecordCard(props: FreelanceRecordCardProps) {
  return (
    <p>
      Name: {props.record.name}
      Status: {props.record.statuts} </p>
  )
}


export default FreelanceRecordCard
