import { useState, FormEvent } from 'react';
import { User } from '@types/User';
import validate from '@utils/validate';
import doLogin, { LoginStatus } from '@utils/login';
import { XMarkIcon } from '@heroicons/react/24/solid';

const form = () => {
  const [formData, setFormData] = useState<User>({ email: '', password: '' });
  const [errors, setErrors] = useState<User | null>(null);
  const [loginStatus, setLoginStatus] = useState<LoginStatus | null>(null);


  const ErrorLabel = () => {
    return (
      <div className="flex gap-1 items-center justify-center">
        <XMarkIcon className="w-4 h-4" />
        <span className="text-sm">Error</span>
      </div>
    );
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();  
    setErrors(null);
    const errors = validate(formData);

    if(Object.keys(errors).length > 0){
      setErrors(errors);
      return;
    }

    doLogin(formData).then((status: LoginStatus) => {
      setLoginStatus(status);
    });

    setFormData({ email: '', password: '' });
    setTimeout(() => {
      setLoginStatus(null);
    }, 5000);
  };
  
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      {loginStatus && <p className={`text-${loginStatus.success ? "green" : "red"}-500 text-sm`}>{loginStatus?.message}</p>}
      
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm">Email</label>
        <input type="email" id="email" placeholder="Input your email"
        className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        value={formData.email} onChange={(e)=> handleChange(e)} />
        {errors && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm">Password</label>
        <input type="password" id="password" placeholder="Input your password"
        className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        value={formData.password} onChange={(e)=> handleChange(e)} />
        {errors && errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} 

      </div>
      <button type="submit" className={`${loginStatus?.success === false ? "bg-red-600 hover:bg-red-500" : "bg-slate-600"} hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white`}>
        {loginStatus?.success === false ? <ErrorLabel /> : "Login"}
      </button>
    </form>
  );
};


export default form;
