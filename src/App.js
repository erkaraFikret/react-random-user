import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [profileNeme, setProfileName] = useState("")
  const [profileCell, setProfileCell] = useState("")
  const [profileImage, setProfileImage] = useState("")
  const [profileEmail, setProfileEmail] = useState("")

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/")
      setProfileCell(res.data.results[0].cell)
      setProfileImage(res.data.results[0].picture.large)
      setProfileEmail(res.data.results[0].email)
      setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`)
    } catch (error) {
      console.log("error")
    }
  }

  return (
    <div className="App">
      <div className='profileContainer'>
        <h1>Random User</h1>
        <hr />
        <img src={profileImage} alt="" />
        <h1>{profileNeme}</h1>
        <p>{profileCell}</p>
        <p>{profileEmail}</p>
        <button onClick={profileData}>New User</button>
        <p>{profileNeme}</p>
      </div>
    </div>
  );
}

export default App;
