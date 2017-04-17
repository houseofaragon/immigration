import React from 'react';
import Spinner from '../spinner';
import * as d3 from 'd3';

export default class Bubbles extends React.PureComponent {
  static propTypes = {
  }

  state = {}
  componentDidMount() {
    this.context = d3.select(this.refs.container);
    this.renderBubbles();
  }

  shouldComponentUpdate(nextProps) {
    this.renderHosts(nextProps);
    return false;
  }

  renderBubbles() {

    const nodes = d3.range(800).map( i => {
      return {
        index: i,
        radius: 3,
        color: i < 50 ? 'brown' : 'steelblue',
      };
    });

    const width = window.innerWidth;
    const height = window.innerHeight;

    function isolate(force, filter) {
      console.log(force, filter);
      const initialize = force.initialize;
      force.initialize = () => initialize.call(force, nodes.filter(filter));
      return force;
    }

    let simulation = d3.forceSimulation()


      .force('collide', d3.forceCollide().radius( d => d.radius + 7).iterations(16))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('brown', d => d.color === 'brown')
      .force('steelblue', d => d.color === 'steelblue');

    const svg = d3.select('svg')
      .attr('width', width).attr('height', height);

    const circle = svg.append('g')
      .classed('circles', true)
      .selectAll('circle')
      .data(nodes, (d) => d.index)
      .enter().append('circle')
      .attr('r', 0)
      .attr('fill', 'none');

    function forceTick() {
      let t = d3.transition();
      circle
        .attr('cx', d => d.x )
        .attr('cy', d => d.y )
        .attr('r', d => d.radius )
        .attr('fill', d => d.color);
    }

    simulation.nodes(nodes)
      .on('tick', forceTick);

    function update() {
      simulation = d3.forceSimulation()

        .force('collide', d3.forceCollide().radius( d => d.radius + 7).iterations(16))
        .force('brown', isolate(d3.forceX(-width / 2), d =>  d.color === 'brown'))
        .force('steelblue', isolate(d3.forceX(width / 2), d => d.color === 'steelblue'))
                .force('y', d3.forceY().strength(0.001))
        .force('x', d3.forceX().strength(0.001));

      simulation.nodes(nodes);
      circle
        .on('tick', forceTick);
    }

  update();

  }

  render() {
    return (
      <div className='intro--container'>
       <svg width="100%" height="100%">      
        <g ref='container' className='bubbles' />
      </svg>
      </div>
    );
  }
}
