import { freelanceRecords } from './data/freelanceRecords'
import './components/FreelanceRecordCard'

function App() {

  return (
    <>
      <h1>Pitchboard</h1>

      {freelanceRecords.map((record) =>
        <div key={record.id}>
          <FreelanceRecordCard statuts />
        </div>)}
    </>
  )
}

export default App
