import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationScheme = Yup.object().shape({
    name: Yup.string()
        .min(1, "Must have a character")
        .max(255, "Must be shorter than 255")
        .required("Must enter a name"),
    email: Yup.string()
        .email(1, "Must be a valid email address")
        .max(255, "Must be shorter than 255")
        .required("Must enter an email")
});


export default function FormikForm() {

    return(
        <div>
            <Formik 
                initialValues={{ name: "", email: "" }}
                validationSchema={validationScheme}

                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);

                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 200);
                }}
                >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                    // {JSON.stringify(values)}
                        <div className="input-row">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={touched.name && errors.name ? "has-error" : null}
                            />
                            </div>
                            <div className="input-row">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={touched.email && errors.email ? "has-error" : null}
                            />
                            </div>
                        
                        <div className="input-row">
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>
                        
                    </form>
                )}
            </Formik>
        </div>
    );

}