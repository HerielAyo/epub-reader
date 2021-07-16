import { ReactReader } from 'react-reader';



function App() {

const urlParams = new URLSearchParams(window.location.search);
const pdfName = urlParams.get('pdfName');
const title = urlParams.get('title')

  return (
    <div style = {{ height:500, width: "100%"}}>
    <div style={{ position: "relative", height: "100%" }}>
      {" "}
    
      <ReactReader 
        url={"/upload/epub/"+ pdfName
      }
        title={title}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={epubcifi => console.log(epubcifi)}
        tocChanged={toc => console.log(toc)}
      />
    </div>
    </div>
  );
}

export default App;
