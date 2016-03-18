/**
 * Copyright 2015-2016 Inc.
 * All rights reserved.
 * created by JinTongYao @ 2016-03-15
 * Loading动画
 */
//import '../res/css/spinkit.css';

var LoadingSpinner = React.createClass({
	getDefaultProps: function() {
		return {
			'height': '50',
			'width': '50',
			'backgroundColor': '#000',
			'type': 'rotating-plane',
			'display': true
		};
	},

	getStyle: function() {
		var styleObj = {};
		if (arguments.length > 0) {
			for (var i = 0; i < arguments.length; i++) {
				styleObj[arguments[i]] = this.props[arguments[i]];
			}
		}else {
			styleObj = {
				'height': this.props.height,
				'width': this.props.width,
				'backgroundColor': this.props.backgroundColor
			};
		}
		return styleObj;
	},

	getClassName: function() {
		return `sk-${this.props.type}`;
	},

	getElement: function() {
		switch (this.props.type) {
			case 'rotating-plane':
				require('./css/rotating-plane.css');
				return <div className={this.getClassName()} style={this.getStyle()}></div>;
			case 'double-bounce':
				require('./css/double-bounce.css');
				return (
					<div className={this.getClassName()}>
						<div className="sk-child sk-double-bounce1" style={this.getStyle()}></div>
						<div className="sk-child sk-double-bounce2" style={this.getStyle()}></div>
					</div>
				);
			case 'wave':
				require('./css/wave.css');
				return (
					<div className={this.getClassName()} style={this.getStyle('width', 'height')}>
						<div className="sk-rect sk-rect1" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-rect sk-rect2" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-rect sk-rect3" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-rect sk-rect4" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-rect sk-rect5" style={this.getStyle('backgroundColor')}></div>
					</div>
				);
			case 'wandering-cubes':
				require('./css/wandering-cubes.css');
				return (
					<div className={this.getClassName()}>
						<div className="sk-cube sk-cube1" style={this.getStyle()}></div>
						<div className="sk-cube sk-cube2" style={this.getStyle()}></div>
					</div>
				);
			case 'spinner-pulse':
				require('./css/pulse.css');
				return (
					<div className={'sk-spinner ' + this.getClassName()} style={this.getStyle()}></div>
				);
			case 'chasing-dots':
				require('./css/chasing-dots.css');
				return (
					<div className={this.getClassName()} style={this.getStyle('width', 'height')}>
						<div className="sk-child sk-dot1" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-child sk-dot2" style={this.getStyle('backgroundColor')}></div>
					</div>
				);
			case 'three-bounce':
				require('./css/three-bounce.css');
				return (
					<div className={this.getClassName()}>
						<div className="sk-child sk-bounce1" style={this.getStyle()}></div>
						<div className="sk-child sk-bounce2" style={this.getStyle()}></div>
						<div className="sk-child sk-bounce3" style={this.getStyle()}></div>
					</div>
				);
			case 'circle':
				require('./css/circle.css');
				return (
					<div className={this.getClassName()} style={this.getStyle('width', 'height')}>
						<div className="sk-circle1 sk-child"></div>
						<div className="sk-circle2 sk-child"></div>
						<div className="sk-circle3 sk-child"></div>
						<div className="sk-circle4 sk-child"></div>
						<div className="sk-circle5 sk-child"></div>
						<div className="sk-circle6 sk-child"></div>
						<div className="sk-circle7 sk-child"></div>
						<div className="sk-circle8 sk-child"></div>
						<div className="sk-circle9 sk-child"></div>
						<div className="sk-circle10 sk-child"></div>
						<div className="sk-circle11 sk-child"></div>
						<div className="sk-circle12 sk-child"></div>
					</div>
				);
			case 'cube-grid':
				require('./css/cube-grid.css');
				return (
					<div className={this.getClassName()} style={this.getStyle('width', 'height')}>
						<div className="sk-cube sk-cube1" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-cube sk-cube2" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-cube sk-cube3" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-cube sk-cube4" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-cube sk-cube5" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-cube sk-cube6" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-cube sk-cube7" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-cube sk-cube8" style={this.getStyle('backgroundColor')}></div>
						<div className="sk-cube sk-cube9" style={this.getStyle('backgroundColor')}></div>
					</div>
				);
			case 'folding-cube':
				require('./css/folding-cube.css');
				return (
					<div className={this.getClassName()} style={this.getStyle('width', 'height')}>
						<div className="sk-cube1 sk-cube"></div>
						<div className="sk-cube2 sk-cube"></div>
						<div className="sk-cube4 sk-cube"></div>
						<div className="sk-cube3 sk-cube"></div>
					</div>
				);
			default :
				return <div className={this.getClassName()} style={this.getStyle()}></div>;
		}
	},

	render: function() {
		var element = this.getElement();
		return (
			<span>
				{this.props.display ? element : ''}
			</span>
		);
	}
});

module.exports = LoadingSpinner;