import Card from './shared/Card'

export default function FeedbackForm() {
  return (
    <Card>
        <form>
          <h2>How do you Rate our Service</h2>
          <div className='input-group'>
            <input type='text' placeholder='Write your Review' />
            <button type='submit'>send</button>
          </div>
        </form>
    </Card>
  )
} 
