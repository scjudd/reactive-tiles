var React = require('react');

var Tile = React.createClass({

  componentDidMount: function() {
    this.props.onTileMount(this);
  },

  render: function() {
    var style = {
      boxSizing: 'border-box',
      position: 'absolute',
      width: this.props.width,
      left: this.props.left,
      top: this.props.top
    };

    return (
      <div
        className='reactive-tile'
        style={style}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Tile;
