import { DMSans } from "@/fonts";

const About = () => {
  return (
    <div id="about" className="w-full py-16">
      <div className={`${DMSans.className}`}>
        <p
          className={`sm:text-lg text-lightSecondary dark:text-darkSecondary uppercase tracking-wider`}
        >
          Introduction
        </p>
        <h2 className={`md:text-[60px] sm:text-[50px] text-[40px]`}>
          Overview.
        </h2>
        <p className="mt-4 text-lightSecondary dark:text-darkSecondary sm:text-lg font-thin leading-[30px]">
          I&apos;m a passionate and self-motivated person who loves programming and
          learning new technologies. I enjoy solving problems, creating
          innovative solutions, and collaborating with other tech enthusiasts. I
          have experience in various programming languages, frameworks, and
          tools, and I&apos;m always eager to expand my skills and knowledge. I&apos;m
          looking for opportunities to grow as a developer and contribute to
          exciting projects.
        </p>
      </div>
    </div>
  );
};

export default About;
