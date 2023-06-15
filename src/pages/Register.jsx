export default function Register() {
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center gap-5 px-2">

<div className="flex flex-col items-center px-1 md:px-[10%] lg:px-[20%] 2xl:px-[25%] mb-2 md:mb-5 gap-1 md:gap-2">

  <div className='flex items-center text-indigo-700'>
    <img className="h-9 sm:h-10 md:h-[39.5px] lg:h-[46px]" src="/assets/Logo.png" alt="logo" />
    <p className='text-xl sm:text-[22px] lg:text-[32px] px-2 py-0 sm:py-[2px] uppercase font-roboto_serif font-bold border-[5px] border-indigo-700 leading-[26px] lg:leading-[32px]'>inga</p>
  </div>

  <h1 className="text-xl sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold">Welcome!</h1>

  <p className="text-xs md:text-sm font-medium lg:font-semibold text-center leading-[14px]">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>

</div>

<form className='flex flex-col w-[260px] md:w-[300px] lg:w-3/5 xl:w-2/4 2xl:w-[45%] text-xs md:text-sm gap-[12px] sm:gap-[14px] md:gap-4 lg:gap-[18px]'>

  <div className='relative'>
    <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-indigo-700 bg-white" htmlFor="email">Email</label>
    <input
    className='relative border lg:border-2 border-[#1F1F1F]/30 hover:border-indigo-500 rounded-[10px] w-full px-4 py-2'
    type="text" placeholder="your-email@domain.com" id="email"
    />
  </div>

  <div className='relative'>
    <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-indigo-700 bg-white" htmlFor="photo">Photo</label>
    <input
    className='relative border lg:border-2 border-[#1F1F1F]/30 hover:border-indigo-500 rounded-[10px] w-full px-4 py-2'
    type="text" placeholder="URL" id="photo"
    />
  </div>

  <div className='relative'>
    <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-indigo-700 bg-white" htmlFor="passw">Password</label>
    <input
    className='relative border lg:border-2 border-[#1F1F1F]/30 hover:border-indigo-500 rounded-[10px] w-full px-4 py-2'
    type="password" id="passw"
    />
  </div>

  <div class="flex items-center mb-4">
    <input
      id="check-send-email" type="checkbox" value=""
      className="w-4 h-4 rounded-lg text-indigo-700 border-[#1F1F1F]/30
               hover:border-gray-500
                 focus:ring focus:ring-indigo-300"/>
    <label
      for="check-send-email"
      className="ml-2 text-sm text-slate-700 hover:text-slate-500">
      Send notification to my email
    </label>
  </div>

  <button className='text-white font-bold rounded-[10px] py-3 bg-gradient-to-r from-indigo-700 to-[#5E52F3] ' >
      <span>Sign In</span>
  </button>

  <button className="border lg:border-2 border-[#1F1F1F]/30 hover:border-indigo-500 hover:bg-neutral-200 rounded-[10px] py-2 flex justify-center items-center gap-1">
    <img className="h-4 md:h-6" src="/assets/google.png" alt="G Google" />
    <span className="opacity-50">Sign in with Google</span>
  </button>

</form>

<div className="flex flex-col items-center font-meduim text-xs lg:text-sm gap-2 md:gap-4 leading-[12px]">
  <p>you don't have an account yet? <span className="text-indigo-700">Sign up</span></p>
  <p>Go back to <span className="text-indigo-700">home page</span></p>
</div>

</div>

      <img className="hidden md:flex h-screen w-1/2 object-cover" src="/assets/register_back.png" alt="Sign In Backgorund" />
    </div>
  )
}
