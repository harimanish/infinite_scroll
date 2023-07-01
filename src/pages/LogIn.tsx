import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { ChangeEvent, useContext, useEffect } from "react";
import Layout from "../Layout";
import { AuthContext } from "../contexts/Auth.context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const history = useNavigate();
    const { isLogged, setIsLogged } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem("rememberedEmail");
        const storedPassword = localStorage.getItem("rememberedPassword");
        const storedRememberMe = localStorage.getItem("rememberMe");

        if (storedRememberMe === "true" && storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSignIn = () => {
        if (email === "foo" && password === "bar") {
            setIsLogged(true);
            if (rememberMe) {
                localStorage.setItem("rememberedEmail", email);
                localStorage.setItem("rememberedPassword", password);
                localStorage.setItem("rememberMe", "true");
            } else {
                localStorage.removeItem("rememberedEmail");
                localStorage.removeItem("rememberedPassword");
                localStorage.removeItem("rememberMe");
            }

            history("/home");
        }
    };
    useEffect(() => {
        console.log(isLogged);
    }, [isLogged]);
    return (
        <>
            <Layout>
                <div className=" flex justify-center my-auto mt-20">
                    <Card className="w-96">
                        <CardHeader
                            variant="gradient"
                            color="blue"
                            className="mb-4 grid h-28 place-items-center"
                        >
                            <Typography variant="h3" color="white">
                                Sign In
                            </Typography>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-4">
                            <Input
                                label="Email"
                                size="lg"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <Input
                                label="Password"
                                size="lg"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <div className="-ml-2.5">
                                <Checkbox
                                    label="Remember Me"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                />
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                variant="gradient"
                                fullWidth
                                onClick={handleSignIn}
                            >
                                Sign In
                            </Button>
                            <Typography
                                variant="small"
                                className="mt-6 flex justify-center"
                            >
                                Don't have an account?
                                <Typography
                                    as="a"
                                    href="#signup"
                                    variant="small"
                                    color="blue"
                                    className="ml-1 font-bold"
                                >
                                    Sign Up
                                </Typography>
                            </Typography>
                        </CardFooter>
                    </Card>
                </div>
            </Layout>
        </>
    );
}
