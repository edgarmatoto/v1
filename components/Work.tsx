import { BsCircle } from 'react-icons/bs';

import { DMSans } from "@/fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { projects } from '@/constants';

interface ProjectsCardProp {
  img: string;
  title: string;
  repository: string;
  description: string;
  language: string;
  updatedAt: string;
}

const ProjectsCard: React.FC<ProjectsCardProp> = ({
  img,
  repository,
  title,
  description,
  language,
  updatedAt,
}) => {
  return (
    <Card>
      <div className='w-full p-6 pb-0'>
        <Image 
          src={img}
          alt='project'
          width={320}
          height={100}
          className='rounded-xl'
        />
      </div>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription className='sm:text-base'>
            {description}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={repository}
          >
            <div className="flex justify-between items-center">
              <Image
                src={"/github.svg"}
                alt="github"
                width={26}
                height={26}
                className="mr-2"
              />
              <p>Repo</p>
            </div>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <BsCircle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            {language}
          </div>
          <div>Updated {updatedAt}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const Work = () => {
  return (
    <div id="work" className="w-full py-16 flex flex-col items-center">
      <div className={`${DMSans.className}`}>
        <p
          className={`sm:text-lg text-lightSecondary dark:text-darkSecondary uppercase tracking-wider`}
        >
          My work
        </p>
        <h2 className={`md:text-[60px] sm:text-[50px] text-[40px]`}>
          Projects.
        </h2>
        <p className="mt-4 text-lightSecondary dark:text-darkSecondary sm:text-lg font-thin leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className='bg-red-200 lg:w-[100vw] flex flex-wrap justify-center items-center gap-4'>
        {projects.map((item, index) => (
          <div className='mt-6 w-96 p-3' key={index}>
            <ProjectsCard
              {...item}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Work;
