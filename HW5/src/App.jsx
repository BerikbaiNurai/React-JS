import React from "react";
import { useFormik } from "formik";

export default function App() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      course: "",
      gender: "",
      dob: "",
      city: "",
      country: "",
      phone: "",
      education: "",
      address: "",
      state: "",
      zip: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.fullName) errors.fullName = "Full name is required";
      if (!values.email) errors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Invalid email address";
      if (!values.password) errors.password = "Password is required";
      else if (values.password.length < 6) errors.password = "Password must be at least 6 characters";
      if (!values.course) errors.course = "Please select a course";
      if (!values.gender) errors.gender = "Please select gender";
      if (!values.dob) errors.dob = "Date of birth is required";
      if (!values.city) errors.city = "City is required";
      if (!values.country) errors.country = "Country is required";
      if (values.zip && !/^\d+$/.test(values.zip)) errors.zip = "Zip code must contain only numbers";
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", marginLeft: "400px"}}>
      <h1 style={{ textAlign: "center" }}>Course Application</h1>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Full Name:</label>
          <input name="fullName" type="text" onChange={formik.handleChange} value={formik.values.fullName} />
          {formik.errors.fullName && <div style={{ color: "red" }}>{formik.errors.fullName}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
          {formik.errors.password && <div style={{ color: "red" }}>{formik.errors.password}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Course:</label>
          <div>
            <label>
              <input type="radio" name="course" value="Course A" onChange={formik.handleChange} checked={formik.values.course === "Course A"} />
              Course A
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input type="radio" name="course" value="Course B" onChange={formik.handleChange} checked={formik.values.course === "Course B"} />
              Course B
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input type="radio" name="course" value="Course C" onChange={formik.handleChange} checked={formik.values.course === "Course C"} />
              Course C
            </label>
          </div>
          {formik.errors.course && <div style={{ color: "red" }}>{formik.errors.course}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Gender:</label>
          <div>
            <label>
              <input type="radio" name="gender" value="Male" onChange={formik.handleChange} checked={formik.values.gender === "Male"} />
              Male
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input type="radio" name="gender" value="Female" onChange={formik.handleChange} checked={formik.values.gender === "Female"} />
              Female
            </label>
          </div>
          {formik.errors.gender && <div style={{ color: "red" }}>{formik.errors.gender}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Date of Birth:</label>
          <input type="date" name="dob" onChange={formik.handleChange} value={formik.values.dob} />
          {formik.errors.dob && <div style={{ color: "red" }}>{formik.errors.dob}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>City:</label>
          <input name="city" type="text" onChange={formik.handleChange} value={formik.values.city} />
          {formik.errors.city && <div style={{ color: "red" }}>{formik.errors.city}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Country:</label>
          <select name="country" onChange={formik.handleChange} value={formik.values.country}>
            <option value="">Select country</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {formik.errors.country && <div style={{ color: "red" }}>{formik.errors.country}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Phone:</label>
          <input name="phone" type="text" onChange={formik.handleChange} value={formik.values.phone} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Education:</label>
          <select name="education" onChange={formik.handleChange} value={formik.values.education}>
            <option value="">Select education</option>
            <option value="School">School</option>
            <option value="College">College</option>
            <option value="University">University</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Address:</label>
          <textarea name="address" onChange={formik.handleChange} value={formik.values.address} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>State:</label>
          <input name="state" type="text" onChange={formik.handleChange} value={formik.values.state} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Zip Code:</label>
          <input name="zip" type="text" onChange={formik.handleChange} value={formik.values.zip} />
          {formik.errors.zip && <div style={{ color: "red" }}>{formik.errors.zip}</div>}
        </div>

        <button
          type="submit"
          style={{
            background: "green",
            color: "white",
            padding: "10px",
            width: "100%",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}