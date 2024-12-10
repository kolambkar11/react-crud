import { useState } from 'react'
import { PageEnum, TEmployee, dummyEmployeeList } from './Employee.types'
import Employeelist from './Employeelist';
import Addemployee from './Addemployee';
import "./home.styles.css"

const Home = () => {
    const[ employeeList, setEmployeeList ] = useState(dummyEmployeeList as TEmployee[]);
    const[ shownPage, setShownPage] = useState(PageEnum.list)
    const onAddEmployeeClickHandler = () =>{
        setShownPage(PageEnum.add)
    }
    const showListPage = () =>{
        setShownPage(PageEnum.list)
    }
    const addEmployee = (data: TEmployee) =>{
        setEmployeeList([...employeeList, data])
    }
    const deleteEmp = (data:TEmployee) =>{
        const indexToDelete = employeeList.indexOf(data)
        const tempList = [...employeeList]
        tempList.splice(indexToDelete,1);
        setEmployeeList(tempList)
    }
  return (
    <>
        <article className='article-header'>
            <header>
                <h1>TypeScript CRUD App</h1>
            </header>
        </article>
        <section className='section-content'>
            <div>
                {
                    shownPage === PageEnum.list &&
                    <>
                        <button onClick={onAddEmployeeClickHandler}>Add Employee</button>
                        <Employeelist list={employeeList} onDeleteClickHandler={deleteEmp}/>
                    </>
                }
                {
                    shownPage=== PageEnum.add &&
                    <Addemployee onBackButtonClickHandler={showListPage} onHandleSumbit={addEmployee}/>
                }
            </div>
        </section>
    </>
  )
}

export default Home