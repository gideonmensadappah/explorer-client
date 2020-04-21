import React from 'react';
import File from './File';
import axios from 'axios';

//const filesList = ['myFile.txt', 'kjsdf xg .txt']

export default function Explorer() {
  const [active, setActive] = React.useState({})
  const [filesList, setFilesList] = React.useState([])

  //get all files
function setFilesListFunc(){
  axios.get('http://localhost:1200/files')
  .then(res => setFilesList(res.data))
  .catch(err => console.log(err))
}

React.useEffect( () => {
    setFilesListFunc()
}, [])

  function onFileClicked(fileName){
    const file = fileName.split('.').slice(0, -1).join('.')
    console.log(file)
    axios.get(`http://localhost:1200/files/${file}`)
    .then(res => {
      res.data.fileName = file
      setActive(res.data)
    })
    .catch(err => console.log(err))
  }

  function deleteFunc(fileName){
   
    const file = fileName.split('.').slice(0, -1).join('.')
    console.log("delete this file: "+file)
    axios.delete(`http://localhost:1200/files/${file}`) .then(ok => {
      setFilesListFunc()
      setActive({})

    }).catch(err => {
      console.log(err)
    })
   
  }

 
  return <div className='explorer'>
  
    <div style={{ width: '100%' }}>
      {filesList.map(f => <File key={f} name={f} onDelete={()=> deleteFunc(f)} onClick={() => onFileClicked(f)} />)}
    </div>
    <aside className={`info ${active.fileName ? 'open' : ''}`}>
      <h3>Info</h3>
      <label>  { active.fileName} </label>
      <div className='content'>
        {active.content}
      </div>
      <h3>Stats</h3>
    { active.fileName ?
      <div>      
            <label>size:</label><span>{active.stats.size}</span><br />
              <label>size:</label><span>21kb</span><br />
            </div>: null

    }
   
    </aside>
  </div>
}
