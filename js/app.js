var React = require('react');
var Tiles = require('./Tiles');
var Tile = require('./Tile');

React.render(
  <Tiles width={236} padding={10}>
    <Tile id='tile-1' key='tile-1'>
      <h1>Hey there!</h1>
      <img width={236} height={236} src='http://lorempixel.com/236/236/technics/1' />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis finibus nulla ut venenatis. Etiam ut elit non enim porttitor posuere. Praesent ipsum mi, scelerisque vel purus at</p>
    </Tile>
    <Tile id='tile-2' key='tile-2'>
      <h1>Hi there!</h1>
      <img width={236} height={236} src='http://lorempixel.com/236/236/technics/2' />
      <p>maximus elementum nulla. Nulla eget urna ligula. Nullam sodales, nunc nec bibendum malesuada, ipsum sem gravida turpis, quis congue tortor dolor vel nunc. Nullam a massa nisl. In hac habitasse platea dictumst. In ac sagittis ante, fermentum rutrum mi.</p>
    </Tile>
    <Tile id='tile-3' key='tile-3'>
      <h1>Ho there!</h1>
      <img width={236} height={236} src='http://lorempixel.com/236/236/technics/3' />
      <p>Nam sollicitudin, nunc sit amet accumsan semper, mauris odio iaculis turpis, eget sagittis libero nulla in ante. Fusce in pulvinar urna, eu congue velit. Vestibulum consequat tellus eget nulla gravida, a faucibus tellus vestibulum. Donec in malesuada eros, et luctus elit. Cras varius elit nibh, at efficitur dui ultricies quis. Aliquam non nisl at diam pretium pharetra quis feugiat tortor. Aenean ullamcorper ut diam sit amet pharetra.</p>
    </Tile>
    <Tile id='tile-4' key='tile-4'>
      <h1>Hey there!</h1>
      <img width={236} height={236} src='http://lorempixel.com/236/236/technics/4' />
      <p>Sed non luctus ipsum. Curabitur facilisis arcu eleifend erat vehicula, et aliquam justo facilisis. Sed varius, tellus vitae vestibulum maximus, dui eros suscipit sapien, at condimentum ant e ex at lectus.</p>
    </Tile>
    <Tile id='tile-5' key='tile-5'>
      <h1>Hi there!</h1>
      <img width={236} height={236} src='http://lorempixel.com/236/236/technics/5' />
      <p>Integer elementum augue orci, et molestie orci volutpat vitae. Aliquam quis magna ac orci bibendum lobortis quis quis lectus. Proin vitae tempus tellus, quis scelerisque dolor. Duis faucibus luctus metus non tincidunt. Nullam tincidunt tempor faucibus. Praesent et mollis lectus, non iaculis orci. Cras porta leo non orci gravida, non facilisis quam blandit. Pellentesque eros nunc, fringilla vitae massa ac, semper lobortis lorem. Aenean facilisis eu odio non mattis. Cras iaculis consequat arcu.</p></Tile>
    <Tile id='tile-6' key='tile-6'>
      <h1>Ho there!</h1>
      <img width={236} height={236} src='http://lorempixel.com/236/236/technics/6' />
      <p>Nulla commodo purus eros, laoreet euismod odio varius sit amet. Nullam elementum justo sed nibh posuere, non rutrum ante euismod. Donec eu rhoncus ex, in tincidunt nunc. Morbi consequat aliquet dui, in molestie lacus malesuada non. Mauris eu dui vitae nulla rhoncus auctor non id tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ultrices volutpat ultricies.</p>
    </Tile>
  </Tiles>,
  document.body
);
