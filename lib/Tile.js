var React = require('react');

var Tile = React.createClass({displayName: "Tile",

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
      React.createElement("div", {
        className: "reactive-tile", 
        style: style}, 
        this.props.children
      )
    );
  }
});

module.exports = Tile;
