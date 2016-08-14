import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposableComponent) {
	class Authenticate extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		}
		componentWillMount() {
			if(!this.props.authenticated) {
				this.context.router.push('/');
			}
		}
		componentWillUpdate(nextProps) {
			if(!nextProps.authenticated) {
				this.context.router.push('/');
			}
		}
		componentWillUnmount() {
			console.log("UnMounting resources");
		}
		render() {
			return <ComposableComponent {...this.props} />
		}
	}
	function mapStateToProps(state) {
		return { authenticated: state.authenticated };
	}
	return connect(mapStateToProps)(Authenticate);
}


