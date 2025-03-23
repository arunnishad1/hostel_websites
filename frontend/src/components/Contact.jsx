// import React from "react";
// import Map from "./Map";
// import { useState } from "react";
// import { toast, Bounce } from 'react-toastify';


// const Contact = () => {
//     const[data, setData] = useState({
//       "email":"",
//       "subject":"",
//       "message":""
//     })
    
//     const handleInput = (e)=>{
//       const{name, value} = e.target;
//       setData({
//         ...data,
//         [name]:value
//       })
//     }
    
//     const submitForm = async(e)=>{
//       e.preventDefault();
//       try {
//             const val = await fetch('http://localhost:5500/user/contact',{
//                 method:"POST",
//                 body:JSON.stringify(data),
//                 headers:{
//                 'Content-Type':'application/json',
//                 },
//                 credentials: "include",
//             })
//             const res = await val.json()
//             if(res.message){
//                 toast.error(`Enter correct details or fill the entire field`, {
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 transition: Bounce,
//                 });
//             }else{
//                 toast.success(`Data sent successful`, {
//                                         position: "top-right",
//                                         autoClose: 3000,
//                                         hideProgressBar: false,
//                                         closeOnClick: false,
//                                         pauseOnHover: true,
//                                         draggable: true,
//                                         progress: undefined,
//                                         theme: "colored",
//                                         transition: Bounce,
//                                         });
//                                         setData({
//                                             "email":"",
//                                             "subject":"",
//                                             "message":"",
//                                         })
//             }
//       } catch (error) {
//         toast.error(`something went wrong`, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored",
//             transition: Bounce,
//             });
//       }
      
//     }

//   return (
//     <>
// <section class="bg-white dark:bg-gray-900">
//   <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//       <p class="mb-8 lg:mb-16 font-lighter text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to ask something? Need details about our Business plan? Let us know.</p>
//       <form class="space-y-8" onSubmit={submitForm}>
//           <div>
//               <label for="email" class="block mb-2 text-md text-gray-900 dark:text-gray-300">Your email</label>
//               <input type="email" value={data.email} onChange={handleInput} name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required />
//           </div>
//           <div>
//               <label for="subject" class="block mb-2 text-md text-gray-900 dark:text-gray-300">Subject</label>
//               <input type="text" value={data.subject} onChange={handleInput} name="subject" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
//           </div>
//           <div class="sm:col-span-2">
//               <label for="message" class="block mb-2 text-md text-gray-900 dark:text-gray-400">Your message</label>
//               <textarea id="message" value={data.message} onChange={handleInput} name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
//           </div>
//           <button type="submit" class="py-3 px-5 text-md text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
//       </form>
//   </div>
// </section>
//       <Map />
//     </>
//   );
// };

// export default Contact;

import React from "react";
import { toast, Bounce } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useState ,useEffect } from "react";
import { FaEnvelope, FaUser,FaComment } from "react-icons/fa";
import Map from "./Map";
import ButtonComponents from "./ButtonComponents";


const Contact = () => {
  const [data, setData] = useState({
    "email": "",
    "subject": "",
    "message": "",
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // EmailJS parameters
    const templateParams = {
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY 
      );

      console.log("emailjs response", response)
      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });

        // Clear form after submission
        setData({
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-pink-100 p-6">
      <div className="w-full max-w-lg bg-white/20 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition duration-300 rounded-xl p-8">
        <h2 className="text-center text-3xl font-bold text-dark mb-6">
          Get in Touch
        </h2>
        <form onSubmit={submitForm} className="space-y-5">
          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              id="from_email"
              placeholder="Your Email"
              className="w-full p-3 pl-10 bg-white/20 text-dark placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Subject Field */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="w-full p-3 pl-10 bg-white/20 text-dark placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={data.subject}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <FaComment className="absolute top-3 left-3 text-gray-400" />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 pl-10 bg-white/20 text-dark placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={data.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <ButtonComponents text = "Send Message" />
        </form>
      </div>
    </div>
      <Map />
    </>
  );
};

export default Contact;

