import React, {useEffect, useState} from "react";


const useFetch = () =>{
    const URL = "https://api.adviceslip.com/advice"
    const [text, setText] = useState({id: "000", advice: "Pulse el boton.",})

    useEffect(() =>{
        console.log(text)
    })

    const catchRandomAdvice = () =>{
        console.log("Catch Random Advice")
        fetch(URL).then(res => res.json())
        .then(data => {
            console.log(data)
            setText({
                advice: data.slip.advice,
                id: data.slip.id
            })
        })
    } 

    return {catchRandomAdvice, text, setText}
}


export default useFetch