export default function SignIn() {
  return (
    <div className="flex font-roboto">
      <img className="hidden md:flex h-screen w-1/2 object-cover" src="/assets/signin_back.png" alt="Sign In Backgorund" />
      <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center gap-2 px-2">
        <div className="flex flex-col items-center mb-8">

          <div className='flex items-center text-indigo-700'>
            <img className="h-12" src="/assets/Logo.png" alt="logo" />
            <p className='text-[32px] leading-[38px] uppercase font-roboto_serif font-bold border-[5px] border-indigo-700 px-2'>inga</p>
          </div>

          <h1 className="text-[32px] font-semibold">Welcome <span className="text-indigo-700">back</span>!</h1>

          <p className="text-xs font-semibold text-center">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>

        </div>

        <form className='flex flex-col w-[290px] md:w-[360px] text-sm gap-4'>

          <div className='relative'>
            <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-indigo-700 bg-white" htmlFor="email">Email</label>
            <input
            className='relative border-2 border-[#1F1F1F]/30 rounded-[10px] w-full px-4 py-2'
            type="text" placeholder="your-email@domain.com" id="email"
            />
          </div>

          <div className='relative'>
            <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-indigo-700 bg-white" htmlFor="passw">Password</label>
            <input
            className='relative border-2 border-[#1F1F1F]/30 rounded-[10px] w-full px-4 py-2'
            type="password" id="passw"
            />
          </div>

          <button className='text-white font-bold rounded-[10px] px-4 py-2 bg-indigo-700 hover:bg-indigo-600 md:bg-gradient-to-r from-indigo-700 to-[#5E52F3]' >
              <span>Sign In</span>
          </button>

          <button className="border-2 border-[#1F1F1F]/30 rounded-[10px] px-4 py-2 flex justify-center gap-1">
            <img src="/assets/google.png" alt="G Google" />
            <span className="opacity-50">Sign in with Google</span>
          </button>

        </form>

        <div className="flex flex-col items-center text-sm font-medium gap-2">
          <p>you don't have an account yet? <span className="text-indigo-700">Sign up</span></p>
          <p>Go back to <span className="text-indigo-700">home page</span></p>
        </div>
      </div>
    </div>
  )
}
