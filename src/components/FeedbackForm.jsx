import {useState} from 'react'
import Card from './shared/Card'

export default function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
        <form>
          <h2>How do you Rate our Service</h2>
          <div className='input-group'>
            <input onChange={handleTextChange} type='text' placeholder='Write your Review' value={text}/>
            <button type='submit'>send</button>
          </div>
        </form>
    </Card>
  )
} 
