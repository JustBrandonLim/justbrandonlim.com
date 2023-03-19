import Image from "next/image";
import BrandonLimJingZhi from "@public/brandon-lim-jing-zhi.png";

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
          src={BrandonLimJingZhi}
          alt="Brandon Lim Jing Zhi"
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
      <p>
        If you are interested in learning more about me, feel free to check out my{" "}
        <a
          className="underline transition-colors duration-150 ease-in-out hover:text-black"
          href="/resume.pdf"
          aria-label="Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
        !
      </p>
    </section>
  );
}
