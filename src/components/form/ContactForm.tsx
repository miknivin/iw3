"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import InjectableSvg from "../common/InjectableSvg"

interface FormData {
   user_name: string;
   user_email: string;
   company?: string;
Enquiry?: string;
   message: string;
}

const schema = yup
   .object({
user_name: yup.string().required().label("Name"),
user_email: yup.string().required().email().label("Email"),
company: yup.string().optional().label("Phone"),
Enquiry: yup.string().optional(),
subject: yup.string().optional().label("Subject"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const handleFormSubmit = async (data: FormData) => {
      setIsSubmitting(true);
      
      try {
         const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               name: data.user_name,
               email: data.user_email,
               company: data.company,
               Enquiry: data.Enquiry,
               message: data.message,
            }),
         });

         if (response.ok) {
            toast.success('Message sent successfully! We\'ll get back to you soon.', { 
               position: 'top-center',
               autoClose: 5000,
            });
            reset();
         } else {
            const error = await response.json();
            throw new Error(error.error || 'Failed to send message');
         }
      } catch (error) {
         console.error('Error sending message:', error);
         toast.error('Failed to send message. Please try again later.', { 
            position: 'top-center',
            autoClose: 5000,
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <form onSubmit={handleSubmit(handleFormSubmit)} className="contact__form" id="contact-form">
         <div className="row gutter-20">
            <div className="col-lg-4">
               <div className="form-grp">
                  
                  <input {...register("user_name")} type="text" placeholder="name" />
                  <p className="form_error">{errors.user_name?.message}</p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="form-grp">
                  <input {...register("user_email")} type="email" placeholder="E-mail" />
                  <p className="form_error">{errors.user_email?.message}</p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="form-grp">
                  <input {...register("company")} placeholder="company" />
                  <p className="form_error">{errors.company?.message}</p>
               </div>
            </div>
         </div>
         <div className="form-grp">
            <input {...register("Enquiry")} type="text" placeholder="Enquiry" />
            <p className="form_error">{errors.Enquiry?.message}</p>
         </div>
         <div className="form-grp">
            <textarea {...register("message")} placeholder="Message"></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <button 
            type="submit" 
            className="btn red-btn" 
            disabled={isSubmitting}
         >
            {isSubmitting ? 'Sending...' : 'Send Me Message'} 
            <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" />
         </button>
      </form>
   )
}

export default ContactForm
