import { useForm } from "react-hook-form"


function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }

  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)

    // for server error code

    // if(data.username !== "Subham"){
    //   setError("myuser",{type:"manual",message:"User Name is not Subham"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked",{message:"Sorry This User is Blocked"})

    // }
  }

  return (
    <div className="main">
      <div className="container">
        <h3>Singnup Form</h3>
        <br />
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          {errors.username && <span className="red">{errors.username.message}</span>}
          <input type="text" placeholder="Enter Username" {...register("username", { required: { value: true, message: "User Name is Require" }, minLength: { value: 3, message: "Min Length is 3" }, maxLength: { value: 8, message: "Max Length is 8" } })} className="form-control" /> <br />

          {errors.password && <span className="red">{errors.password.message}</span>}
          <input type="password" placeholder="Enter Password" {...register("password", { required: { value: true, message: "Password is Require" }, minLength: { value: 6, message: "Min Lenght is 6" }, maxLength: { value: 10, message: "Max Lenght is 10" } })} className="form-control" /> <br />

          <input type="submit" disabled={isSubmitting} value="Submit" className="form-control" />
          {isSubmitting && <div className="white">Loading...</div>}
          {errors.myuser && <div className="red">{errors.myuser.message}</div>}
          {errors.blocked && <div className="red">{errors.blocked.message}</div>}

        </form>
      </div>
    </div>
  )
}

export default Form
