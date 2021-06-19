import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #b833ff 0%, #29a7d1 50%, #ff52bf 100%);
`

export const Title = styled.h1`

    color: white;
    margin: 50px;
    font-family: 'sans-serif';
    font-style: italic;
    font-size: 70px;
    text-align: center;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;

`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const Input = styled.input`
    margin: 5px;
    width: 200%;
    padding: 0.3rem 0;
    text-align: center;
`

export const AddButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  margin: 10px;
  padding: 0.3rem 0;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
  text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  :hover{
    background: #5f595d;
    box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
  }
  
`

export const DeleteButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.3rem 0;
  width: 5rem;
  margin: 5px;
  background: transparent;
  color: #FF1D12;
  border: 2px solid white;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
  :hover{
    background: #5f595d;
    box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
  }
  
`

export const ConfirmButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.3rem 0;
  width: 5rem;
  margin: 5px;
  background: transparent;
  color: #05FF00;
  border: 2px solid white;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
  :hover{
    background: #5f595d;
    box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
  }
  
`

export const MoveButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.3rem 0;
  width: 5rem;
  margin: 5px;
  background: transparent;
  color: #007AFF;
  border: 2px solid white;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
  :hover{
    background: #5f595d;
    box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
  }
  
`

export const TaskTitle = styled.span`

    color: #b833ff;
    font-family: Georgia, serif;
    font-style: italic;
    font-size: 20px;

`
export const Concluido = styled.h3`

  margin: 10px;
  color: #007AFF;
  font-family: Georgia, serif;
  font-style: bold;
  font-size: 25px;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);

`

export const SimpleText = styled.h3`

  margin: 10px;
  font: 5px;


`

export const TaskContainer = styled.div`

  width: 100%;
  padding: 10px;
  margin: 10px;
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: linear-gradient(#7B7D7D , #BDC3C7, #7B7D7D);


`

export const TaskList = styled.div`

  align-items: center;
  padding: 10px;
  margin: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color:rgba(0, 0, 0, 0.5);
  width: 100%;
  border-radius: 20px;

`

export const TaskCard = styled.div`

  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;

`
export const FieldCard = styled.fieldset`

  border: 3px dashed #007AFF;
  border-radius: 20px;
  box-shadow: 8px 8px 8px rgba(0,0,0,0.2);
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 10px;

`

export const TaskCardButtonsContainer = styled.div`

  display: flex;
  flex-direction: row;

`

export const ListConfirmDone = styled.fieldset`

    margin: 50px; 
    width: 75%;
    justify-content: center;
    text-align: center;
    border: 10px double #ffffff;
    border-radius: 93px 0px 93px 0px;
    box-shadow: 7px 7px 7px rgba(0,0,0,0.2);
    background-color:rgba(0, 0, 0, 0.2);
    

`

export const ListTitle = styled.h1`

    margin: 15px;


`

export const OutsideButton = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;

`

export const Description = styled.span`

  font-size: 16px;
  margin: 1px;

`

export const ButtonShow = styled.button`

  background-color: #86fd8e;
  border-radius: 100px 100px 100px 100px;
  border-color: #86fd8e;
  width: 15px;
  flex-direction: row;

`

export const ButtonHide = styled.button`

  background-color: #ff6666;
  border-radius: 100px 100px 100px 100px;
  border-color: #ff6666;
  width: 15px;
  flex-direction: row;
  margin-left: 10px;

`

export const TaskCardTitle = styled.div`

  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
  display: row;
  flex-direction: row;
  

`

export const Subtitletask = styled.span`


  font-size: 18px;
  color: cyan;


`