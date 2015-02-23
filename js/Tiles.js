var React = require('react');
var assign = require('object-assign');
var Tile = require('./Tile');

var Tiles = React.createClass({

  colHeights: [0],
  tilePos: {},

  getInitialState: function() {
    return {numCols: 1};
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.updateDimensions);
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return this.state.numCols !== nextState.numCols;
  },

  onTileMount: function(tile) {
    this.tilePos[tile.props.id] = {height: tile.getDOMNode().offsetHeight};
  },

  updateDimensions: function() {
    var outerWidth = this.getDOMNode().offsetWidth,
        width = this.props.width,
        padding = this.props.padding,
        numCols = Math.floor(outerWidth / (width + padding));

    this.colHeights = [];
    for (var i = 0; i < numCols; i++) {
      this.colHeights.push(0);
    }

    this.repositionAll();
    this.setState({numCols: numCols});
  },

  repositionTile: function(tile) {
    var width = this.props.width,
        padding = this.props.padding,
        min = this.colHeights.indexOf(Math.min.apply(null, this.colHeights));

    this.tilePos[tile.props.id] = assign(this.tilePos[tile.props.id], {
      top: this.colHeights.length <= min ? 0 : this.colHeights[min] + padding,
      left: Math.floor(padding / 2) + min * (width + padding)
    });

    this.colHeights[min] += this.tilePos[tile.props.id].height + padding;
  },

  repositionAll: function() {
    React.Children.forEach(this.props.children, this.repositionTile);
  },

  render: function() {
    var width = this.props.width,
        padding = this.props.padding;

    var style = {
      margin: '0 auto',
      position: 'relative',
      width: this.state.numCols * (width + padding),
      height: Math.max.apply(null, this.colHeights) + padding
    };

    return (
      <div>
        <div style={style}>
          {React.Children.map(this.props.children, function(tile) {
            tile.props.width = this.props.width;
            tile.props.onTileMount = this.onTileMount;
            var pos = this.tilePos[tile.props.id];
            if (pos !== undefined) {
              tile.props.top = pos.top || 0;
              tile.props.left = pos.left || 0;
            }
            return tile;
          }.bind(this))}
        </div>
      </div>
    );
  }
});

module.exports = Tiles;