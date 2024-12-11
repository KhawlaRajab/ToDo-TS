import { toDoItem } from '../types/type'
import { FC } from 'react'
import './comp.css';


interface AppProps {
    item: toDoItem;
    deleteTask : (id:string)=> void,
    completeTask :(e : React.ChangeEvent<HTMLInputElement>,id:string) =>void
}

const ToDoItem: FC<AppProps> = ({item ,deleteTask ,completeTask}) => {
    return (
        <>
             <div className="item">
               <div className="task">
                <input type="checkbox" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>completeTask(e,item.id)}/>
                <p className={`taskContent ${item.completed? 'check' : ''}`}>{item.content}</p>
            </div>
            <div className="buttons">
                <button type="button" className="edit">edit</button>
                <button type="button" className="delete" onClick={()=>deleteTask(item.id)}>delete</button>
            </div>
            </div>
        </> 
    )
}
 
export default ToDoItem;