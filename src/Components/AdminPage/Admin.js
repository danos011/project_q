import {Input} from "@nextui-org/input";
import {useState} from "react";
import {EyeSlashFilledIcon} from "./Icons/EyeSlashlFilledIcons";
import {EyeFilledIcon} from "./Icons/EyeFilledIcon";
import {Button} from "@nextui-org/button";
import {useFormik} from "formik";

export const Admin = () => {
    const [isVisible, setIsVisible] = useState(false);

    const loginForm = useFormik({
        initialValues: {
            login: undefined,
            password: undefined,
        },
        onSubmit: (values) => handleLogin(values),
        validateOnChange: false,
    });

    const styles = {
        label: "text-black/50 ",
        input: [
            "bg-transparent",
            "text-black/90",
            "placeholder:text-default-700/50",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "focus-within:!bg-default-200/50",
            "border-black",
            "!cursor-text",
        ],
    };

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleLogin = (values) => {
        console.log(loginForm.values, 'values')
    }

    return (
        <div
            className={"bg-black/[.15] text-black"}>
            <div className={"min-h-[100vh] flex flex-col gap-5 justify-center items-center mx-auto w-1/2"}>
                <div className={"text-5xl text-black font-semibold font-bajazzo"}>Admin table</div>
                <div className={"flex flex-col gap-5 w-full text-black"}>
                    <Input
                        autoFocus
                        label={"Login"}
                        placeholder={"Enter your login"}
                        variant={"bordered"}
                        classNames={styles}
                        onChange={(e) =>
                            loginForm.setFieldValue('login', e.target.value)
                        }
                    />
                    <Input
                        label={"Password"}
                        placeholder={"Enter your password"}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}
                                    aria-label="toggle password visibility">
                                {isVisible ? (
                                    <EyeSlashFilledIcon
                                        className="text-2xl fill-black text-default-400 pointer-events-none"/>
                                ) : (
                                    <EyeFilledIcon
                                        className="text-2xl fill-black text-default-400 pointer-events-none"/>
                                )}
                            </button>
                        }
                        variant={"bordered"}
                        classNames={styles}
                        type={isVisible ? "text" : "password"}
                        onChange={(e) =>
                            loginForm.setFieldValue('password', e.target.value)
                        }
                    />
                    <Button color={"primary"} onClick={handleLogin} className={"mx-auto w-[20%]"}>Login</Button>
                </div>
            </div>
        </div>
    )
}