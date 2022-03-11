import React, { useState } from 'react'
import './assets/css/app.css'
import { ColorPicker, useColor } from "react-color-palette"
import "react-color-palette/lib/css/styles.css"
import logo from './assets/img/logo.png'

export default function App() {
  const [text, setText] = useState('')
  const [color, setColor] = useColor("hex", '#4400bb')

  return (

    <div className='app'>
      <div className='header'>
        <img src={logo} alt='logo'></img>

      </div>
      <div className='main'>
        <div className='grid'>
          <div className='column'>
            <div className='input'>
              <div className='text-input'>
                <div className='rcp rcp-dark'>
                  <div className='rcp-body'>
                    <div className='rcp-fields'>
                      <div className='rcp-fields-element hex-element'>
                        <input
                          type='text'
                          onChange={e => setText(e.target.value)}
                          className='rcp-fields-element-input'
                          placeholder='Enter text here'
                        >
                        </input>
                        <label className='rcp-fields-element-label'>TEXT</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV hideRGB dark />
              </div>
            </div>
          </div>

          <div className='column'>
            <div className='image'>
              <img src={`https://assets.imgix.net/examples/butterfly.jpg?txt=${text}&blend=${color.hex.substring(1)}&w=fit&txtclr=fff&txtalign=center%2Cmiddle&txtsize=200&bm=normal&balph=50`} alt=''></img>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}