import { TEmployee } from "./Employee.types";
import "./employeemodal.style.css"
type Props = {
    closeModal: () => void;
    data: TEmployee;
}
const Employeemodal = (props: Props) => {
const {closeModal,data} = props
  return (
    <>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div>
                    <h3>Employee Data</h3>
                    <div>
                        <div>
                            <label htmlFor="">FirstName: {data.firstName}</label>
                        </div>
                        <div>
                            <label htmlFor="">LastName: {data.lastName}</label>
                        </div>
                        <div>
                            <label htmlFor="">Email:  {data.email}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Employeemodal