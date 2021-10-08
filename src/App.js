import './App.css';
import { useState } from "react";

function App() {

  const [oldlink, setLink] = useState('');
  const [tinylink, getLink] = useState('');


  /*for old link*/
  function reallink(e){  
    setLink(e.target.value);
  }





  // for fetching data from API
  let ans;
  const API = 'https://api.shrtco.de/v2/shorten?url='+oldlink;
  fetch(API)
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    // console.log(data.result.code)
    let slink = data.result.code;
    ans = 'https://shrtco.de/'+slink;
    console.log(ans);
    ans = 'https://shrtco.de/'+slink;
  })
  .catch((err)=>{
    console.log("Please enter a valid link");
  });




  /*for new link*/
  function createTiny(e){
    getLink(
      ans
    );
  }


  // getting data an HTML stuff
  return (
    <div className="app">
      <h2 class="heading">Enter URL here: </h2>
      <input type="text" class="input" onChange={reallink} required></input> {/*reallink used to create function*/}
      
      <button class="submit" onClick={createTiny}>Submit</button>

      <h4>Shorted link: <h6 class="link">{tinylink}</h6> </h4>

      <footer>It may take some time to show the shorted link for the first time<br></br>
        Author: Rida Farhan <br></br>
            <a href="mailto:rida.farhan99@gmail.com">rida.farhan@gmail.com</a><br></br>
            <a href="https://github.com/Ridafarhan99/Tiny-URL">GitHub</a>
            
        </footer>
    </div>
  );
}

export default App;
