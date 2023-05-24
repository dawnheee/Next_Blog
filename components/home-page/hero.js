import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/아이콘1.png"
          alt="seohee"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi I'm SH</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
