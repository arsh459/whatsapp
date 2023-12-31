import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signInSchema } from "../../utils/validation.js"
import AuthInput from "./AuthInput.jsx"
import { useDispatch, useSelector } from "react-redux"
import { PulseLoader } from "react-spinners"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../features/userSlice.js"

export default function RegisterForm() {
  const { status, error } = useSelector((store) => {
    return store.user
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  })
  const onSubmit = async (values) => {
    let res = await dispatch(loginUser({ ...values }))
    console.log(res)
    if (res.payload.user) {
      navigate("/")
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/* Heading */}
        <div className="text-center dark:text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-sm">Sign In</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="email"
            type="email"
            placeholder="Email address"
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          />

          {/* Error */}
          {error ? (
            <div>
              <p className="text-red-400">{error}</p>
            </div>
          ) : (
            <></>
          )}
          {/* Submit Button */}
          <button
            className="w-full justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
            type="submit"
          >
            {status == "loading" ? (
              <PulseLoader color="#fff" size={16} />
            ) : (
              "Sign In"
            )}
          </button>

          {/* Sign in link */}

          <p className="flex flex-col items-center justify-center m-1 text-center text-md dark:text-dark_text_1">
            <span>you do not have an account</span>
            <Link
              to="/register"
              className="dark:text-blue-500 hover:underline cursor-pointer transition ease-in duration-100"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
