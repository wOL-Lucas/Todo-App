import LogoImage from '@assets/logo.png';
import { ComponentProps } from 'react';
import LogoSvg from '@assets/logo.svg';

export type LogoProps = ComponentProps<'div'>;

const Logo = ( props: LogoProps ) => {
  return (
    <div { ...props }>
      <img src={LogoImage} alt="Logo" />
    </div>
  );
}

const AnimatedLogo = (props: LogoProps) => {
  return (
    <div { ...props }>
      <img className="animate-spin-slow"  src={LogoSvg} alt="Logo" />
      <p className="text-stone-100 text-5xl py-5 font-hind font-bold ">TodoApp</p>
    </div>
  );
}

export { Logo, AnimatedLogo };
