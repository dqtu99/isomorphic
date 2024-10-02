"use client";
import classes from "./singin.module.css";
import Image from "next/image";
import signUpImg from "@/assets/img/sign-up.webp";
import SigninForm from "@/components/signin/signin-form/SignInForm";

export default function Login() {
  return (
    <div className={`${classes["login-container"]} flex gap-10  lg:p-6`}>
      <SigninForm />
      <div className="intro-content hidden lg:block bg-slate-50 flex-1 text-center rounded-xl">
        <div className="lg:flex flex-col justify-center items-center gap-8 p-14">
          <h2 className="text-3xl font-bold w-2/3">
            The simplest way to manage your workspace.
          </h2>
          <p className="w-2/3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat duis.
          </p>
          <Image src={signUpImg} alt="fail" />
        </div>
      </div>
    </div>
  );
}
