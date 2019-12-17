import React from 'react'

const Maxim = props => {
    return (
        <div>
            <p>探すのに時があり</p>
            <p>捨てるのに時がある</p>
        </div>
    )
}

const css1 = {
    "color": 'red',
    "background-color": '#f0f0ff',
    "font-size": '2em'
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return <Maxim />
  }
}

export default App
