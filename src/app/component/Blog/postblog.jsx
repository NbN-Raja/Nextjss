"use client";

import { useState } from 'react';
import axios from 'axios';

export default function BlogcontentPosts() {
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

    const [formData, setFormData] = useState({
        content: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.content.trim()) {
            console.error('Content cannot be empty');
            return; // Exit early if content is empty
        }
        
        try {
            setIsSubmitting(true); // Set isSubmitting to true when form is submitted

            // Send form data to your server endpoint
            const response = await axios.post('/api/blog/post', formData);

            // Handle response
            console.log(response.data);
            

            // Clear form data after successful submission
            setFormData({
                userId: '',
                content: ''
            });
        } catch (error) {
            console.error('Error submitting blog post:', error);
        } finally{
            setIsSubmitting(false); // Set isSubmitting back to false after submission

        }
    };
    return (
        <div className="p-4 pb-4">
        <div className="flex justify-center border-gray-600 border-2 ">
            <form onSubmit={handleSubmit} className="flex">
                <div className="avatar h-10 w-10 bg-white rounded-full mt-5"></div>
                {/* User details */}
                <div className="p-2">
                    <input type="text" name="content" className='p-5 rounded-md bg-black text-white ' value={formData.content} onChange={handleChange} placeholder="Add Quicky" />

                    <input type="submit" value="Quick" className={`bg-green-500 rounded-full p-3 ml-2 ${isSubmitting ? 'w-16' : 'w-24'}`} />
                </div>
            </form>
        </div>
        </div>
    );
}
