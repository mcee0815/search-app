import React, { useRef,useEffect } from "react";

const Foo =  () => {
    let inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    })

    return (
        <form>
            <input type="text" ref={inputRef}/>
            <button onClick={(e) => {
                console.log(e.target.value)
                // inputRef.current.focus()
            }}>Click</button>
        </form>
        
        )
}


export default Foo;