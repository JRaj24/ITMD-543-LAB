import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Signup successful!");
        navigate("/");
      } else {
        const data = await response.json();
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
      background: "linear-gradient(135deg, #fff8f0, #ffe4c7)",
      textAlign: "center",
      fontFamily: "'Arial', sans-serif",
    },
    heading: {
      fontSize: "2rem",
      color: "#a97a46",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px",
      fontSize: "1rem",
      border: "1px solid #c49358",
      borderRadius: "8px",
      outline: "none",
      transition: "box-shadow 0.3s ease, transform 0.2s ease",
    },
    inputFocus: {
      boxShadow: "0 0 8px rgba(201, 147, 88, 0.5)",
      transform: "scale(1.02)",
    },
    button: {
      padding: "12px 20px",
      fontSize: "1rem",
      color: "white",
      backgroundColor: "#c49358",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    buttonHover: {
      backgroundColor: "#a97a46",
      transform: "scale(1.03)",
    },
    secondaryButton: {
      padding: "10px 15px",
      fontSize: "1rem",
      color: "#c49358",
      backgroundColor: "white",
      border: "1px solid #c49358",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "15px",
      transition: "all 0.3s ease",
    },
    secondaryButtonHover: {
      backgroundColor: "#c49358",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Sign Up</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
          onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
          onBlur={(e) => Object.assign(e.target.style, { boxShadow: "", transform: "" })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
          onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
          onBlur={(e) => Object.assign(e.target.style, { boxShadow: "", transform: "" })}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
          onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
          onBlur={(e) => Object.assign(e.target.style, { boxShadow: "", transform: "" })}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) =>
            Object.assign(e.target.style, styles.buttonHover)
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, {
              backgroundColor: styles.button.backgroundColor,
              transform: "",
            })
          }
        >
          Sign Up
        </button>
      </form>
      <button
        style={styles.secondaryButton}
        onMouseOver={(e) =>
          Object.assign(e.target.style, styles.secondaryButtonHover)
        }
        onMouseOut={(e) =>
          Object.assign(e.target.style, {
            backgroundColor: styles.secondaryButton.backgroundColor,
            color: styles.secondaryButton.color,
          })
        }
        onClick={() => navigate("/signin")}
      >
        Already Signed In? Log In
      </button>
    </div>
  );
}
