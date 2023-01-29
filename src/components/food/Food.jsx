import React from 'react';
import FoodTile from './FoodTile';

const Food = ({props}) => {
  const foodTile = [
    {
      img: 'assets/balck-bean-burger.webp',
      title: 'Black Bean Burger',
      description: 'Whether you sometimes try a meat-free meal or stick to a full-time vegetarian diet, you can get plenty of protein (and lots of other nutrients, including fiber) from plants. Try pinto, kidney, white, or black beans, split peas, or chickpeas. Soy products, like tofu and tempeh, and nuts also have protein.'
    },
    {
      img: 'assets/cereal.webp',
      title: `Start With Whole-Grain Cereal`,
      description: 'If you don’t have enough to eat before you exercise, you may not have enough gas in the tank. You might burn fewer calories, too. Have some healthy carbs at least an hour in advance of your workout. Try a bowl of whole-grain cereal with skim milk and cut up fruit or some whole wheat toast or a bagel. Cream cheese and butter add saturated fat.'
    },
    {
      img: 'assets/energy-bar.webp',
      title: 'An Energy Bar in the Afternoon',
      description: 'When you’re working out later in the day, have a small snack about an hour before you get started. A sports bar that has 200 calories or less is a good option.Look for a bar with low-fiber content, ideally 3 grams or less. Too much fiber before a workout can upset your stomach.'
    },
    {
      img: 'assets/fruits.webp',
      title: 'Grab a Banana',
      description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.'
    }
  ];

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
      <span className='latest-bollywood'>Latest Food Stories</span>
      <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <FoodTile props={foodTile}/>
      </div>
    </div>
  )
}

export default Food