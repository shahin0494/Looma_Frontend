import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { addJobsAPI } from "../../services/allAPI";

gsap.registerPlugin(ScrollTrigger);

function AddJob() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".job-section", {
                opacity: 0,
                y: 40,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ".job-section",
                    start: "top 85%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleJobSubmit = async () => {
        const { username, jobTitle, specializations, fees, availability, location, summary, experience, technicalSkills, contact, socialLinks, works, status, profilePhoto, backgroundPhoto } = jobDetails

        if (!username || !jobTitle || !specializations || !fees || !availability || !location || !summary || !experience || !technicalSkills || !contact || !socialLinks || !works.length == 0 || !status || !profilePhoto.length == 0 || !backgroundPhoto.length == 0) {
            toast.info("Please fill the form")
        } else {
            // api call
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            const reqBody = new FormData()
            // append all fields to FormData
            for (let key in jobDetails) {
                if (key != "uploadImg") {
                    reqBody.append(key, jobDetails[key])
                } else {
                    jobDetails.uploadImg.forEach(img => {
                        reqBody.append("uploadImg", img)
                    })
                }
            }

            try {
                const result = await addJobsAPI(reqBody, reqHeader)
                console.log(result);
                if (result.status == 401) {
                    toast.warning(result.response.data)
                    handleReset()
                } else if (result.status == 200) {
                    toast.success("Book added successfully")
                    handleReset()
                } else {
                    toast.error("Something went wrong")
                    handleReset()
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-neutral-950 text-gray-200 flex flex-col items-center px-5 md:px-20 py-16"
        >
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-red-500 mb-2">
                    Add Your Profession
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Showcase your freelance profile to attract clients. Fill in your
                    professional details and upload your visuals.
                </p>
            </div>

            {/* Form */}
            <form className="job-form w-full max-w-4xl bg-neutral-900 rounded-2xl shadow-lg p-8 space-y-6">
                {/* Section 1 */}
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Job Title</label>
                        <input
                            type="text"
                            placeholder="e.g. Video Editor, Web Developer"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Specializations</label>
                        <input
                            type="text"
                            placeholder="e.g. HTML, CSS, React, Premiere Pro"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Fees</label>
                        <input
                            type="text"
                            placeholder="₹5000 per project"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Section 3 */}
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Availability</label>
                        <input
                            type="text"
                            placeholder="Available / Not Available"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Location</label>
                        <input
                            type="text"
                            placeholder="Your city, country"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Summary */}
                <div className="flex flex-col job-section">
                    <label className="text-sm text-gray-400 mb-2">Summary</label>
                    <textarea
                        rows="3"
                        placeholder="Write a short description about your work and expertise..."
                        className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                    />
                </div>

                {/* Experience & Skills */}
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Experience</label>
                        <input
                            type="text"
                            placeholder="e.g. 3 years"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Technical Skills</label>
                        <input
                            type="text"
                            placeholder="e.g. React, Node.js, After Effects"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Contact & Social Links */}
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Contact (Email / Phone)</label>
                        <input
                            type="text"
                            placeholder="email@example.com / +91-0000000000"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Social Links</label>
                        <input
                            type="text"
                            placeholder="LinkedIn / GitHub / Portfolio URL"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Works */}
                <div className="flex flex-col job-section">
                    <label className="text-sm text-gray-400 mb-2">Your Works / Projects</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        max={10}
                        className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-400 focus:outline-none focus:border-red-500"
                    />
                </div>

                {/* Profile & Background Photos */}
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Profile Photo</label>
                        <input
                            type="file"
                            className="p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-400 focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Background Photo</label>
                        <input
                            type="file"
                            className="p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-400 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Status */}
                <div className="flex flex-col job-section">
                    <label className="text-sm text-gray-400 mb-2">Status</label>
                    <select className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-300 focus:outline-none focus:border-red-500">
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6 job-section">
                    <button
                        type="button"
                        className="px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg text-white font-semibold shadow-md flex items-center gap-2 justify-center mx-auto"
                    >

                        Post Job
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddJob;