import Heading from './components/Heading'
import Item from './components/Item'
import './App.css'




function App() {
  
let title = "Blockbuster deals on computers";

const Items = [
  {
    img: "https://imgs.search.brave.com/ipcIGRkjPsjOdbdoj2vNTS-HvbjWFUGiG2MKIV_ciTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/OTc0NjQ5L3Bob3Rv/L2lzb2xhdGVkLXNo/b3Qtb2Ytd2lyZWxl/c3MtY29tcHV0ZXIt/bW91c2Utb24td2hp/dGUtYmFja2dyb3Vu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9X05GaFBNclgx/aTUzNGZFaERGLWZf/S2RETENwcEo3SEZE/ZFZtMEFXckpRRT0",
    name: "mouse"
      },
  {
    img:"https://imgs.search.brave.com/SfPph_n96FMRnV6al47sCKVy3NuImSEiFoDJlxLf6_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzQv/NzAwLzYxNy9zbWFs/bC9wdXJwbGUtY29t/cHV0ZXIta2V5Ym9h/cmQtaWxsdXN0cmF0/aW9uLWRpZ2l0YWwt/dGVjaG5vbG9neS1p/bnB1dC1kZXZpY2Ut/dmVjdG9yLmpwZw",
    name:"Keyboard"
      },
  {
    img:"https://imgs.search.brave.com/J6M-pcuWb3XEy01OAYPLc3C9AVaDbCKpCqDNoaOzlE0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHAuY29tL2NvbnRl/bnQvZGFtL3NpdGVz/L3dvcmxkd2lkZS9w/ZXJzb25hbC1jb21w/dXRlcnMvY29uc3Vt/ZXIvbW9uaXRvcnMt/YWNjZXNzb3JpZXMv/Y29tcHV0ZXItbW9u/aXRvcnMtcmVkZXNp/Z24vaHAtc2VyaWVz/LTUtcHJvLTI3LXFo/ZC1tb25pdG9yLTUy/Ny1wcTJ4LnBuZw",
    name:"Monitor"
      }

]

  return (
    <>
      <Heading title = {title}/>
      
      <div className="item-container" style={{display:'flex' , justifyContent: "space-evenly"}}>
        {
          Items.map((item)=>(
            <Item name = {item.name} img = {item.img}/>
          ))
        }
      </div>

    </>
  )
}

export default App
