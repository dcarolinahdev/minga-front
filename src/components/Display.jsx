

export default function Display({ options }) {
  return (
    <div className="rounded-lg w-full md:w-[360px] h-full z-20 absolute top-0 left-0 p-6 bg-indigo-700 text-white flex flex-col gap-8">
        <div className="flex justify-between">
            <figure className="flex gap-3">
                <img className="w-[46px]" src="/assets/Ezequiel.png" alt="Lucas Ezequiel Silva" />
                <div className="flex flex-col">
                    <span className="text-[15px] font-semibold">Lucas Ezequiel Silva</span>
                    <span className="text-xs font-medium">ashfaksayem@gmail.com</span>
                </div>
            </figure>
            <svg className="w-8 h-8 fill-current text-white z-50"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path d="M6.70708 5.29289C6.31655 4.90237 5.68339 4.90237 5.29286 5.29289C4.90234 5.68342 4.90234 6.31658 5.29286 6.70711L10.5857 12L5.29277 17.2929C4.90225 17.6834 4.90225 18.3166 5.29277 18.7071C5.6833 19.0976 6.31646 19.0976 6.70698 18.7071L11.9999 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4141 12L18.707 6.70711C19.0975 6.31658 19.0975 5.68342 18.707 5.29289C18.3165 4.90237 17.6833 4.90237 17.2928 5.29289L11.9999 10.5857L6.70708 5.29289Z"/>
            </svg>
        </div>
        <div className="flex flex-col text-2xl gap-2">
            {options?.map((each, index)=>
                <div className="w-full p-3 rounded-md text-[15px] font-semibold hover:bg-white hover:text-indigo-700" key={index}>
                    {each.title}
                </div>
            )}
        </div>
    </div>
  )
}
