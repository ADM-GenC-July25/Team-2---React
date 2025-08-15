import React, { useState } from 'react'

function Inquiry() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission, e.g., send data to a server
        console.log({ name, email, time, message });
        // Reset form fields after submission
        setName('');
        setEmail('');
        setTime('');
        setMessage('');
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-10">
            <form className="max-w-md w-full mx-auto bg-gradient-to-br from-[#0c0c1e] via-[#1a1a2e] to-[#16213e] rounded-xl shadow-lg border-2 border-[#45b7d1] p-6 mb-10 relative z-10">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ff6b6b] via-[#45b7d1] to-[#96ceb4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] text-center">Inquiry Form</h2>
                <Label>Name</Label>
                <Input value={name} setValue={setName} />
                <Label>Email</Label>
                <Input value={email} setValue={setEmail} type="email" />
                <Label>Preferred Time</Label>
                <Input value={time} setValue={setTime} type="time"/>
                <Label>Message</Label>
                <Input value={message} setValue={setMessage} />
                <button type="submit" onClick={handleSubmit} className="w-full bg-gradient-to-r from-[#45b7d1] to-[#4ecdc4] text-white p-2 rounded hover:from-[#ff6b6b] hover:to-[#45b7d1] transition-colors font-bold mt-2">Submit Inquiry</button>
            </form>
        </div>
    )
}

export default Inquiry

function Input( { type = "text", value, setValue }){
    return (
        <input type={type} className="w-full mb-4 p-2 rounded border border-[#45b7d1] bg-black/40 text-white placeholder:text-[#b8b8d1] focus:border-[#ff6b6b] transition-colors" value={value} onChange={e => setValue(e.target.value)} />
    )
}

function Label( { children } ){
    return (
        <label className="block mb-2 text-[#45b7d1] font-semibold">{children}</label>
    )
}