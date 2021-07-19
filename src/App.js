import { ReactReader } from 'react-reader';



function App() {

const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title')
const pdfName = urlParams.get('pdfName');
console.log('title is '+ title)
console.log('pdf name is '+ pdfName)

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

//"proxy": "http://34.222.32.153/android_ebook_app/admin_panel/android_ebook_app"
export default App;
