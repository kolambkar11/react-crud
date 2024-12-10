import "./employeelist.style.css"
import { TEmployee } from './Employee.types'
import Employeemodal from "./Employeemodal"
import { useState } from "react";
type Props={
    list:TEmployee[];
    onDeleteClickHandler: (data:TEmployee) => void;
}
const Employeelist = (props:Props) => {
    const {list, onDeleteClickHandler} = props;

    const [showModal, setShowModal] =useState(false)
    const [dataToShow, setDataToShow] = useState(null as TEmployee | null)
const viewModal = (data:TEmployee) =>{
    
    setShowModal(true)
    setDataToShow(data)
}
const closeModal = () =>{
    setShowModal(false)
}
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {list.length!=0 ?
                list.map((e, index)=>{
                    return (
                        <tr key={index}>
                            <td>{e.id}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.email}</td>
                            <td>
                                <div>
                                    <button className="mr-2" type='button' onClick={()=>{viewModal(e)}}>View</button>
                                    <button className="mr-2" type='button'>Edit</button>
                                    <button className="mr-2" type='button' onClick={()=>{onDeleteClickHandler(e)}}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                }): (<>
                <tr>
                    <td colSpan={5}>No Data</td>
                </tr>
                </>)}
            </tbody>
        </table>
        {showModal && dataToShow !== null && (<Employeemodal closeModal={closeModal} data={dataToShow} />)}
        
    </>
  )
}

export default Employeelist