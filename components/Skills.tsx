import { DMSans } from '@/fonts';

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { technologies } from "@/constants";
import Image, { StaticImageData } from "next/image";

interface TechCardProps {
  name: string;
  icon: StaticImageData;
}

const TechCard: React.FC<TechCardProps> = ({ name, icon }) => {
  return (
    <Card className='shadow-lg dark:bg-[#2e2e2e] hover:bg-slate-200'>
      <CardContent>
        <Image 
          src={icon}
          alt={name}
          width={50}
          height={50}
          className='pt-6'
        />
      </CardContent>
    </Card>
  )
}

const Skills = () => {
  return (
    <div id='skills' className={`w-full py-16 ${DMSans.className} text-center`}>
      <h2 className="md:text-[60px] sm:text-[50px] text-[40px]">Skills</h2>
      <div className='mt-6 flex flex-wrap justify-center items-center gap-4'>
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  )
}

export default Skills