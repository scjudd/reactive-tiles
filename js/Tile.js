var React = require('react');

var Tile = React.createClass({

  componentWillMount: function() {
    React.Children.forEach(this.props.children, function(child) {
      if (child.type === "img") {
        child.props.onLoad = function() {
          this.props.onTileUpdate(this);
        }.bind(this);
      }
    }.bind(this));
  },

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
