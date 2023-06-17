export default function CiaForm() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>

        <div className='flex flex-col items-center gap-10 w-4/6 sm:w-2/4 lg:w-2/5 xl:w-2/6 2xl:w-1/4'>
            <h1 className="font-roboto font-normal text-4xl leading-[42px]">
                New Company
            </h1>
            <form className='flex flex-col items-center gap-6 w-full'>
                <img
                    className="w-[88px] h-[88px]"
                    src={ '/assets/profile.png' } alt='profile photo' />
                <div className="flex flex-col gap-4 w-full">
                    <input
                        className='border-b border-[#424242] px-2'
                        placeholder='Name' type="text" name="name" id="name" />
                    <input
                        className='border-b border-[#424242] px-2'
                        placeholder='Website' type="url" name="url" id="wesite" />
                    <input
                        className='border-b border-[#424242] px-2'
                        placeholder='URL Profile Image' type="url" name="profile-img" id="profile-img" />
                    <input
                        className='border-b border-[#424242] px-2'
                        placeholder='Description' type="text" name="description" id="description" />
                </div>
            </form>
            <div className='w-full'>
                <button className='w-full py-4 text-2xl font-bold rounded-full leading-7 text-white bg-indigo-700 hover:bg-indigo-500' >
                    Send
                </button>
            </div>
        </div>

    </div>
  )
}
