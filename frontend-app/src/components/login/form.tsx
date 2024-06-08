import { useState, FormEvent } from 'react';
import { User } from '@types/User';
import { validate } from '@utils/validate';

const form = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();  
    setErrors(null);

    const data: User = { email, password };
    const errors = validate(data);

    if(Object.keys(errors).length > 0){
      setErrors(errors);
      return;
    }

    setEmail('');
    setPassword('');
  };
  
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm">Email</label>
        <input type="email" id="email" placeholder="Input your email"
        className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm">Password</label>
        <input type="password" id="password" placeholder="Input your password"
        className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors && errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} 

      </div>
      <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Login</button>
    </form>
  );
};


export default form;
