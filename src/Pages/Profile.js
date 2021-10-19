import ToggleBtn from '../Utils/ToggleBtn'
import React, { useState, useEffect, useRef } from 'react'

const Profile = () => {

    const [weight, setWeight] = useState(null);
    const [email, setEmail] = useState(null);
    const [save, setSave] = useState(false);

    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    const handleSave = () => {
        if (save) {
            return 
        }
    }
    
    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setSave(false)
        }, 3000)

        return () => {
        console.log('useEffect init');
        clearTimeout(timeId)
        }
    }, [save]);
    return (
        <div className="container mx-auto border-solid rounded w-full lg:w-5/12">
            <div className="py-4 px-6 rounded-lg">
                <div className="profile-header">
                    <h2 className="font-medium text-2xl">Profile page</h2>
                    <h3 className="font-light text-xl">John Doe</h3>
                    <img src="https://thispersondoesnotexist.com/image" width="150px" alt="first name" className="profile-picture rounded-full my-4"/>
                </div>

                <div className='general-info py-4'>
                    <h3 className="email pb-2">E-mail</h3>
                    <div className="block">
                    <input type="text" ref={inputEl} value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email@email.com" className="bg-gray-100 p-2 rounded-xl text-gray-400"></input>
                    <button onClick={onButtonClick} className="text-sm pl-2">Edit email</button>
                    </div>
                    <h3 className="current-weight py-2">Current weight</h3>
                    <div className="flex">
                        <input type="number" value={weight} placeholder="80" className="bg-gray-100 p-2 rounded-xl text-gray-500"
                        onChange={(e)=> setWeight(e.target.value)}></input>
                        <p className="p-2">Kg</p>
                    </div>
                </div>

                <div className="toggle-settings py-8">
                    <ToggleBtn info="Keep my profile secret" />
                </div>
                <div className="save">
                    <button className="save-btn py-2 px-2 rounded-xl" onClick={()=> setSave(!save)}>Save changes</button>
                    <p className="sucess py-2 px-1">{save ? `Changes saved!` : ` ` }</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;