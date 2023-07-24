import React, { useState } from 'react';
import programmingSkills from './SkillsApi';

const skillsList = programmingSkills

const SelectSkill = () => {
    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleSkillClick = (skill) => {
        setSelectedSkills((prevSelectedSkills) => {
            if (prevSelectedSkills.includes(skill)) {
                // If the skill is already selected, remove it from the list
                return prevSelectedSkills.filter((selectedSkill) => selectedSkill !== skill);
            } else {
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
                            <h3>Welcome to JobNet, Username</h3>
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
                    <div className='text-center my-3'>
                        <button className="btn btn-dark">Continue</button>
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
