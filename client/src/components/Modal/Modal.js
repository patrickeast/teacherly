import React from "react";
import CreateReactClass from "create-react-class";
import "./Modal.css";

var ModalApp = CreateReactClass({
	getInitialState: function() {
		return({
			modal: false
		})
	},
	checkoutClick: function() {
		this.setState({modal: true});
	},
	okayClick: function() {
		this.setState({modal: false});
	},
	render: function() {
		return (
			<div className="App">
				<Button onClick={this.checkoutClick} />
				<Modal onClick={this.okayClick} status={this.state.modal} />
			</div>
		);
	}
});

var Button = CreateReactClass({
	render: function() {
		return (
			<div onClick={this.props.onClick} className="btn btn-outline-info"></div>
		);
	}
});

var Modal = CreateReactClass({
	getDefaultProps: function() {
		return ({
			title: 'Thanks!',
			subtitle: 'Your order is being processed, hang tight and have an ice cream!',
			cta: 'Gee, thanks!'
		});
	},
	render: function() {
		return (
			<div className="Modal" data-status={this.props.status}>
				<h1>{this.props.title}</h1>
				<h3>{this.props.subtitle}</h3>
				<button onClick={this.props.onClick}>{this.props.cta}</button>
			</div>
		);
	}
});

export default ModalApp;
