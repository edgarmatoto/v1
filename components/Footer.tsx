import { socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="contact" className="w-full relative bottom-0 h-12 z-40">
      <div className="px-4 flex items-center justify-between text-lg">
        <p className="font-medium text-[#707070]">Edgar Matoto © 2023</p>
        <div className="flex items-center justify-evenly gap-4">
          {socials.map((item, index) => (
            <Link href={item.link} key={index} target="_blank">
              <Image
                src={item.icon}
                alt={item.name}
                width={26}
                height={26}
                className="rounded-md"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
