import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Make sure you import the CSS
import loaderGif from '../data/ld.gif'
export default function R_23_WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const apiKey = "fae99f4b6ce5700ca44c67c63776ae4c";

    useEffect(() => {
        if (error) {
            toast.warning(error);
        }
    }, [error]);

    const dataFetch = async (e) => {
        e.preventDefault();
        if (!city) {
            setError("⚠️ Please enter a city name");
            return;
        }
// https://www.google.com/search?q=weather+sarkhej-okaf&sca_esv=e6a856e083a4051b&rlz=1C1VDKB_enIN1023IN1023&sxsrf=AE3TifOmdHmV34mzhKQD8qVefKS6Iqim1w%3A1753631798554&ei=NkyGaJvFIcyI4-EPpOP0yQ0&oq=weather++&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXdlYXRoZXIgICoCCAEyChAjGIAEGCcYigUyChAjGIAEGCcYigUyBBAjGCcyDRAAGIAEGLEDGBQYhwIyDRAAGIAEGLEDGBQYhwIyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyCxAAGIAEGLEDGMkDMgsQABiABBiSAxiKBUjRIlCYEliYEnACeAGQAQCYAaIBoAGiAaoBAzAuMbgBAcgBAPgBAZgCA6AC2AHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBZgDAIgGAZAGCpIHAzIuMaAHtAmyBwMwLjG4B70BwgcFMy0yLjHIBy8&sclient=gws-wiz-serp
        setLoading(true); // 🔁 Start loading

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            const data = await res.json();

            if (data.cod === 200) {
                setWeather(data);
                setError("");
            } else {
                setWeather(null);
                setError("❌ City not found");
            }
        } catch (err) {
            setWeather(null);
            setError("⚠️ Something went wrong");
        } finally {
            setLoading(false); // ✅ Stop loading after fetch
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>🌤️ Simple Weather App</h2>


            <form style={styles.form} onSubmit={dataFetch}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Get Weather
                </button>
            </form>

            {weather && (
                <div style={styles.card}>
                    {loading && <img style={styles.ldimg} src={loaderGif} alt="Loading..." />}
                    <h3 style={styles.city}>
                        {weather.name.toUpperCase()}{" "}
                        <span style={styles.country}>{weather.sys.country}</span>
                    </h3>
                    <h1 style={styles.temp}>{Math.round(weather.main.temp)}°C</h1>
                    <p style={styles.desc}>{weather.weather[0].description}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="weather icon"
                        style={styles.icon}
                    />
                </div>
            )}

            <ToastContainer />
        </div>
    );
}


const styles = {

    ldimg: {
        height: "50px",
        position: "absolute",
        left: "47%",
    },
    container: {
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "32px",
        marginBottom: "30px",
    },
    form: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px",
        gap: "10px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "6px",
        border: "none",
        width: "250px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#283593",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    card: {
        background: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        color: "#333",
        width: "300px",
        margin: "auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
    },
    city: {
        fontSize: "24px",
        marginBottom: "10px",
    },
    country: {
        backgroundColor: "#ffeb3b",
        padding: "2px 6px",
        borderRadius: "4px",
    },
    temp: {
        fontSize: "40px",
        margin: "10px 0",
    },
    desc: {
        fontSize: "20px",
        color: "#555",
        textTransform: "capitalize",
    },
    icon: {
        width: "80px",
    },
};
