import { useParams } from "react-router-dom"
import Heart from "../assets/MyHeart.json"
import Fellas from '../assets/List.json'

export default function Steve(){

    const { username, password } = useParams()
    const formData = Fellas.filter((value) => (username == value.username.toLowerCase() && password == String(value.password)))
    const [ d ] = (Heart.filter((value) => (value.name == username)))

    console.log(formData, d)

    return (
        <div className="flex flex-col items-center m-5">
            <h1 className="text-white text-5xl p-5 font-semibold">To {username}</h1>
            {formData.length != 0 && (
                <div className="bg-zinc-800 rounded-md ">
                    <p className="p-5 text-white">{d.data}</p>
                </div>
            )}
            
        </div>
    )

}