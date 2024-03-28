import React, { useMemo } from "react";

const AboutSection = () => {
return useMemo(()=> (
    <section id="sectionabout" className="py-5 vh-min-100">
    <div className="container">
        <h1 className="my-5">About</h1>
        <p className="fs-5 mb-5">
        Introducing our revolutionary laptop - the ultimate companion for
        productivity, creativity, and entertainment. With its sleek design,
        powerful performance, and cutting-edge features, this laptop is
        engineered to elevate your computing experience to new heights.
        Whether you're a professional, a student, or a creative enthusiast,
        this laptop is designed to meet all your needs.
        <br />
        <br />
        Powered by the latest processors and packed with ample memory and
        storage, this laptop delivers lightning-fast performance, allowing you
        to multitask effortlessly and run demanding applications with ease.
        The stunning high-resolution display offers vibrant colors and sharp
        details, bringing your content to life. The ergonomic keyboard
        provides a comfortable typing experience, ensuring that you can work
        for hours without fatigue.
        <br />
        <br />
        Not only is this laptop powerful, but it's also incredibly versatile.
        With a range of connectivity options, including USB, HDMI, and
        wireless connectivity, you can effortlessly connect to external
        devices, peripherals, and networks. The long-lasting battery ensures
        that you can stay productive on the go without worrying about running
        out of power.
        <br />
        <br />
        Experience the future of computing with our state-of-the-art laptop.
        It's time to take your productivity, creativity, and entertainment to
        the next level. Upgrade to our laptop today and unleash your true
        potential.
        </p>
    </div>
    </section>
),[])}

export default AboutSection;
