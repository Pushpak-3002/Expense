import styled from "styled-components";
import bg from './img/bg.jpg';
import { MainLayouts } from "./styles/layouts";
import Orb from './Components/orb/orb'
import Navigation from "./Components/Navigation/navigation";
import React,{ useMemo, useState } from "react";
import Transactions from "./Components/Transactions/transactions";
import Incomes from "./Components/Incomes/incomes";
import Expenses from "./Components/Expenses/expenses";
import Dashboard from "./Components/Dashboard/dashboard";
import { useGlobalcontext } from "./context/GlobalContext";


function App() {
  const [active, setActive] = React.useState(1)

  const global = useGlobalcontext()
  console.log(global);

  const orbMemo = useMemo(()=>{
    return <Orb/>
  },[]) 

  const displayData = ()=>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Transactions/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
      default:
        <Dashboard/>
    }
  }

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayouts>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayouts>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position:relative;
  main{
    flex:1;
    background: rgba(252,246,249,0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x:hidden;
    &::-webkit-scrollbar{
      width:0;
    }
  }
`;

export default App;
