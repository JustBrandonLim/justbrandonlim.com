import Image from "next/image";
import BrandonLim from "@public/brandon-lim.png";

export default function Home() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold text-black md:text-4xl md:animate-bounce">Brandon Lim Jing Zhi</h1>
          <p>Software Engineer</p>
        </div>
        <Image
          className="w-24 h-24 rounded-full shadow-lg sm:w-56 sm:h-56"
          src={BrandonLim}
          alt="Brandon Lim"
          placeholder="blur"
          width={250}
          height={250}
        />
      </div>
      <p>
        Hey there! I&apos;m Brandon Lim Jing Zhi, and I&apos;m currently a student at the Singapore Institute of Technology, pursuing my degree in BE
        in Information and Communications Technology (Software Engineering). I fell in love with programming at the age of 12 when I got my first
        computer. Ever since then, I have been honing my skills. I am passionate about creating innovative solutions that make people&apos;s lives
        easier.
      </p>
      <p>
        In my free time, I occasionally work on my own ideas that I think are innovative to further my skills. Usually, if I am not programming, you
        can find me at the gym working out or staying at home playing my favourite video games.
      </p>
      {/*
      <p>
        Hey there! I&apos;m Brandon Lim Jing Zhi, and I&apos;m a software engineer with a passion for creating innovative solutions that make
        people&apos;s lives easier. With a strong foundation in a variety of programming languages and frameworks, I&apos;m excited to tackle new
        challenges and collaborate with others to build amazing things.
      </p>
      <p>
        As a technology enthusiast with a passion for programming, I have always been fascinated by the way software and hardware interact to create
        amazing things. My love for programming started in my teenage years at the age of 12 when I began tinkering with computers and exploring
        programming languages. From then on, I was hooked, and I have been honing my skills ever since. When I'm not coding, you can find me in the
        gym working up a sweat or immersing myself in the latest video games.
      </p>*/}
    </section>
  );
}
