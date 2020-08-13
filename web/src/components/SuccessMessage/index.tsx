import React, {useState} from 'react';
import { BsCheckCircle } from 'react-icons/bs';

import './styles.css';

interface SuccessMessageProps{
  state: boolean;
}

const SuccessMessage:React.FunctionComponent<SuccessMessageProps> = (props)=>{
  const [timeLeft, setTimeLeft] = useState(3);
  if(props.state){
    setInterval(()=>{setTimeLeft(timeLeft-1)}, 1000);
    return (
      <div className="success">
        <BsCheckCircle/>
        <h2>Cadastro Concluído!</h2>
        
        <p>Voltando à página inicial em {timeLeft}</p>
      </div>
    );
  }
  else return null;
}


export default SuccessMessage;