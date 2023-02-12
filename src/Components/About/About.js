import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div style={{
            marginTop
                : "100px"
        }}>
            <h1></h1>
            <div class="split">
  <nav class="pane nav">
    <ul class="main-nav">
      <li><a href="#">Words <span>Simplicity Is the Key Of My Success</span></a></li>
      <li><a href="#">Skills <span>JavaScript || React || Material-UI || Node.js || Express.js || MongoDB || CSS || HTML || Sass || Tailwind || Bootstrap || Git</span></a></li>
      <li><a href="#">Contact <span>Phone : +8801763296070</span></a></li>
    </ul>
  </nav>
  <div class="pane profile">
    <div class="about-me">
      <img class="avatar" src="https://media.licdn.com/dms/image/C5603AQHP_ACBaKDFdQ/profile-displayphoto-shrink_200_200/0/1648660961956?e=1681344000&v=beta&t=ITB8ndfKsfyVUQNtxjUgRkYYpiiofmTuSAJngwjRzik" alt=""/>
      <h1>Hi, I'm Abhishek </h1>
      <p class="intro">I'm passionate Full Stack web developer having an experience of web applications with Javascript, React.js, Next.js and Node Js, MongoDb. </p>
      <p>I am a person who always strives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact.</p>
      <div class="follow-me">
        <ul class="networks">
          <li><span>I can be found on:</span></li>
          <li><a href="https://github.com/senior9" title="Github"><i class="fa fa-git"></i></a></li>
          <li><a href="https://www.facebook.com/abhishek.sikdarr/" title="Twitter"><i class="fa fa-facebook"></i></a></li>
          <li><a href="https://www.linkedin.com/in/abhishek--sikdar/" title="LastFM"><i class="fa fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default About;