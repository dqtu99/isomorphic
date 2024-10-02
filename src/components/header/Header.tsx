import iconMenu from "@/assets/img/icon-menu.svg";
import Image from "next/image";
import iconLogo from "@/assets/img/icon-logo-site.svg";
import iconSearch from "@/assets/img/icon-search.svg";
import avatar from "@/assets/img/avatar.webp";
import settingIcon from "@/assets/img/icon-setting.svg";
import noticeIcon from "@/assets/img/icon-notice.svg";
import messageIcon from "@/assets/img/icon-message.svg";

export default function Header() {
  return (
    <div className="header sticky top-0 flex justify-between items-center p-4 w-full h-15 border-b border-gray-300 bg-white z-10">
      <div className="flex justify-center items-center gap-4">
        <div className="hover:cursor-pointer">
          <Image src={iconMenu} alt="fail" />
        </div>
        <div className="hover:cursor-pointer">
          <Image src={iconLogo} alt="fail" width="35" />
        </div>
        <div className="hover:cursor-pointer ">
          <Image src={iconSearch} alt="fail" width="20" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="hover:cursor-pointer relative">
          <Image src={noticeIcon} alt="fail" width="20" />
          <div className="w-2 h-2 rounded-full bg-[#f5a622] absolute right-0 bottom-3" />
        </div>
        <div className="message-icon hover:cursor-pointer relative">
          <Image src={messageIcon} alt="fail" width="24" />
          <div className="w-2 h-2 rounded-full bg-[#12a749] absolute right-0 bottom-3" />
        </div>
        <div className="hover:cursor-pointer bg-gray-100 w-8 h-8 flex justify-center items-center ">
          <Image
            src={settingIcon}
            alt="fail"
            width="24"
            className="animate-spin-custom"
          />
        </div>
        <div className="hover:cursor-pointer img-round ">
          <Image src={avatar} alt="fail" width="36" />
        </div>
      </div>
    </div>
  );
}
