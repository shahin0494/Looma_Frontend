import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { addJobsAPI } from "../../services/allAPI";
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaChevronLeft } from "react-icons/fa";
import { Check, RotateCcw } from 'lucide-react';
import { LuRotateCcw } from "react-icons/lu";
import { MdDone } from "react-icons/md";



gsap.registerPlugin(ScrollTrigger);

function AddJob() {


    const containerRef = useRef(null);
    const [jobDetails, setJobDetails] = useState({
        username: "", jobTitle: "", specializations: [], fees: "", availability: "", location: "", summary: "", experience: [], technicalSkills: [
            { category: "", skills: [] }
        ], email: "", phone: "", website: "", github: "", linkedin: "", twitter: "", portfolio: "", works: [], status: "", profilePhoto: [], backgroundPhoto: []
    })
    const [token, setToken] = useState("")
    const [deleteJob, setDeleteJob] = useState(false)
    const [previewList, setPreviewList] = useState([])
    const [profilePreviewList, setProfilePreviewList] = useState([])
    const [backgroundPreviewList, setBackgroundPreviewList] = useState([])
    const navigate = useNavigate()

    console.log(jobDetails);


    // gsap
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

    useEffect(() => {
        const storedToken = sessionStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    // Skill helpers
    const handleSkillChange = (index, field, value) => {
        const updatedSkills = [...jobDetails.technicalSkills];
        updatedSkills[index][field] = value;
        setJobDetails({ ...jobDetails, technicalSkills: updatedSkills });
    };
    const addSkillGroup = () => {
        const updatedSkills = [
            ...jobDetails.technicalSkills,
            { category: "", skills: [] }
        ];
        setJobDetails({ ...jobDetails, technicalSkills: updatedSkills });
    };

    const handleReset = () => {
        setJobDetails({
            username: "", jobTitle: "", specializations: [], fees: "", availability: "", location: "", summary: "", experience: [], technicalSkills: [{ category: "", skills: [] }], email: "", phone: "", website: "", github: "", linkedin: "", twitter: "", portfolio: "", works: [], status: "", profilePhoto: [], backgroundPhoto: []
        })
    }


    const handleFileUpload = (e, key) => {
        const files = Array.from(e.target.files);

        // ⭐ NEW: Limit works images to max 10
        if (key === "works") {
            const existingCount = jobDetails.works.length;
            const newCount = files.length;

            if (existingCount + newCount > 10) {
                toast.error("You can only upload a maximum of 10 images.");
                e.target.value = "";
                return;
            }
        }

        // Create preview URLs
        const newPreviews = files.map(file => URL.createObjectURL(file));

        setJobDetails(prev => ({
            ...prev,
            [key]: [...prev[key], ...files], // append files to the correct array (works/profilePhoto/backgroundPhoto)
        }));

        if (key === "works") {
            setPreviewList(prev => [...prev, ...newPreviews]);
        } else if (key === "profilePhoto") {
            setProfilePreviewList(prev => [...prev, ...newPreviews]);
        } else if (key === "backgroundPhoto") {
            setBackgroundPreviewList(prev => [...prev, ...newPreviews]);
        }
    };


    // const handleJobSubmit = async () => {
    //     const { username, jobTitle, specializations, fees, availability, location, summary, experience, technicalSkills, email, phone, website, github, linkedin, twitter, portfolio, works, status, profilePhoto, backgroundPhoto } = jobDetails
    //     if (
    //         !username.trim() ||
    //         !jobTitle.trim() ||
    //         !fees.trim() ||
    //         !availability.trim() ||
    //         !location.trim() ||
    //         !summary.trim() ||
    //         !email.trim() ||
    //         !phone.trim() ||
    //         !website.trim() ||
    //         !github.trim() ||
    //         !linkedin.trim() ||
    //         !twitter.trim() ||
    //         !portfolio.trim() ||
    //         specializations.length === 0 ||
    //         experience.length === 0 ||
    //         technicalSkills.length === 0 ||
    //         !technicalSkills[0].category.trim() ||
    //         technicalSkills[0].skills.length === 0 ||
    //         works.length === 0 ||
    //         profilePhoto.length === 0 ||
    //         backgroundPhoto.length === 0
    //     ) {
    //         toast.info("Please fill all required fields properly");
    //         return;
    //     } else {
    //         // api call
    //         const reqHeader = {
    //             "Authorization": `Bearer ${token}`,
    //             "Content-Type": "multipart/form-data"
    //         }
    //         const reqBody = new FormData();
    //         // append reqBody.append(key,value)
    //         for (let key in jobDetails) {
    //             // ✅ append files first (so multer catches them)
    //             profilePhoto.forEach((file) => {
    //                 reqBody.append("profilePhoto", file);
    //             });

    //             backgroundPhoto.forEach((file) => {
    //                 reqBody.append("backgroundPhoto", file);
    //             });

    //             works.forEach((file) => {
    //                 reqBody.append("works", file);
    //             });

    //             // ✅ append all other fields
    //             reqBody.append("username", username);
    //             reqBody.append("jobTitle", jobTitle);
    //             reqBody.append("fees", fees);
    //             reqBody.append("availability", availability);
    //             reqBody.append("location", location);
    //             reqBody.append("summary", summary);
    //             reqBody.append("email", email);
    //             reqBody.append("phone", phone);
    //             reqBody.append("website", website);
    //             reqBody.append("github", github);
    //             reqBody.append("linkedin", linkedin);
    //             reqBody.append("twitter", twitter);
    //             reqBody.append("portfolio", portfolio);
    //             reqBody.append("status", status);

    //             // Convert array fields to JSON
    //             reqBody.append("specializations", JSON.stringify(specializations));
    //             reqBody.append("experience", JSON.stringify(experience));
    //             reqBody.append("technicalSkills", JSON.stringify(technicalSkills));


    //         }
    //         try {
    //             const result = await addJobsAPI(reqBody, reqHeader)
    //             console.log(result);
    //             if (result.status == 401) {
    //                 toast.warning(result.response.data)
    //                 // clear all field
    //                 handleReset()
    //             } else if (result.status == 200) {
    //                 toast.success("Book added successfully")
    //                 // clear all field
    //                 handleReset()
    //             } else {
    //                 toast.error("Something went wrong")
    //                 // clear all field
    //                 handleReset()

    //             }
    //         } catch (err) {
    //             console.log(err);

    //         }
    //     }
    // }


    const flattenedTechnicalSkills =
        Array.isArray(jobDetails.technicalSkills) && jobDetails.technicalSkills.length > 0
            ? jobDetails.technicalSkills[0]
            : { category: "", skills: [] };

    const handleJobSubmit = async () => {
        const {
            username,
            jobTitle,
            specializations,
            fees,
            availability,
            location,
            summary,
            experience,
            technicalSkills,
            email,
            phone,
            website,
            github,
            linkedin,
            twitter,
            portfolio,
            works,
            profilePhoto,
            backgroundPhoto,
        } = jobDetails;

        // ✅ Validate all required fields
        if (
            !username.trim() ||
            !jobTitle.trim() ||
            !fees.trim() ||
            !availability.trim() ||
            !location.trim() ||
            !summary.trim() ||
            !email.trim() ||
            !phone.trim() ||
            !website.trim() ||
            !github.trim() ||
            !linkedin.trim() ||
            !twitter.trim() ||
            !portfolio.trim() ||
            specializations.length === 0 ||
            technicalSkills.length === 0 ||
            !technicalSkills[0].category.trim() ||
            technicalSkills[0].skills.length === 0 ||
            works.length === 0 ||
            profilePhoto.length === 0 
        ) {
            toast.info("Please fill all required fields properly");
            return;
        }

        try {
            const reqHeader = {
                "Authorization": `Bearer ${token}`,
            };

            const reqBody = new FormData();

            // ✅ [ADD HERE] → Get user's email from session storage
            const user = JSON.parse(sessionStorage.getItem("user"));
            const userMail = user?.email || "";
            reqBody.append("userMail", userMail);
            // 🔺 this line makes sure backend receives the uploader’s email

            // ✅ Append image files first — multer must receive these exact names
            profilePhoto.forEach((file) => reqBody.append("profilePhoto", file));
            backgroundPhoto.forEach((file) => reqBody.append("backgroundPhoto", file));
            works.forEach((file) => reqBody.append("works", file));

            // ✅ Append normal text + JSON fields
            reqBody.append("username", username);
            reqBody.append("jobTitle", jobTitle);
            reqBody.append("fees", fees);
            reqBody.append("availability", availability);
            reqBody.append("location", location);
            reqBody.append("summary", summary);
            reqBody.append("email", email);
            reqBody.append("phone", phone);
            reqBody.append("website", website);
            reqBody.append("github", github);
            reqBody.append("linkedin", linkedin);
            reqBody.append("twitter", twitter);
            reqBody.append("portfolio", portfolio);
            reqBody.append("specializations", JSON.stringify(specializations));
            reqBody.append("experience", JSON.stringify(experience));
            reqBody.append("technicalSkills", JSON.stringify(jobDetails.technicalSkills));


            // ✅ API Call
            const result = await addJobsAPI(reqBody, reqHeader);
            console.log("Upload Result:", result);

            

            if (result.status === 401) {
                toast.warning(result.response.data);
                handleReset();
            } else if (result.status === 200) {
                toast.success("Job added successfully");
                navigate("/profile")
                handleReset();
            } else {
                toast.error("Something went wrong");
                handleReset();
            }
        } catch (err) {
            console.error("Error uploading job:", err);
            toast.error("Upload failed — check console");
        }
    };



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
            <div className="job-form w-full max-w-4xl bg-neutral-900 rounded-2xl shadow-lg p-8 space-y-6">
                {/* Section 1 */}
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Username</label>
                        <input
                            value={jobDetails.username}
                            onChange={e => setJobDetails({ ...jobDetails, username: e.target.value })}
                            type="text"
                            placeholder="Enter your name"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Job Title</label>
                        <input
                            value={jobDetails.jobTitle}
                            onChange={e => setJobDetails({ ...jobDetails, jobTitle: e.target.value })}
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
                            value={jobDetails.specializations}
                            onChange={e => setJobDetails({ ...jobDetails, specializations: e.target.value })}
                            placeholder="e.g. HTML, CSS, React, Premiere Pro"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Fees</label>
                        <input
                            value={jobDetails.fees}
                            onChange={e => setJobDetails({ ...jobDetails, fees: e.target.value })}
                            type="text"
                            placeholder="₹5000 per project"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Availability</label>
                        <input
                            value={jobDetails.availability}
                            onChange={e => setJobDetails({ ...jobDetails, availability: e.target.value })}
                            type="text"
                            placeholder="₹5000 per project"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Location</label>
                        <input
                            value={jobDetails.location}
                            onChange={e => setJobDetails({ ...jobDetails, location: e.target.value })}
                            type="text"
                            placeholder="Your city, country"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Section 3 */}
                <div className="grid md:grid-cols-2 gap-6 job-section">


                    {/* <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Status</label>
                        <input
                            value={jobDetails.status}
                            onChange={e => setJobDetails({ ...jobDetails, status: e.target.value })}
                            type="text"
                            placeholder="Your city, country"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div> */}
                </div>

                {/* Summary */}
                <div className="flex flex-col job-section">
                    <label className="text-sm text-gray-400 mb-2">Summary</label>
                    <textarea
                        value={jobDetails.summary}
                        onChange={e => setJobDetails({ ...jobDetails, summary: e.target.value })}
                        rows="3"
                        placeholder="Write a short description about your work and expertise..."
                        className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                    />
                </div>

                {/* Experience & Skills */}
                {/* Experience */}
                <div className="flex flex-col job-section">
                    <label className="text-sm text-gray-400 mb-3">Experience</label>

                    {jobDetails.experience.map((exp, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                            <span className="text-red-500 text-xl">•</span>
                            <input
                                type="text"
                                value={exp}
                                onChange={(e) => {
                                    const updatedExp = [...jobDetails.experience];
                                    updatedExp[index] = e.target.value;
                                    setJobDetails({ ...jobDetails, experience: updatedExp });
                                }}
                                placeholder="e.g. 2+ Years in Graphic Design & Branding"
                                className="flex-1 p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() =>
                            setJobDetails({
                                ...jobDetails,
                                experience: [...jobDetails.experience, ""],
                            })
                        }
                        className="text-red-400 hover:text-red-500 text-sm flex items-center gap-2 mt-2"
                    >
                        + Add
                    </button>
                </div>

                {/* Technical Skills */}
                <div className="flex flex-col job-section">
                    <label className="text-sm text-gray-400 mb-3">Technical Skills</label>

                    {jobDetails.technicalSkills &&
                        Array.isArray(jobDetails.technicalSkills) &&
                        jobDetails.technicalSkills.map((skillSet, index) => (
                            <div key={index} className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col">
                                    <label className="text-xs text-gray-500 mb-1">Skill Category</label>
                                    <input
                                        value={skillSet.category}
                                        onChange={(e) => handleSkillChange(index, "category", e.target.value)}
                                        type="text"
                                        placeholder="e.g. Frontend, Backend, Design"
                                        className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-xs text-gray-500 mb-1">Skills (comma separated)</label>
                                    <input
                                        value={skillSet.skills.join(', ')}
                                        onChange={(e) =>
                                            handleSkillChange(index, "skills", e.target.value.split(",").map((s) => s.trim()))
                                        }
                                        type="text"
                                        placeholder="e.g. React, Tailwind, Node.js"
                                        className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                                    />
                                </div>
                            </div>
                        ))}

                    <button
                        type="button"
                        onClick={addSkillGroup}
                        className="text-red-400 hover:text-red-500 text-sm flex items-center gap-2 mb-4"
                    >
                        + Add Another Category
                    </button>
                </div>

                {/* Contact & Social Links */}
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Email</label>
                        <input
                            value={jobDetails.email}
                            onChange={e => setJobDetails({ ...jobDetails, email: e.target.value })}
                            type="text"
                            placeholder="email@example.com"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Phone</label>
                        <input
                            value={jobDetails.phone}
                            onChange={e => setJobDetails({ ...jobDetails, phone: e.target.value })}
                            type="text"
                            placeholder="+91-0000000000"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Website</label>
                        <input
                            value={jobDetails.website}
                            onChange={e => setJobDetails({ ...jobDetails, website: e.target.value })}
                            type="text"
                            placeholder="https://yourwebsite.com"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">GitHub</label>
                        <input
                            value={jobDetails.github}
                            onChange={e => setJobDetails({ ...jobDetails, github: e.target.value })}
                            type="text"
                            placeholder="https://github.com/username"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">LinkedIn</label>
                        <input
                            value={jobDetails.linkedin}
                            onChange={e => setJobDetails({ ...jobDetails, linkedin: e.target.value })}
                            type="text"
                            placeholder="https://linkedin.com/in/username"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">X</label>
                        <input
                            value={jobDetails.twitter}
                            onChange={e => setJobDetails({ ...jobDetails, twitter: e.target.value })}
                            type="text"
                            placeholder="https://x.com/username"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Portfolio</label>
                        <input
                            value={jobDetails.portfolio}
                            onChange={e => setJobDetails({ ...jobDetails, portfolio: e.target.value })}
                            type="text"
                            placeholder="https://portfolio.com"
                            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Works */}
                <div className="flex flex-col job-section">
                    <label className="text-sm text-gray-400 mb-2">Your Works / Projects</label>
                    <input
                        onChange={(e) => handleFileUpload(e, "works")}
                        type="file"
                        multiple
                        accept="image/*"
                        max={10}
                        className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-400 focus:outline-none focus:border-red-500"
                    />
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mt-4">
                    {previewList.map((src, index) => (
                        <div key={index} className="w-full aspect-square rounded-lg overflow-hidden border border-neutral-700">
                            <img
                                src={src}
                                alt="preview"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                

                {/* Profile & Background Photos */}
                <div className="grid md:grid-cols-2 gap-6 job-section">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Profile Photo</label>
                        <input
                            onChange={(e) => handleFileUpload(e, "profilePhoto")}
                            type="file"
                            accept="image/*"
                            className="p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-400 focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2">Background Photo</label>
                        <input
                            onChange={(e) => handleFileUpload(e, "backgroundPhoto")}
                            type="file"
                            accept="image/*"
                            className="p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-400 focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                {/* Status */}
                {/* <div className="flex flex-col job-section">
                    <label className="text-sm text-gray-400 mb-2">Status</label>
                    <select className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-300 focus:outline-none focus:border-red-500">
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>
                </div> */}

                {/* Submit Button */}
                <div className="text-center  flex justify-center gap-3 pt-6 job-section">


                    <div className="bg-neutral-800/20 rounded-lg">
                        <Link to={"/profile"}>
                            <span className="px-4 py-3  hover:bg-blue-600/40  transition-all duration-300 rounded-lg text-white font-semibold  flex items-center gap-2 justify-center"><FaChevronLeft className="text-blue-600 text-lg" /></span>
                        </Link>
                    </div>

                    <div className="bg-neutral-800/20 rounded-lg">
                        <button
                            onClick={handleReset}
                            type="button"
                            className="px-5 py-3  hover:bg-red-600/40 shadow-neutral-950 transition-all duration-300 rounded-lg text-white font-semibold flex items-center gap-2 justify-center ">
                            <LuRotateCcw className="text-red-600 text-xl" />
                        </button>
                    </div>

                    <div className="bg-neutral-800/20 rounded-lg">
                        <button
                            onClick={handleJobSubmit}
                            
                            type="button"
                            className="px-4 py-2   hover:bg-green-600/40  transition-all  duration-300 rounded-lg text-white font-semibold  flex items-center gap-2 justify-center ">
                            <MdDone className="text-green-600 text-2xl" />
                        </button>
                    </div>

                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            // transition={Slide}
            />
        </div>
    );
}

export default AddJob;