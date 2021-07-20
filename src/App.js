import { ReactReader } from 'react-reader';



function App() {

const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title')
const epub_file = urlParams.get('pdfName');

  return (
    <div style = {{ height:500, width: "100%"}}>
    <div style={{ position: "relative", height: "100%" }}>
      {" "}
    
      <ReactReader
        url={"https://ebook.codeafrica.co.tz//api/api.php?epub_file=" + epub_file}
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
//https://ebook.codeafrica.co.tz/