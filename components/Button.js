'use client'
const Button = ({ text}) => {
   
    return (
      <button  className='border rounded-full text-base px-2 py-1 border-zinc-950 text-slate-600 hover:bg-slate-600 hover:text-white transition'>
        {text}
      </button>
    );
  };
  
  export default Button;
  