import { useState } from "react"

export const ContactForm = () => {

    const [contact, setContact] = useState({
        firstName : "",
        lastName : "",
        email : "",
        number : "",
        message : "",
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setContact((prev) => ({...prev, [name]: value}))
    }

    const hanleFormSubmit = (event) => {
        event.preventDefault();
        console.log(contact);
    }


    return (
        <div className="container shadow-lg p-4 rounded-sm">
            <div className="row">
                <div className="col-12"><h1>Contact Us</h1></div>
            </div>
            <form onSubmit={hanleFormSubmit}>
            <div className="row mt-3">
                    <label htmlFor="name" className="form-label text-start">YOUR NAME</label>
                <div className="col-6">
                    <input type="text" onChange={handleInputChange} value={contact.firstName} id="name" name="firstName" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-6">
                    <input type="text" onChange={handleInputChange} value={contact.lastName} id="name" name="lastName" className="form-control" placeholder="Last Name" />
                </div>
            </div>
            <div className="row mt-3">
                <label htmlFor="email" className="form-label text-start">EMAIL ADDRESS</label>
                <div className="col-12">
                    <input type="email" onChange={handleInputChange} value={contact.email} name="email" className="form-control" id="email" placeholder="Eg example@gmail.com"/>
                </div>
            </div>
            <div className="row mt-3">
                <label htmlFor="number" className="form-label text-start">PHONE NUMBER</label>
                <div className="col-12">
                    <input type="text" onChange={handleInputChange} value={contact.number} name="number" className="form-control" id="number" placeholder="Eg 1 800 000000"/>
                </div>
            </div>
            <div className="row mt-3">
                <label htmlFor="message" className="form-label text-start">MESSAGE</label>
                <div className="col-12">
                    <textarea name="message" onChange={handleInputChange} value={contact.message} id="message" className="form-control"></textarea>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <button className="btn btn-sm btn-dark py-2 px-5" style={{ fontSize: '18px', padding: '5px 30px', borderRadius: '10px'}}>Submit</button>
                </div>
            </div>
            </form>
        </div>
    )
}