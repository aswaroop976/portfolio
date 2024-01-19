import React from "react";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center 
            items-center">
                <p>
                    Reach out to me: <br></br>
                    Email: aswar3@illinois.edu
                    <br></br>
                    Phone: 402-913-5141
                </p>
                {/* <form action = "https://getform.io/f/3c8e02b4-03e5-41b6-8892-c5e26c840141"
                method = "POST"
                className="flex flex-col w-full md:w-7/
                12">
                    <input
                        type = "text"
                        name = "name"
                        placeholder = "Name"
                        className="p-2 bg-transparent border-2 
                        rounded-md focus:outline-none"
                    />
                    <input
                        type = "text"
                        name = "email"
                        placeholder = "Email"
                        className="my-2 p-2 bg-transparent
                        border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name = "messsage"
                        placeholder = "Message"
                        rows = "10"
                        className="p-2 mb-4 bg-transparent
                        border-2 rounded-md
                        focus:outline-none"/>
                    <button
                        type="button"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
                    >
                        Work With Me
                    </button>
                </form> */}
            </div>
        </div>
    )
}

export default Contact;