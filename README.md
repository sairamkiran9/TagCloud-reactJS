# TagCloud-reactJS

- This repo contains detail steps for implementing animated 3D text sphere in reactJS.

- I imported <b>TagCloud.js</b> npm module and used it as a react component for creating rolling wordCloud.

- <b>TagCloud.js</b> is a JavaScript library that allows you to create an animated, interactive 3D sphere tag cloud from an array of text strings.
<p align="center">
  <img alt="TagCloud" src="demo.gif" width="500">
</p>

Full documentation and installation of this module is available [here](https://github.com/cong-min/TagCloud)

## Integration

### npm

- Add TagCloud npm module
```bash
$ npm i -S TagCloud
```

- Create react component and import TagCloud
### JavaScript

```js
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

```

### TagCloud(container, texts, options)

- Returns tagcloud instance.
- TagCloud method should be called when ever the page is reloaded which by default not the functionality of reactJS.
- For rendering this component each time page is reloaded, we need to use react hooks useEffect method.
``` js
useEffect(() => {
    TagCloud(container, texts, options);
  }
```

The deployment page in browser after implementing this module can be viewed [here](https://sairamkiran9.github.io//TagCloud-reactJS/)

