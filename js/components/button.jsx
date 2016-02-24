var Button = React.createClass({
propTypes: {
	text: React.PropTypes.string,
	style: React.PropTypes.string
},
render: function() {
	var text = this.props.text
	var style = this.props.style
	return (
		<button className={style}>{text}</button>
	);
}
});
