import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

export default function FeedbackForm() {
  const [text, setText] = useState('')
  const [Rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be atleast 10 characters')
      setBtnDisabled(true)
    }else {
      setMessage(null)
      setBtnDisabled(false)
    }
    
    setText(e.target.value)
  }

  return (
    <Card>
        <form>
          <h2>How do you Rate our Service</h2>
          <RatingSelect select={(rating) => setRating(rating)}/>
          <div className='input-group'>
            <input onChange={handleTextChange} type='text' placeholder='Write your Review' value={text}/>
            <Button type='submit' isDisabled={btnDisabled}>SEND</Button>
          </div>

          {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
} 
