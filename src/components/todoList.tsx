import { FC, useState } from 'react'
import { toDoItem } from '../types/type'
import ToDoItem from './todoItem'
import './comp.css';


const ToDoList: FC = () => {
    const [content, setContent] = useState<string>('');
    const [toDo, setToDo] = useState<toDoItem[]>([]);

    const completeTask = (e : React.ChangeEvent<HTMLInputElement>,id:string) :void => {
        const tasks: toDoItem[] = toDo.map((task: toDoItem) => task.id === id ? { ...task, completed: e.target.checked } : task);
        setToDo(tasks);
            
    }

    const addTask = (): void => {
      
        if (content !== '') {
            const task: toDoItem = {
                id: Date.now().toString(),
                content: content,
                completed: false
            }
            setToDo([...toDo, task]);
            setContent('');
        }
    }

    const deleteTask = (id: string): void => {
        const Tasks: toDoItem[] = toDo.filter((task) => task.id !== id);
        setToDo(Tasks);

    }
    return (
        <>
          <div className="container">      
            <div className="cont"> 
              <h1>TODO List</h1>
              <div className="addTask">
                       <input type="text"
                        placeholder="add your task"
                        className="content"
                        value={content}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)} />
                        
                        <button type="button"
                        className="addBtn"
                        onClick={addTask} >add</button>
             </div>       
            </div>        
           </div>

            <div className="list">
                {toDo.map((item) => (
                    <ToDoItem key={item.id} item={item} deleteTask={deleteTask} completeTask={completeTask} />
               ))}
            </div>
    

     </>  
            )
    }

           
export default ToDoList;