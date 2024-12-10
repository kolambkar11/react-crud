import { useState } from 'react'
import "./Employee.styles.css"
import { TEmployee } from './Employee.types'
type Props ={
  onBackButtonClickHandler : () => void //defining as void for the function
  onHandleSumbit : (data:TEmployee) => void //defining as void for the function
}
const Addemployee = (props:Props) => {
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ email, setEmail ] = useState("")
  const {onBackButtonClickHandler, onHandleSumbit} = props

  const onFirstNameChange = (e:any) =>{
    setFirstName(e.target.value);
  }
  const onLastNameChange = (e:any) =>{
   setLastName(e.target.value) 
  }
  const onEmailChange = (e:any) =>{
    setEmail(e.target.value)
  }
const onHandleBtnSumbit = (e:any) =>{
  e.preventDefault()
const data:TEmployee = {
  id: new Date().toJSON().toString(),
  firstName:firstName,
  lastName:lastName,
  email:email
}
onHandleSumbit(data)
onBackButtonClickHandler()
}
  return (<>
  <div className='form-container'>
    <h1>Add Employee</h1>
  <form action="" onSubmit={onHandleBtnSumbit}>
    <div>
      <label htmlFor="">Firstname</label>
      <input type="text" value={firstName} onChange={onFirstNameChange}/>
    </div>
    <div>
      <label htmlFor="">Lastname</label>
      <input type="text" value={lastName} onChange={onLastNameChange}/>
    </div>
    <div>
      <label htmlFor="">Email</label>
      <input type="text" value={email} onChange={onEmailChange}/>
    </div>
    <div>
      <button type='button' onClick={onBackButtonClickHandler}>Back</button>
      <button type='submit' >Add Employee</button>
    </div>

  </form>
  </div>
    </>
  )
}

export default Addemployee