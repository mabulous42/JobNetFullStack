import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import programmingSkills from '../SkillsApi';
import { useFormik } from 'formik';
import * as yup from 'yup'
import NavBar from '../NavBar';
import Banner from '../Banner';
import SideBar from './SideBar';
import ContentContainer from '../ContentContainer';
import axios from 'axios';
import { router } from '../Router/Router';
import { useDispatch, useSelector } from 'react-redux';
import { getJob } from '../Functions/GetJob';
import Loader from '../Loader';

function EditPostedJob() {
    const [myJob, setmyJob] = useState({})

    let editJobID = JSON.parse(localStorage.getItem("EditJobID"))



    const skillsList = programmingSkills
    const [isSelected, setisSelected] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [currentEmployer, setcurrentEmployer] = useState("")

    // const { isFetching, JobDetails, fetchErr } = useSelector((state) => state.FetchAJob)
    // console.log(JobDetails);
    // console.log(isFetching);

    // useEffect(() => {
    //     getJob(dispatch)
    // }, [])

    const editJob = JSON.parse(localStorage.getItem("myJOB"));
    console.log("testing: ", editJob);



    const [jobTitle, setjobTitle] = useState("")
    const [selectedSkills, setSelectedSkills] = useState([]);
    // useEffect(() => {
    //     if (JobDetails) {
    //         setmyJob(JobDetails)
    //         if (myJob) {
    //             setjobTitle("Mustapha")
    //         }
    //         // setSelectedSkills(myJob.requiredSkills)
    //     }
    // }, [JobDetails])
    // console.log(myJob.requiredSkills);

    // console.log(jobTitle);   


    const show = () => {
        console.log(myJob.jobDescription);
    }


    //this keeps track and make sure the submit button is disabled 
    //if there is no skill seleted or otherwise
    useEffect(() => {
        if (selectedSkills.length === 0) {
            setisSelected(true);
        } else {
            setisSelected(false);
        }
    }, [selectedSkills]);

    const handleSkillClick = (e, skill) => {
        e.preventDefault()
        setSelectedSkills((prevSelectedSkills) => {
            if (prevSelectedSkills.includes(skill)) {
                if (selectedSkills.length - 1 === 0) {
                    setisSelected(true)
                }
                else {
                    setisSelected(false)
                }

                // If the skill is already selected, remove it from the list
                return prevSelectedSkills.filter((selectedSkill) => selectedSkill !== skill);
            } else {
                console.log("Selected: " + Number(selectedSkills.length + 1));
                if (selectedSkills.length + 1 >= 1) {
                    setisSelected(false)
                }
                else {
                    setisSelected(true)
                }
                // If the skill is not selected, add it to the list
                return [...prevSelectedSkills, skill];
            }
        });
    };

    const onSubmit = (values, errors) => {
        let postedJobDetails = {
            jobTitle: values.jobTitle,
            jobDescription: values.jobDescription,
            salaryType: values.selectedSalaryType,
            min_salary: values.min_salary,
            max_salary: values.max_salary,
            jobType: values.selectedJobType,
            requiredSkills: selectedSkills,
            email: currentEmployer.email,//pass the email here
            author: currentEmployer.employerName // pass the author here
        }

        console.log(postedJobDetails);
        // const uri = "http://localhost:5353/users/jobs"
        // axios.post(uri, postedJobDetails).then((res) => {
        //     console.log(res);
        //     alert(res.data.message)
        //     navigate("/employerDashboard")
        // }).catch((err) => {
        //     console.log(err);
        //     alert(err.response.data.message)
        // })
    }


    const { handleSubmit, handleChange, errors, touched, handleBlur, values, setFieldValue } = useFormik({
        initialValues: {
            jobTitle: "",
            jobDescription: "",
            min_salary: "",
            max_salary: "",
            selectedJobType: "",
            selectedSalaryType: ""
        },
        enableReinitialize: true,
        validationSchema: yup.object().shape({
            jobTitle: yup.string()
                .min(2, "Job title is too short")
                .max(50, "Job title is too long")
                .required("This field cannot be empty"),
            jobDescription: yup.string()
                .min(2, "Job description is too short")
                .required("This field cannot be empty"),
            min_salary: yup.number()
                .required("This field cannot be empty"),
            max_salary: yup.number()
                .required("This field cannot be empty"),
            selectedJobType: yup.string()
                .required('Please select a job type'),
            selectedSalaryType: yup.string()
                .required('Please select a salary type')
        }),
        onSubmit
    })

    useEffect(() => {
        console.log("Effect triggered");
        axios.get(`${router}/users/editJob/${editJobID}`).then((res) => {
            console.log(res.data);

            // Update the form values using setFieldValue
            setFieldValue('jobTitle', res.data.jobTitle.myFetchedValue);
            setFieldValue('jobDescription', res.data.jobDescription.myFetchedValue);
            setFieldValue('min_salary', res.data.min_salary.myFetchedValue);
            setFieldValue('max_salary', res.data.max_salary.myFetchedValue);
            setFieldValue('selectedJobType', res.data.selectedJobType.myFetchedValue);
            setFieldValue('selectedSalaryType', res.data.selectedSalaryType.myFetchedValue);
        }).catch((err) => {
            console.log(err);
        })
    }, [editJobID])


    const showSkill = () => {
        console.log(selectedSkills);
    }


    return (
        <>
            <NavBar
                PostJobBtn={
                    <Link to={"/postJob"}>
                        <button className="post-a-job-btn py-2 px-3 rounded-pill">Post a Job</button>
                    </Link>}
            />
            <Banner />
            <SideBar
                manageJobsStyle='dashboard text-dark d-flex align-items-center w-100 px-4 py-2 rounded'
                PostJobStyle='side-menu-btn d-flex align-items-center w-100 px-4 py-2 rounded'
                dashboardStyle="side-menu-btn d-flex align-items-center w-100 px-4 py-2 rounded"
            />
            <ContentContainer
                pageName="Edit Job"
                Arrow="‣"
                pageDirectory="Manage Job"
                Arrow2="‣"
                pageDirectory2="Edit"
                postJob=
                {
                    <div>
                        {
                            false
                                ?
                                <div className='position-absolute loader-div d-flex align-items-center justify-content-center'>
                                    <Loader />
                                </div>
                                :
                                <div>
                                    <button className="btn btn-dark" onClick={show}>SHOW</button>
                                    <form action="" onSubmit={handleSubmit} className='pt-5'>
                                        <div className='shadow bg-white p-5 rounded-4 mb-5'>
                                            <h4 className='job-text mb-3'>Job Details</h4>
                                            <div className='mt-4'>
                                                <h6>Job Title*</h6>
                                                <input onBlur={handleBlur} value={values.jobTitle} onChange={handleChange} className='w-100 job-input rounded px-3' placeholder='Ex: Product Designer' type="text" name="jobTitle" id="" />
                                                {touched.jobTitle && errors.jobTitle &&
                                                    <small className='text-danger fw-bold'>{errors.jobTitle}</small>
                                                }
                                            </div>
                                            <div className='mt-4'>
                                                <h6>Job Description*</h6>
                                                <textarea onBlur={handleBlur} value={values.jobDescription} onChange={handleChange} className='w-100 job-input rounded px-3' placeholder='Write about the job in details...' name="jobDescription" id="" cols="30" rows="6"></textarea>
                                                {touched.jobDescription && errors.jobDescription &&
                                                    <small className='text-danger fw-bold'>{errors.jobDescription}</small>
                                                }
                                            </div>
                                            <div className='mt-4 select-container'>
                                                <h6>Job Type</h6>
                                                <select onChange={handleChange} onBlur={handleBlur} value={values.selectedJobType} name="selectedJobType" id="" className='w-50 job-input rounded'>
                                                    <option className='form-control' value="" selected disabled>Select</option>
                                                    <option className='form-control' value="Full Time">Full Time</option>
                                                    <option className='form-control' value="Part Time">Part Time</option>
                                                    <option className='form-control' value="Freelance">Freelance</option>
                                                </select>
                                                {touched.selectedJobType && errors.selectedJobType ? (
                                                    <small className="text-danger fw-bold">{errors.selectedJobType}</small>
                                                ) : null}
                                            </div>
                                            <div className='mt-4'>
                                                <h6>Salary</h6>
                                                <div className='d-flex'>
                                                    <div className='w-50'>
                                                        <select onChange={handleChange} onBlur={handleBlur} value={values.selectedSalaryType} name="selectedSalaryType" id="" className='salary job-input rounded w-100'>
                                                            <option className='form-control' value="" selected disabled>Select</option>
                                                            <option className='form-control' value="Monthly">Monthly</option>
                                                            <option className='form-control' value="Weekly">Weekly</option>
                                                        </select>
                                                        {touched.selectedSalaryType && errors.selectedSalaryType ? (
                                                            <small className="text-danger fw-bold">{errors.selectedSalaryType}</small>
                                                        ) : null}
                                                    </div>
                                                    <div className='w-25 mx-4'>
                                                        <input onBlur={handleBlur} value={values.min_salary} onChange={handleChange} className='w-100 job-input rounded' placeholder='Min' type="text" name="min_salary" id="" />
                                                        {touched.min_salary && errors.min_salary &&
                                                            <small className='text-danger fw-bold'>{errors.min_salary}</small>
                                                        }
                                                    </div>
                                                    <div className='w-25'>
                                                        <input onBlur={handleBlur} value={values.max_salary} onChange={handleChange} className='w-100 job-input rounded' placeholder='Max' type="text" name="max_salary" id="" />
                                                        {touched.max_salary && errors.max_salary &&
                                                            <small className='text-danger fw-bold'>{errors.max_salary}</small>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <h4 className='job-text mb-3 fs-5'>Skills & Experience</h4>
                                                <h6>Skills*</h6>
                                                <input className='w-100 job-input rounded px-3'
                                                    placeholder='Add skills'
                                                    type="text" name="" id=""
                                                    value={selectedSkills.join(', ')}
                                                />
                                                <div>
                                                    {skillsList.map((skill, index) => (
                                                        <button
                                                            key={index}
                                                            className={`skill-button ${selectedSkills.includes(skill.name) ? 'selected' : ''}`}
                                                            onClick={(event) => handleSkillClick(event, skill.name)}
                                                        >
                                                            {skill.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='me-3'>
                                                <button disabled={isSelected} type='submit' className="btn btn-dark rounded-pill px-5 py-2">Post Job</button>
                                            </div>
                                            <div>
                                                <Link to={"/employerDashboard"}>
                                                    <button className="py-2 cancel-btn">Cancel</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                    <button onClick={showSkill} className='btn border-dark'>Show selected skill</button>
                                </div>
                        }
                    </div>
                }
            />
        </>
    )
}

export default EditPostedJob