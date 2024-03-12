import Email from "../icons/Email"


 const EmailCard = ({...props}) => {
  return (
    <div className="sm:px-2 sm:py-1" {...props}>
    <div className="flex items-center gap-2 border p-3 rounded-lg hover:border-[#1135a7] hover:bg-[rgb(240,242,245)]">
      <div className="text-center">
       <Email/>
      </div>
      <div className="flex items-center gap-4">
        <div className="meta-mail-time">
          <p
            className="text-[#003dff] text-[13px]"
            data-mailto="moderncabinetsco@gmail.com">
            moderncabinetsco@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="mail-content-excerpt">
            <span className="text-[14px] text-[#515365]">
              Congratulation here is your DOT number 4167689-
            </span>
            <span className="text-[#607d8b] text-[13px]">
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit facilis conse ....
            </span>
          </p>
          <div className="flex items-center gap-4">
            <button className="w-10 h-5 rounded-sm font-semibold bg-[#003dff] text-white text-[13px]">
              Sent
            </button>
          </div>
          <p className="text-[10px]">
            Dec. 12, 2023, 12:07 p.m.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default EmailCard