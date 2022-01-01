import React, { useEffect } from 'react'
import TagCloud from 'TagCloud';

const container = '.content';
const texts = [
  '3D', 'TagCloud', 'JavaScript',
  'CSS3', 'Animation', 'Interactive',
  'Mouse', 'Rolling', 'Sphere',
  '6KB', 'v2.x',
];
const options = {
  radius: 300,
  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true
};

const WordCloud = () => {
  // to render wordcloud each time the page is reloaded
  useEffect(() => {
    TagCloud(container, texts, options);
  })

  return (
    <div className='main'>
      <h1 className='heading'> TagCloud demo in reactJS </h1>
      <span className="content"></span>
    </div>
  )
}

export default WordCloud;
