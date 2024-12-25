const Footer = () => {
  return (
    <div className="w-full bg-indigo-700">
      <div className="p-6">
        <div className="flex gap-2">
          <img src="film.png" className="w-4 h-4" />
          <h4 className="text-[16px] text-[#FAFAFA] font-bold">Movie Z</h4>
        </div>
        <p className="text-[14px] text-[#FAFAFA]">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p>Contact Information</p>
          <div className="flex items-center gap-3 ">
            <img src="icon1.png" className="w-4 h-4" />
            <div>
              <p className="text-[#FAFAFA]">Email:</p>
              <p className="text-[#FAFAFA]">support@movieZ.com</p>
            </div>
            <div>
              <p className="text-[#FAFAFA]">Email:</p>
              <p className="text-[#FAFAFA]">support@movieZ.com</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Footer;
