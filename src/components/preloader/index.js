import React, { Component } from 'react'

export default class Preloader extends Component {

	render() {
		return (
			<div className="preloader">
				<div className="preloader_box">
						<div className="loader">
								<div className="circle item0"></div>
								<div className="circle item1"></div>
								<div className="circle item2"></div>
						</div>
				</div>
			</div>
		)
	}
}
