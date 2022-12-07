import * as React from 'react';
import styles from './App.module.css';
import { JsonToTable } from "react-json-to-table";

declare global {
  interface Window {
    _fileData:JSON | null
  }
}

const App = () =>{
  const [jsonValue,setJsonValue] = React.useState<JSON | null>(null)
    React.useEffect(()=>{
    if (window._fileData){
      setJsonValue(window._fileData)
    }
    },[])
    React.useEffect(()=>{
      console.log(jsonValue,"lol")
    },[])
      return (
      <div className={styles.wrapper}>
        {
          jsonValue ? <JsonToTable json={jsonValue} /> :
          <div>Для того, чтобы начать, откройте файл с JSON и запустите плагин</div>
        }
          
      </div>
    );
}
export default App;
