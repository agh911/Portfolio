import React, { useState } from 'react';
import { createMessage } from '../../utils/dataService.js';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });
    const [showSuccessIcon, setShowSuccessIcon] = useState(false);
    const [showFailIcon, setShowFailIcon] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMessage(formData);
            console.log('Message sent successfully');
            setShowSuccessIcon(true);
            setTimeout(() => {
                setShowSuccessIcon(false);
            }, 3000);
            setFormData({
                name: '',
                email: '',
                subject: '',
                content: ''
            });
        } catch (error) {
            console.error('Error sending message:', error);
            setShowFailIcon(true);
            setTimeout(() => {
                setShowFailIcon(false);
            }, 3000);
        }
    };

    return (
        <div className="lg:col-span-6">
            <h5 className="np-font text-headline mb-4">Message me</h5>
            <form onSubmit={handleMessageSubmit} className="space-y-8 mr-8">
                <div className="flex justify-between gap-2.5">
                    <div className='grow'>
                        <input type="text" id="name" value={formData.name} onChange={handleChange} className="shadow-sm bg-customBg border border-white-100 text-sm text-paragraph rounded-sm focus:bg-card focus:ring-primary-500 focus:border-btnCol block w-full p-2.5" placeholder="Your name" required />
                    </div>
                    <div className='grow'>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} className="shadow-sm bg-customBg border border-white-100 text-sm text-paragraph rounded-sm focus:bg-card focus:ring-primary-500 focus:border-btnCol block w-full p-2.5" placeholder="name@email.com" required />
                    </div>
                </div>
                <div>
                    <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="block p-3 w-full text-sm text-paragraph bg-customBg rounded-sm border border-white-100 shadow-sm focus:bg-card focus:ring-primary-500 focus:border-btnCol" placeholder="How can I help you" required />
                </div>
                <div className="sm:col-span-2">
                    <textarea id="content" value={formData.content} onChange={handleChange} rows="6" className="block p-2.5 w-full text-sm text-paragraph bg-customBg rounded-sm shadow-sm border border-white-100 focus:bg-card focus:ring-primary-500 focus:border-btnCol" placeholder="Leave your message..."></textarea>
                </div>
                <div className="flex">
                    <button type="submit" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-btnCol text-btnText rounded-sm transition ease-in-out duration-500 hover:bg-btnHov">Send message</button>
                    {showSuccessIcon && <img src="https://cdn-icons-png.flaticon.com/128/2593/2593550.png" alt="Success" className="ml-5 w-9 h-9" />}
                    {showFailIcon && <img src="https://cdn-icons-png.flaticon.com/128/2593/2593666.png" alt="Fail" className="ml-5 w-9 h-9" />}
                </div>
            </form>
        </div>
    )
}
