import React, { useState } from 'react';
import download from 'downloadjs';
import myData from 'C:/Users/Gustavo/Desktop/tlist/src/pages/Home/my_completed_list.json';

import {

    Title,Container,InputContainer,Input,AddButton,
    ConfirmButton,DeleteButton,MoveButton,TaskTitle,Concluido,
    SimpleText,TaskContainer,TaskList,TaskCard,TaskCardButtonsContainer,
    ListConfirmDone,ListTitle,OutsideButton,FieldCard,Description,
    ButtonShow,ButtonHide,TaskCardTitle,Subtitletask,

} from './styles'

function Home() {

    const [todotasks, setTodotasks] = useState([]);
    const [doingtasks, setDoingtasks] = useState([]);
    const [donetasks, setDonetasks] = useState([]);

    const [texttitle, setTexttitle] = useState("");
    const [textdescription, setTextdescription] = useState("");
    const [textowner, setTextowner] = useState("");
    const [texttime, setTexttime] = useState("");

    const [confirmedtasks, setConfirmedtasks] = useState([]);
    const [win, setWin] = useState("");
    const [empty, setEmpty] = useState("Empty");

    let [count, setCount] = useState(0);
    let [left, setLeft] = useState(0);

    const addTask = () => {

        const newTask = {};
        newTask.title = texttitle;
        newTask.description = textdescription;
        newTask.owner = textowner;
        newTask.estimative = texttime;
        newTask.edit = false;
        
        setTodotasks([...todotasks, newTask]);

        if (setTodotasks) {

            left += 1;

        }

        setLeft(left);

        document.getElementById("TaskInput").value = "";
        document.getElementById("DescriptionInput").value = "";
        document.getElementById("OwnerInput").value = "";
        document.getElementById("TimeInput").value = "";
    
        
    }

    const moveForDoing = (task) => {

        const deletedfromTodo = todotasks.filter((item) => {

            if (task !== item) {

                return true;

            } else {

                return false;

            }

        })

        setTodotasks(deletedfromTodo);

        const deletedfromDone = donetasks.filter((item) => {

            if (task !== item) {

                return true;

            } else {

                return false;

            }

        })

        setDonetasks(deletedfromDone);

        setDoingtasks([...doingtasks, task]);

    }

    const moveForDone = (task) => {

        const deletedfromDoing = doingtasks.filter((item) => {

            if (task !== item) {

                return true;

            } else {

                return false;

            }

        })

        setDoingtasks(deletedfromDoing);

        const deletedfromTodo = todotasks.filter((item) => {

            if (task !== item) {

                return true;

            } else {

                return false;

            }

        })

        setTodotasks(deletedfromTodo);

        setDonetasks([...donetasks, task]);

    }

    const moveForTodo = (task) => {

        const deletedfromDoing = doingtasks.filter((item) => {

            if (task !== item) {

                return true;

            } else {

                return false;

            }

        })

        setDoingtasks(deletedfromDoing);

        const deletedfromDone = donetasks.filter((item) => {

            if (task !== item) {

                return true;

            } else {

                return false;

            }

        })

        setDonetasks(deletedfromDone);

        setTodotasks([...todotasks, task]);

    }

    const ConfirmDone = (task) => {

        const deletedfromDone = donetasks.filter((item) => {

            if (task !== item) {

                return true;

            } else {

                return false;

            }

        })

        setDonetasks(deletedfromDone);
        setConfirmedtasks([...confirmedtasks, task]);

        if (setDonetasks) {

            count += 1;
            left -= 1;

            setLeft(left);
            setCount(count);
        }

        setWin("Congratulations,")
        setEmpty("");

    }

    const deleteTaskTodo = (task) => {

        const deletedfromTodo = todotasks.filter((item) => {

            if (task !== item) {

                return true;

            } else {

                return false;

            }

        })

        setTodotasks(deletedfromTodo);

        if (setTodotasks) {

            left -= 1;

            setLeft(left);

        }

    }

    const clearList = () => {

        setConfirmedtasks([...""]);
        setCount(0);
        setWin("");

        if (setConfirmedtasks) {

            setEmpty("Empty");

        }

    }

    const downloadFile = () => {



        download(JSON.stringify(confirmedtasks), "my_completed_list.json", "text/plain");

    }

    const saveFile = () => {

        const taskBoard = {

            todo: todotasks,
            doing: doingtasks,
            done: donetasks

        }

        download(JSON.stringify(taskBoard), "my_completed_list.json", "text/plain");


    }

    const loadFile = () => {

        setTodotasks(myData.todo);
        setDoingtasks(myData.doing);
        setDonetasks(myData.done);

        if (setTodotasks) {

            left += 1;
            setLeft(left);

        }

        if (setDoingtasks) {

            left += 1;
            setLeft(left);

        }

        if (setDonetasks) {

            left += 1;
            setLeft(left);

        }
    }

    const hideTodo = (id1) => {

        document.getElementById(id1 + 'todo').style.display = 'none';


    }

    const hideDoing = (id2) => {

        document.getElementById(id2 + 'doing').style.display = 'none';


    }

    const hideDone = (id3) => {

        document.getElementById(id3 + 'done').style.display = 'none';


    }

    const showTodo = (id1) => {

        document.getElementById(id1 + 'todo').style.display = 'flex';

    }

    const showDoing = (id2) => {

        document.getElementById(id2 + 'doing').style.display = 'flex';

    }

    const showDone = (id3) => {

        document.getElementById(id3 + 'done').style.display = 'flex';

    }

    const handleChangeTodo = (e, i) => {

        const value = e.target.value;

            const changedTodotasks = todotasks.map((task, x) => {

                if (i === x) {
    
                    task.title = value;
    
                }
    
                return task;
    
            })

            setTodotasks(changedTodotasks)


    }

    const handleSetToggleTodo = (i,value) => {

        const changedTodotasks = todotasks.map((t,j) => {

            const task = t;

            if(i === j){

                task.edit = value;

            }

            return task;

        })

        setTodotasks(changedTodotasks);

    }

    const handleChangeDoing = (e, i) => {

        const value = e.target.value;

            const changedDoingtasks = doingtasks.map((task, x) => {

                if (i === x) {
    
                    task.title = value;
    
                }
    
                return task;
    
            })

            setDoingtasks(changedDoingtasks)


    }

    const handleSetToggleDoing = (i,value) => {

        const changedDoingtasks = doingtasks.map((t,j) => {

            const task = t;

            if(i === j){

                task.edit = value;

            }

            return task;

        })

        setDoingtasks(changedDoingtasks);

    }

    const handleChangeDone = (e, i) => {

        const value = e.target.value;

            const changedDonetasks = donetasks.map((task, x) => {

                if (i === x) {
    
                    task.title = value;
    
                }
    
                return task;
    
            })

            setDonetasks(changedDonetasks)


    }

    const handleSetToggleDone = (i,value) => {

        const changedDonetasks = donetasks.map((t,j) => {

            const task = t;

            if(i === j){

                task.edit = value;

            }

            return task;

        })

        setDonetasks(changedDonetasks);

    }
 
    return (
        <Container>
            <Title>TO DO LIST</Title>
            <InputContainer>
                <Input

                    required

                    id="TaskInput"

                    onChange={e => setTexttitle(e.currentTarget.value)}

                    onKeyPress={event => {

                        if (event.key === 'Enter') {

                            addTask()
                        }
                    }}

                    placeholder="What needs to be done?">
                </Input>

                <Input

                    required

                    id="DescriptionInput"

                    onChange={e => setTextdescription(e.currentTarget.value)}

                    onKeyPress={event => {

                        if (event.key === 'Enter') {

                            addTask()
                        }
                    }}

                    placeholder="Description">
                </Input>

                <Input

                    required

                    id="OwnerInput"

                    onChange={e => setTextowner(e.currentTarget.value)}

                    onKeyPress={event => {

                        if (event.key === 'Enter') {

                            addTask()
                        }
                    }}

                    placeholder="Responsible">
                </Input>

                <Input

                    required

                    id="TimeInput"

                    onChange={e => setTexttime(e.currentTarget.value)}

                    onKeyPress={event => {

                        if (event.key === 'Enter') {

                            addTask()
                        }

                    }}

                    placeholder="Estimated time">
                </Input>
                <AddButton onClick={addTask}>Add Task</AddButton>
            </InputContainer>
            <TaskContainer>
                <TaskList>
                    <h1>To Do </h1>
                    {todotasks.map((item, i) => {
                        return (
                            <FieldCard>
                                <TaskCardTitle>
                                    
                                    {item.edit ? (
                                    <input 
                                    value={item.title} 
                                    onChange={(e) => handleChangeTodo(e,i)} 
                                    onKeyPress ={(e) => {
                                        if(e.key === 'Enter'){
                                            handleSetToggleTodo(i, false)}
                                        }} 
                                        />):(<TaskTitle onDoubleClick = {() => handleSetToggleTodo(i,true)}>{item.title}</TaskTitle>)}

                                    <ButtonHide onClick={() => hideTodo(i)}>-</ButtonHide>
                                    <ButtonShow onClick={() => showTodo(i)}>+</ButtonShow>
                                    <TaskCard id={i + 'todo'} key={item}>
                                        <Description><Subtitletask>Description:</Subtitletask> {item.description}</Description>
                                        <Description><Subtitletask>Responsible:</Subtitletask> {item.owner}</Description>
                                        <Description><Subtitletask>Estimated time:</Subtitletask> {item.estimative}</Description>
                                        <TaskCardButtonsContainer>
                                            <DeleteButton onClick={() => deleteTaskTodo(item)}>Delete</DeleteButton>
                                            <MoveButton onClick={() => moveForDoing(item)} >Doing</MoveButton>
                                            <MoveButton onClick={() => moveForDone(item)} >Done</MoveButton>
                                        </TaskCardButtonsContainer>
                                    </TaskCard>
                                </TaskCardTitle>
                            </FieldCard>
                        );
                    })}
                </TaskList>
                <TaskList>
                    <h1>Doing</h1>
                    {doingtasks.map((item, j) => {
                        return (
                            <FieldCard>
                                <TaskCardTitle>

                                    {item.edit ? (
                                    <input 
                                    value={item.title} 
                                    onChange={(e) => handleChangeDoing(e,j)} 
                                    onKeyPress ={(e) => { 
                                        if(e.key === 'Enter'){
                                            handleSetToggleDoing(j, false)}
                                        }}/>):(<TaskTitle onDoubleClick = {() => handleSetToggleDoing(j,true)}>{item.title}</TaskTitle>)}

                                    <ButtonHide onClick={() => hideDoing(j)}>-</ButtonHide>
                                    <ButtonShow onClick={() => showDoing(j)}>+</ButtonShow>
                                    <TaskCard id={j + 'doing'} key={item}>
                                        <Description><Subtitletask>Description:</Subtitletask> {item.description}</Description>
                                        <Description><Subtitletask>Responsible:</Subtitletask> {item.owner}</Description>
                                        <Description><Subtitletask>Estimated time:</Subtitletask> {item.estimative}</Description>
                                        <TaskCardButtonsContainer>
                                            <MoveButton onClick={() => moveForTodo(item)}>To Do</MoveButton>
                                            <MoveButton onClick={() => moveForDone(item)} >Done</MoveButton>
                                        </TaskCardButtonsContainer>
                                    </TaskCard>
                                </TaskCardTitle>
                            </FieldCard>
                        );
                    })}
                </TaskList>
                <TaskList>
                    <h1>Done</h1>
                    {donetasks.map((item, k) => {
                        return (
                            <FieldCard>
                                <TaskCardTitle>

                                    {item.edit ? (
                                    <input 
                                    value={item.title} 
                                    onChange={(e) => handleChangeDone(e,k)} 
                                    onKeyPress ={(e) => {
                                        if(e.key === 'Enter'){
                                            handleSetToggleDone(k, false)}
                                        }}/>):(<TaskTitle onDoubleClick = {() => handleSetToggleDone(k,true)}>{item.title}</TaskTitle>)}

                                    <ButtonHide onClick={() => hideDone(k)}>-</ButtonHide>
                                    <ButtonShow onClick={() => showDone(k)}>+</ButtonShow>
                                    <TaskCard id={k + 'done'} key={item}>
                                        <Description><Subtitletask>Description:</Subtitletask> {item.description}</Description>
                                        <Description><Subtitletask>Responsible:</Subtitletask> {item.owner}</Description>
                                        <Description><Subtitletask>Estimated time:</Subtitletask> {item.estimative}</Description>
                                        <TaskCardButtonsContainer>
                                            <MoveButton onClick={() => moveForTodo(item)}>To Do</MoveButton>
                                            <MoveButton onClick={() => moveForDoing(item)} >Doing</MoveButton>
                                            <ConfirmButton onClick={() => ConfirmDone(item)}>Confirm</ConfirmButton>
                                        </TaskCardButtonsContainer>
                                    </TaskCard>
                                </TaskCardTitle>
                            </FieldCard>
                        );
                    })}
                </TaskList>
            </TaskContainer>

            <SimpleText>{left} item left</SimpleText>
            <br></br>
            <Concluido>{win} {count} Completed Tasks!</Concluido>
            <OutsideButton>
                <AddButton onClick={() => saveFile()}>Save List</AddButton>
                <AddButton onClick={() => loadFile()}>Load List</AddButton>
            </OutsideButton>
            <ListConfirmDone>
                <ListTitle>Completed List</ListTitle>
                <SimpleText>{empty}</SimpleText>
                {confirmedtasks.map(item => {
                    return (
                        <TaskCard key={item}>
                            <TaskTitle>{item.title}</TaskTitle>
                        </TaskCard>
                    );
                })}
                <OutsideButton>
                    <AddButton onClick={() => clearList()}>Clear Completed</AddButton>
                    <AddButton onClick={() => downloadFile()}>Download</AddButton>
                </OutsideButton>
            </ListConfirmDone>
        </Container>
    )
}

export default Home;