import React, { useState } from 'react'

function Inquiry() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div>
            <form className="max-w-md mx-auto bg-black/30 rounded-xl shadow-lg border-2 border-green-400 p-6 mb-10">
                <h2 className="text-2xl font-bold mb-4 text-green-300 text-center">Inquiry Form</h2>
                <Label>Name</Label>
                <Input value={name} setValue={setName} />
                <Label>Email</Label>
                <Input value={email} setValue={setEmail} type="email" />
                <Label>Preferred Time</Label>
                <Input value={time} setValue={setTime} />
                <Label>Message</Label>
                <Input value={message} setValue={setMessage} />
            
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors">Submit Inquiry</button>
            </form>
        </div>
    )
}

export default Inquiry

function Input( { type = "text", value, setValue }){
    return (
        <input type={type} className="w-full mb-4 p-2 rounded border-1" value={value} onChange={e => setValue(e.target.value)} />
    )
}

function Label( { children } ){
    return (
        <label className="block mb-2 text-green-200">{children}</label>
    )
}