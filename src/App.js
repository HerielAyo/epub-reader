import logo from './logo.svg';
import './App.css';
import queryString from 'query-string'
import { useState  } from 'react';
import {
  ReactReader,
  EpubView 

} from 'react-reader';



function App() {


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('pdfName');
 //const loc = queryString.parse(urlParams)
 console.log(myParam)

  return (
    <div style = {{ height:500, width: "100%"}}>
    <div style={{ position: "relative", height: "100%" }}>
      <p>Epub Reader</p>
      {" "}
    
      <ReactReader 
        // url={"./files/bogoriana.epub"}
        url={"/upload/epub/"+ myParam
      }
        // title={"Alice"}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={epubcifi => console.log(epubcifi)}
        tocChanged={toc => console.log(toc)}
        swipeable = {true}
        showToc = {true}
      />
    </div>
    </div>
  );
}

export default App;
