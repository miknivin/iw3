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

      const emailTo = "sujit@iw3.in";
      const formData = new FormData();
      formData.append("name", data.user_name);
      formData.append("email", data.user_email);
      formData.append("company", data.company || "");
      formData.append("enquiry", data.Enquiry || "");
      formData.append("_subject", data.Enquiry ? data.Enquiry : `New Message from ${data.user_name}`);
      formData.append("message", data.message);

      try {
         const response = await fetch(`https://formsubmit.co/ajax/${emailTo}`, {
            method: 'POST',
            body: formData,
            headers: {
               'Accept': 'application/json'
            }
         });

         if (response.ok) {
            toast.success("Message sent successfully!", {
               position: 'top-center',
               autoClose: 5000,
            });
            reset();
         } else {
            throw new Error('Failed to send message');
         }
      } catch (error) {
         console.error('Error sending message:', error);
         toast.error("Failed to send message. Please try again later.", {
            position: 'top-center',
            autoClose: 5000,
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <form onSubmit={handleSubmit(handleFormSubmit)} className="contact__form" id="contact-form">
         <div className="form-grp">
            <input {...register("user_name")} type="text" placeholder="Your Name" />
            <p className="form_error">{errors.user_name?.message}</p>
         </div>
         <div className="form-grp">
            <input {...register("user_email")} type="email" placeholder="Your Email" />
            <p className="form_error">{errors.user_email?.message}</p>
         </div>
         <div className="form-grp">
            <input {...register("company")} placeholder="Company" />
            <p className="form_error">{errors.company?.message}</p>
         </div>
         <div className="form-grp">
            <input {...register("Enquiry")} type="text" placeholder="Subject" />
            <p className="form_error">{errors.Enquiry?.message}</p>
         </div>
         <div className="form-grp">
            <textarea {...register("message")} placeholder="Your Message"></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <button
            type="submit"
            className="btn red-btn"
            disabled={isSubmitting}
            style={{ width: '100%', maxWidth: '337px', height: '67px', borderRadius: '25px', fontSize: '20px' }}
         >
            {isSubmitting ? 'Sending...' : 'Send now'}
            <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" />
         </button>
      </form>
   )
}

export default ContactForm
