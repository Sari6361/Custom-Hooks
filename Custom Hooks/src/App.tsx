import useTypingEffect from './components/useTypingEffect'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  // const [txt, setTxt] = useState('hehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllo')
  // let [text, isFinished] = useTypingEffect(txt, 300, 4000)
  const heading = [
          '"wow" Tovi you are grate!!',
          'you learn a lot...',
          'I love you!',
          'have a good luck!'
        ];
  const dd = useTypingEffect({values:heading, speedy: 1, rePlay: {loop: true, playBack: 2}})

  return(
    <>
      <h1>{dd}</h1>
    </>
  )
}

export default App;