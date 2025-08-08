import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { LC, N, S, UC } from '../data/passgen'


// navigator:
// JavaScript ka navigator object browser ka ek built-in API hai jo browser ke environment ke baare me 
// information aur functionality provide karta hai.


function R_22_PasswordGenreter() {
    const [upperCase, setupperCase] = useState(false)
    const [lowerCase, setlowerCase] = useState(false)
    const [numberCase, setnumberCase] = useState(false)
    const [symbleCase, setSynbleCase] = useState(false)
    const [passLength, setPassLength] = useState(20);
    const [passWord, setPassWord] = useState('');
    let createPassWord = () => {
        if (upperCase || lowerCase || numberCase || symbleCase) {
            let passChar = '';
            let finalPass = '';
            if (upperCase) passChar += UC;
            if (lowerCase) passChar += LC;
            if (numberCase) passChar += N;
            if (symbleCase) passChar += S;
            for (let i = 0; i <= passLength; i++) {
                finalPass += passChar.charAt(Math.floor(Math.random() * passChar.length));
            }
            setPassWord(finalPass);
        }
        else {
            toast.warning("Please Cheked Button");
        }
    }

    let copyPass = () => {
        navigator.clipboard.writeText(passWord);
        toast.info("PassWord Coyp SuccessFully");
    }
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Password Generator
                </h2>

                <div style={styles.row}>
                    <input type="text" readOnly value={passWord} style={styles.passwordField} placeholder="Your password..." />
                    <button style={styles.copyBtn} onClick={copyPass}>Copy</button>
                </div>

                <div style={styles.settingRow}>
                    <label>Password length</label>
                    <input type="number" max={20} min={4} value={passLength} onChange={(e) => {
                        const val = Number(e.target.value);
                        if (val >= 4 && val <= 20) {
                            setPassLength(val);
                        } else {
                            toast.warning("Password length must be between 4 and 20");
                        }
                    }} style={styles.input} />
                </div>

                <div style={styles.settingRow}>
                    <label>Include uppercase letters</label>
                    <input type="checkbox" checked={upperCase} onChange={() => setupperCase(!upperCase)} />
                </div>
                <div style={styles.settingRow}>
                    <label>Include lowercase letters</label>
                    <input type="checkbox" checked={lowerCase} onChange={() => setlowerCase(!lowerCase)} />
                </div>
                <div style={styles.settingRow}>
                    <label>Include numbers</label>
                    <input type="checkbox" checked={numberCase} onChange={() => setnumberCase(!numberCase)} />
                </div>
                <div style={styles.settingRow}>
                    <label>Include symbols</label>
                    <input type="checkbox" checked={symbleCase} onChange={() => setSynbleCase(!symbleCase)} />
                </div>

                <button style={styles.generateBtn} onClick={createPassWord}>
                    Generate Password
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default R_22_PasswordGenreter;
const styles = {
    container: {
        backgroundColor: "#1a1a40",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        backgroundColor: "#9c27b0",
        padding: "30px",
        borderRadius: "10px",
        color: "#fff",
        width: "350px",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    },
    passwordField: {
        flex: 1,
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "none",
    },
    copyBtn: {
        marginLeft: "10px",
        padding: "10px 15px",
        fontSize: "14px",
        backgroundColor: "#fff",
        color: "#9c27b0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    row: {
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
    },
    settingRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
    },
    input: {
        width: "60px",
        padding: "5px",
        borderRadius: "4px",
        border: "none",
        fontSize: "16px",
    },
    generateBtn: {
        marginTop: "15px",
        width: "100%",
        padding: "10px",
        backgroundColor: "#fff",
        color: "#9c27b0",
        fontSize: "16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },

};