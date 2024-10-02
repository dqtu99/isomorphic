"use client";
import classes from "./singin.module.css";
import Image from "next/image";
import BackHomeButton from "@/components/signin/back-to-home/BackHomeButton";
import logo from "@/assets/img/logo-primary.svg";
import textOfLogo from "@/assets/img/logo-primary-text.svg";
import { Input, Checkbox, Button } from "antd";
import iconApple from "@/assets/img/icon-apple.svg";
import iconGoogle from "@/assets/img/icon-google.svg";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import signUpImg from "@/assets/img/sign-up.webp";

export default function Login() {
  return (
    <div className={`${classes["login-container"]} flex gap-10  lg:p-6`}>
      <div className="signin-form w-full lg:w-2/5">
        <BackHomeButton />
        <div className="pt-10 pb-8 px-4 flex flex-col items-center lg:items-start">
          <div className="flex gap-3 pb-6">
            <Image src={logo} alt="fail" />
            <Image src={textOfLogo} alt="fail" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-5 relative lg:w-full lg:text-start">
            Welcome back! Please <br />
            <span>Sign in to continue</span>
            <svg
              style={{ color: "rgb(85 149 247)" }}
              viewBox="0 0 147 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M62.4325 0.957703C55.5264 1.2859 48.7014 1.68945 42.0459 2.13063C32.6242 2.75474 23.2063 3.40038 13.8451 4.42263C10.8984 4.74545 7.90595 4.94989 4.97767 5.35341C3.13948 5.60628 0.702089 5.96671 0.382211 6.04203C0.214902 6.08507 0.141911 6.1497 0.118325 6.17122C-0.0475096 6.32187 -0.0172508 6.46707 0.0763539 6.58006C0.113943 6.62848 0.208995 6.74689 0.472857 6.76303C18.1192 7.86599 36.1635 5.71388 53.8312 5.48791C84.4702 5.10053 116.038 6.63929 146.433 9.99658C146.699 10.0235 146.957 9.88894 146.994 9.68987C147.038 9.49618 146.846 9.30786 146.581 9.28096C116.134 5.91829 84.5144 4.37415 53.8165 4.76691C37.3509 4.97674 20.5603 6.86525 4.07184 6.21962C4.45068 6.16582 4.82217 6.112 5.16122 6.06357C8.0777 5.66005 11.0576 5.461 13.9925 5.13818C23.3338 4.11593 32.7326 3.4703 42.1417 2.85157C53.8165 2.07681 65.9998 1.40965 78.279 1.0976C82.6718 1.14602 87.0498 1.19446 91.4278 1.25364C100.899 1.38277 110.414 1.75939 119.863 2.26514C122.708 2.42117 125.553 2.58256 128.398 2.72245C129.341 2.77087 131.774 2.91073 132.113 2.89997C132.533 2.88921 132.614 2.63098 132.621 2.58794C132.643 2.4911 132.629 2.35658 132.422 2.2436C132.4 2.22745 132.267 2.17362 131.973 2.14134C114.792 0.236721 96.4471 -0.0806646 78.2937 0.376658C59.1453 0.177588 39.9232 0.0914646 20.8234 0C20.55 0 20.3266 0.161432 20.3244 0.360502C20.323 0.559572 20.5433 0.721008 20.8168 0.726389C34.6467 0.790952 48.5466 0.855478 62.4325 0.957703Z"
                fill="currentColor"
              ></path>
            </svg>
          </h2>
          <p className="w-1/2 text-center text-sm text-gray-500 mb-7 lg:text-start lg:w-full lg:pr-8">
            By signing up, you will gain access to exclusive content, special
            offers, and be the first to hear about exciting news and updates.
          </p>
          <div className="md:flex w-96 gap-3">
            <div
              className={`${
                classes[`signin-with-another-app-btn`]
              } w-96 flex gap-2 justify-center items-center`}
            >
              <Image src={iconApple} alt="fail" />
              <span>Signin With Apple</span>
            </div>
            <div
              className={`${
                classes[`signin-with-another-app-btn`]
              } w-96 flex gap-2 justify-center items-center`}
            >
              <Image src={iconGoogle} alt="fail" />
              <span>Signin With Google</span>
            </div>
          </div>
          <div className={classes[`line-or`]}>
            <span></span>
            <p className="text-gray-400">OR</p>
            <span></span>
          </div>
          <div className="w-96 mt-4">
            <p className="py-1 text-gray-700">Email</p>
            <Input size="large" placeholder="User name" />
          </div>
          <div className="w-96 mt-4">
            <p className="py-1 text-gray-700">Password</p>
            <Input.Password size="large" placeholder="Input password" />
          </div>

          <div className="w-96 flex justify-between items-center py-4">
            <Checkbox className="custom-checkbox">Remember Me</Checkbox>
            <Link className="text-blue-500 underline" href={""}>
              Forget Password ?
            </Link>
          </div>
          <div className="w-96 mt-4">
            <Button size="large" color="default" variant="solid" block>
              Sign in <ArrowRightOutlined />
            </Button>
          </div>
          <div className="text-center mt-6 text-gray-500">
            Don&apos;t have an account ?
            <span className="font-bold hover:text-blue-400 cursor-pointer">
              Sign up
            </span>
          </div>
        </div>
      </div>
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
