import React, {useState, useEffect} from 'react'
import './style.css'

export default function Card({ number, suit }) {

  const [color, setColor] = useState("")
  const [suitValue, setSuitValue] = useState("")
  const [numberString, setNumberString] = useState("")
  const [numberValue, setNumberValue] = useState(0)
  const [columnSize, setColumnSize] = useState(0)

  useEffect(() => {
    getSuitSimbol()
    getNumberValue()
  }, [])

  const getNumberValue = () => {
    if (/^[a-zA-Z]+$/.test(number)){
      setNumberString(number[0].toUpperCase())
      setColumnSize(1)
      switch(number[0].toUpperCase()) {
        case 'J':
          setNumberValue(11)
          break
        case 'Q':
          setNumberValue(12)
          break
        case 'K':
          setNumberValue(13)
          break
        case 'A':
          setNumberValue(1)
          break
        default:
          setNumberValue(0)
          break
      }
    } else {
      setNumberString(number)
      setNumberValue(parseInt(number))
      if(number <= 3) {
        setColumnSize(1)
      } else if (number % 2 === 0 && number !== '8' && number !== '10') {
        setColumnSize(2)
      } else {
        setColumnSize(3)
      }
    }
  }

  const getSuitSimbol = () => {
    switch(suit.toLowerCase()) {
      case 'hearts':
        setColor("red")
        setSuitValue(<span>&#9829;</span>)
        break
      case 'diamonds':
        setColor("red")
        setSuitValue(<span>&#9830;</span>)
        break
      case 'clubs':
        setColor("black")
        setSuitValue(<span>&#9827;</span>)
        break
      default:
        setColor("black")
        setSuitValue(<span>&#9824;</span>)
        break
    }
  }

  return (
    <div className={`container ${color}`}>
      <div className="column1">
        <div className="TLNumber">
          {numberString}
          {suitValue}
        </div>        
      </div>

      <div className="column2">
        <div className={`grid-${columnSize}`}>
          {
            [...Array(numberValue)].map((x, i) => 
              numberValue < 11 ?
                <p className="grid-item">{suitValue}</p> :
                <div></div>
            )
          }
        </div>
      </div>

      <div className="column3">
        <div className="BRNumber">
          {numberString}
          {suitValue}
        </div>
      </div>
    </div>
  )
}
