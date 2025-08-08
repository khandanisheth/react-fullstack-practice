import { useState } from "react"
import styles from "../Css/Button.module.css"
import { text } from "@fortawesome/fontawesome-svg-core";
const R_13_ShowPasswordHide = () => {
    const[psstatus,Setpass]=useState(false);
    return (
        <>
            <input type={psstatus?'text':'password'} placeholder="Enter Password"/>
            <button className={styles.btn1} onClick={()=>Setpass(!psstatus)}>{psstatus?'Hide':'Show'}</button>
        </>
    )
}

export default R_13_ShowPasswordHide;