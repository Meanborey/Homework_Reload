// import logo from './logo.svg';
// import './App.css';
// import React,{useState,useEffect} from 'react';
// import Reload from './component/Reload.';

// function App() {
//   let [loading,setLoading]=useState([])
//   let [Reload,setReload]=useState([true])
//   let getData=()=>{
//     fetch("https://api.escuelajs.co/api/v1/products")
//     .then(resp=>resp.json())
//     .then(req=>{
//       setReload(false)
//       setLoading(req)
//     })
//   }
//   useEffect(()=>getData()
//   ,[])
//   return (
//    <Reload loadingdata={Reload} getapi={loading}/>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Reload from './component/Reload.';

function App() {
  let [isLoading, setIsLoading] = useState([])
  let [isReload, setIsReload] = useState([true])
  let getData = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(resp => resp.json())
    .then(req => {
      setIsReload(false)
      setIsLoading(req)
    })
  }
  useEffect(() => getData(), [])
  return (
    <Reload loadingdata={isReload} getapi={isLoading}/>
  );
}

export default App;

