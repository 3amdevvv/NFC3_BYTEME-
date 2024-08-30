import React from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import "./About.css";
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.webp';
import profile3 from '../../assets/profile3.png';
import shelter from '../../assets/shelter.jpg';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

function Members({ name, position, style, image }) {
  return (
    <animated.div style={style} className="w-full lg:w-1/3 mb-4">
      <img src={image} className="mx-auto rounded-full mb-2 border-4 border-white shadow-lg" alt="" width="200" height="200" />
      <h5 className="mb-0 text-white">{name}</h5>
      <p className="nuni text-purple-300"><strong>{position}</strong></p>
    </animated.div>
  );
}

function About() {
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 20 },
  });

  const [membersRef, membersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    { name: "Thampi", position: "Chief Veterinary Officer", image: profile1 },
    { name: "James Anderson", position: "Volunteer Coordinator", image: profile2 },
    { name: "Anant Mishra", position: "Adoption Counselor", image: profile3 },
  ];

  const trail = useTrail(teamMembers.length, {
    config: { tension: 200, friction: 20 },
    opacity: membersInView ? 1 : 0,
    transform: membersInView ? 'scale(1)' : 'scale(0)',
    from: { opacity: 0, transform: 'scale(0)' },
  });

  return (
    <div className='about bg-gradient-to-br from-purple-700 to-indigo-900 min-h-screen'>
      <div className='container mx-auto px-4 py-16'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2'>
            <animated.h1 style={titleAnimation} className='font-["Moo_Lah_Lah"] text-8xl md:text-9xl text-white mb-4'>About us</animated.h1>
            <AnimatedSection>
              <p className='text-purple-300 mb-4'>At PawPatrol, we rescue and rehabilitate pets from various backgrounds, including strays, abandoned pets, and those surrendered by their owners. Our dedicated team of volunteers provides medical care, socialization, and training to ensure each pet is ready for their new home.</p>
            </AnimatedSection>
            <AnimatedSection>
              <p className='nuni text-white'>"Our mission is to connect loving families with pets in need of a forever home. We believe that every pet deserves a second chance, and we are dedicated to making the adoption process smooth and enjoyable for both the animals and their new families."</p>
            </AnimatedSection>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0'>
            <animated.img style={imageAnimation} className='rounded-lg shadow-2xl border-4 border-white' src={shelter} alt="Team" />
          </div>
        </div>
        <div className='flex justify-center my-16'>
          <hr className="custom-hr" />
        </div>
        <AnimatedSection>
          <h1 className='font-["Moo_Lah_Lah"] text-6xl text-white text-center mb-12'>Meet our team</h1>
          <div ref={membersRef} className="flex flex-wrap justify-between text-center mt-5">
            {trail.map((props, index) => (
              <Members
                key={teamMembers[index].name}
                name={teamMembers[index].name}
                position={teamMembers[index].position}
                image={teamMembers[index].image}
                style={props}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default About;