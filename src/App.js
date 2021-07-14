import logo from './logo.svg';
import './App.css';
import {
  ReactReader,
  ReactReaderStyle,
  EpubViewStyle,
  EpubView,

} from 'react-reader';

function App() {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <p>Epub Reader</p>
      {" "}
      <ReactReader
        url={"/bogoriana.epub"}
        title={"Bogoriana"}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={epubcifi => console.log(epubcifi)}
      />
    </div>
  );
}

export default App;
