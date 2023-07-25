import React, { useEffect, useState } from 'react';
import programmingSkills from './SkillsApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SelectSkill = () => {
    const navigate = useNavigate()
    const userDetails = JSON.parse(localStorage.getItem("userEmail"))
    const [newUser, setnewUser] = useState()
    const skillsList = programmingSkills
    const [selectedSkills, setSelectedSkills] = useState([]);

    const [isSelected, setisSelected] = useState(true)

    

    console.log(userDetails);
    useEffect(() => {
        axios.get(`http://localhost:5353/users/getNewUser/${userDetails.email}`).then((res)=>{
            setnewUser(res.data)
            console.log(newUser);
            // console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])


    const UpdateSkill = () => {
        newUser.skills = selectedSkills;
        let skills = newUser.skills
        let id = newUser._id
        let data = {skills, id}
        console.log(newUser);
        const uri = "http://localhost:5353/users/updateUserSkill"
        axios.post(uri, data).then((res) => {
            console.log(res);
            alert(res.data.message)  
            localStorage.removeItem("userEmail")                  
            navigate(`/`)
        }).catch((err) => {
            console.log(err);
            alert(err.response.data.message)
        })
        
    }
    
    const handleSkillClick = (skill) => {
        
        setSelectedSkills((prevSelectedSkills) => {
            if (prevSelectedSkills.includes(skill)) {
                console.log(selectedSkills.length-1);
                if (selectedSkills.length-1 <= 2) {
                    setisSelected(true)
                }
                else {
                    setisSelected(false)
                }
                // If the skill is already selected, remove it from the list
                return prevSelectedSkills.filter((selectedSkill) => selectedSkill !== skill);
            } else {
                if (selectedSkills.length+1 > 2) {
                    setisSelected(false)
                }
                else {
                    setisSelected(true)
                }
                // console.log(selectedSkills.length+1);
                // If the skill is not selected, add it to the list
                return [...prevSelectedSkills, skill];
            }
            
        });
    };

    
    return (
        <>
            <div className='skill-page container mx-auto d-flex align-items-center justify-content-center'>
                <div className='mx-auto col-sm-8 shadow p-3'>
                    <div className="skills-container">
                        <div className='text-center'>
                            <h3>Welcome to JobNet, {userDetails.userName}</h3>
                            <h2>ADD YOUR SKILLS</h2>
                        </div>
                        {skillsList.map((skill, index) => (
                            <button
                                key={index}
                                className={`skill-button ${selectedSkills.includes(skill.name) ? 'selected' : ''}`}
                                onClick={() => handleSkillClick(skill.name)}
                            >
                                {skill.name}
                            </button>
                        ))}
                    </div>
                    {isSelected && selectedSkills.length !== 0? 
                    <small className='text-danger fw-bold'>You must add at least three (3) skills</small> 
                    : null}
                    <div className='text-center my-3'>
                        <button disabled={isSelected} onClick={UpdateSkill} className="btn btn-dark">Continue</button>
                    </div>
                    {/* <div>
                        <h3>Selected Skills:</h3>
                        {selectedSkills.map((skill, index) => (
                            <div key={index}>{skill}</div>
                        ))}
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default SelectSkill;
