import React, { useState } from 'react';

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPasword] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState("");
    
    return (
        <div>
            <h1>Sign page</h1>
        </div>
    )
}