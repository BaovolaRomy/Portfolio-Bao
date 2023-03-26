import React from "react";

const Contact = () => {

    return(
    <div id="contact" className="max-w-[1024px] m-auto md:pl-10 p-4 py-16">
        <h1 className="py-4 text-6xl font-bold text-center text-rose-900">Contact</h1>
        <form action="https://getform.io/f/61bce7cd-777d-49b0-b40f-b48b6258f5e5" method='POST' encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-4 py-2">
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
                </div>
            </div>
             <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
                </div>
             <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
                </div>
             <div>
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea className="border-2 rounded-lg p-3 flex border-gray-300 w-full" rows="10" name="message" ></textarea>
                </div>
            <button className="w-[75%] flex justify-center items-center text-white border-2 mt-6 rounded-lg p-4 w-full bg-rose-900 cursor-pointer hover:scale-110 ease-in duration-200">Send message</button>
        </form>
    </div>
    )
}
export default Contact;