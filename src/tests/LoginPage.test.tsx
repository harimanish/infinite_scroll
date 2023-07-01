// import { render, screen, fireEvent } from "@testing-library/react";
// import { AuthContext } from "../contexts/Auth.context";
// import { useState } from "react";
// import "@testing-library/jest-dom/extend-expect";
// import LogIn from "../pages/LogIn";

// describe("Login", () => {
//     test("should render the login form", () => {
//         render(
//             <AuthContext.Provider
//                 value={{ isLogged: false, setIsLogged: jest.fn() }}
//             >
//                 <LogIn />
//             </AuthContext.Provider>
//         );

//         // Assert that the login form elements are rendered
//         expect(screen.getByLabelText("Email")).toBeInTheDocument();
//         expect(screen.getByLabelText("Password")).toBeInTheDocument();
//         expect(screen.getByLabelText("Remember Me")).toBeInTheDocument();
//         expect(screen.getByText("Sign In")).toBeInTheDocument();
//         expect(
//             screen.getByText("Don't have an account? Sign Up")
//         ).toBeInTheDocument();
//     });

//     test("should update input values when typed", () => {
//         render(
//             <AuthContext.Provider
//                 value={{ isLogged: false, setIsLogged: jest.fn() }}
//             >
//                 <LogIn />
//             </AuthContext.Provider>
//         );

//         // Type into the email and password inputs
//         fireEvent.change(screen.getByLabelText("Email"), {
//             target: { value: "test@example.com" },
//         });
//         fireEvent.change(screen.getByLabelText("Password"), {
//             target: { value: "password123" },
//         });

//         // Assert that the input values are updated
//         expect(screen.getByLabelText("Email").getAttribute("value")).toBe(
//             "test@example.com"
//         );
//         expect(screen.getByLabelText("Password").getAttribute("value")).toBe(
//             "password123"
//         );
//     });

//     test("should call handleSignIn when Sign In button is clicked", () => {
//         const setIsLogged = jest.fn();
//         const handleSignIn = jest.fn();
//         const history = jest.fn();
//         const mockNavigate = jest.fn();

//         jest.mock("react-router-dom", () => ({
//             ...jest.requireActual("react-router-dom"),
//             useNavigate: () => mockNavigate,
//         }));

//         render(
//             <AuthContext.Provider value={{ isLogged: false, setIsLogged }}>
//                 <LogIn />
//             </AuthContext.Provider>
//         );

//         // Mock the handleSignIn function
//         global.fetch = jest.fn().mockResolvedValue(Promise.resolve(Response));

//         // Type into the email and password inputs
//         fireEvent.change(screen.getByLabelText("Email"), {
//             target: { value: "foo" },
//         });
//         fireEvent.change(screen.getByLabelText("Password"), {
//             target: { value: "bar" },
//         });

//         // Click the Sign In button
//         fireEvent.click(screen.getByText("Sign In"));

//         // Assert that handleSignIn is called
//         expect(handleSignIn).toHaveBeenCalled();
//     });
// });
