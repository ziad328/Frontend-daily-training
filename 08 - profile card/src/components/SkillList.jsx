import React from 'react'
import Skill from './Skill'
function SkillList() {
    return (<>
        <div className="skill-list">
            <Skill skill="React" emoji="⚛️" color="blue" />
            <Skill skill="HTML+CSS" emoji="💪" color="orange" />
            <Skill skill="JavaScript" emoji="☢️" color="yellow" />
            <Skill skill="Figma" emoji="👶" color="purple" />
        </div>
    </>)
}

export default SkillList