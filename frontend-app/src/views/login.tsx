import Form from '@components/login/form';
import { AnimatedLogo } from '@components/logo';

const Login = () => {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center py-36 gap-7">
      <div className="h-32">
        <AnimatedLogo className="flex flex-col items-center"/>
      </div>
      <div className="w-5/6 lg:w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Form />
      </div>
    </div>
  )
};



export default Login;


