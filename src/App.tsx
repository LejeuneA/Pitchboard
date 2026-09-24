import { freelanceRecords } from './data/freelanceRecords'

function App() {

  return (
    <>
      <h1>Pitchboard</h1>

      {freelanceRecords.map((record) =>
        <div key={record.id}>
          <p><FreelanceRecordCard /></p>
        </div>)}
    </>
  )
}

export default App
