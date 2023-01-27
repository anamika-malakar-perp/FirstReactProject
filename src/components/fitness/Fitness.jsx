import React from 'react';
import FitnessTile from './FitnessTile';

const Fitness = () => {
  const fitnessTile = [
    {
      img: 'assets/vrkasana.jpg',
      title: 'Tree Pose — Vrksasana',
      description: 'Start by standing straight for this pose. Bring your hands together in the prayer position and lift them over your head. Balance on your right leg. Bend your left knee out to the left side and press your left foot to the inner thigh of your right leg. Hold for 30 seconds. Switch legs and repeat.'
    },
    {
      img: 'assets/balasana.jpg',
      title: `Child's Pose — Balasana`,
      description: 'Child’s Pose is one of the most healing yoga poses, and it’s my favorite of them all,” says Cullis. “It awakens the connection between the breath and body and sends calming energy through all the muscles.'
    },
    {
      img: 'assets/tadasana.jpg',
      title: 'Mountain Pose — Tadasana',
      description: 'Stand still, with your chest open and broad and your hands at your sides, and feel your feet on the floor and the sensations in your legs and back.'
    },
    {
      img: 'assets/viparita.jpg',
      title: 'Legs-up-the-Wall Pose — Viparita Karani ',
      description: 'This is a great ending pose for beginners and those experienced at yoga alike. Lie on the floor with your butt right up against a wall. "Walk" your legs straight up the wall so that your body is in an L shape with your torso flat on the floor and perpendicular to the wall.'
    }
  ];

  return (
    <div className='bollywood-latest-section'>
      <div className='bollywood-title'>
      <span className='latest-bollywood'>Latest Fitness Stories</span>
      <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <FitnessTile props={fitnessTile}/>
      </div>
    </div>
  )
}

export default Fitness