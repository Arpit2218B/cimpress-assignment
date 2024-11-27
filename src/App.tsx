import './App.css'
import Button from './components/Button'

function App() {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <p>NORMAL VARIANT</p>
        <p>DISABLED VARIANT</p>
        <p>LOADING VARIANT</p>
        <Button
          text="Dark (with outline)"
          color="dark"
          type="outline"
        />
        <Button
          text="Dark (with outline)"
          color="dark"
          type="outline"
          disable
        />
        <Button
          text="Dark (with outline)"
          color="dark"
          type="outline"
          showLoader
        />
        <Button
          text="Dark"
          color="dark"
        />
        <Button
          text="Dark"
          color="dark"
          disable
        />
        <Button
          text="Dark"
          color="dark"
          showLoader
        />
        <Button
          text="Green (with outline)"
          color="green"
          type="outline"
        />
        <Button
          text="Green (with outline)"
          color="green"
          type="outline"
          disable
        />
        <Button
          text="Green (with outline)"
          color="green"
          type="outline"
          showLoader
        />
        <Button
          text="Green"
          color="green"
        />
        <Button
          text="Green"
          color="green"
          disable
        />
        <Button
          text="Green"
          color="green"
          showLoader
        />
      </div>
    </>
  )
}

export default App
