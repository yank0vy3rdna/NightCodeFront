import React, {useState} from "react";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

function RegistrationForm() {
    const signUp = e => {
        let information = {
            "email": email,
            "username": firstName,
            "userlastname": lastName,
            "password": password,
            "vkId": vkId,
            "faculty": faculty,
            "groupNumber": studyGroup,
            "userType": role
        };
        fetch("/sign-up", {
            method: "POST",
            body: JSON.stringify(information),
        }).then(response => response.json().then(json => {
                //todo
            }
        ))
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [faculty, setFaculty] = useState("");
    const [studyGroup, setStudyGroup] = useState("");
    const [vkId, setVkId] = useState("");
    const [role, setRole] = useState("STUDENT");
    return (<div className="registration_form">
            <form style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                fontSize: "170%",
                color: "#1e154a",
            }}>
                <div className="log-field">
                    <label>E-mail </label>
                    <InputText type="text" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="log-field">
                    <label>First Name </label>
                    <InputText type="text"  value={firstName}
                               onChange={(e) => setFirstname(e.target.value)}/>
                </div>
                <div className="log-field">
                    <label>Last Name </label>
                    <InputText type="text"  value={lastName}
                               onChange={(e) => setLastname(e.target.value)}/>
                </div>
                <div className="log-field">
                    <label>Faculty </label>
                    <InputText type="text"  value={faculty}
                               onChange={(e) => setFaculty(e.target.value)}/>
                </div>
                <div className="log-field">
                    <label>Study Group </label>
                    <InputText type="text"  value={studyGroup}
                               onChange={(e) => setStudyGroup(e.target.value)}/>
                </div>
                <div className="log-field">
                    <label>VK id </label>
                    <InputText type="text" value={vkId}
                               onChange={(e) => setVkId(e.target.value)}/>
                </div>
                <div className="log-field">
                    <label>Password </label>
                    <InputText type="password"  value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="log-field">
                    <p><input type="radio" name="a" value="STUDENT" onChange={(e) => setRole(e.target.value)}/>STUDENT
                    </p>
                    <p><input type="radio" name="a" value="TEACHER" onChange={(e) => setRole(e.target.value)}/>TEACHER
                    </p>
                </div>
                <Button className="button" type="button" onClick={signUp}>Register</Button>
            </form>
        </div>
    )
}

export default RegistrationForm;
//todo добавить препода