import React from 'react';
import Page from './page';

import Feed from './feed';

export default class FeedPage extends Page {
	constructor(props) {
		super(props)
		this.setTitle('Local Torrent - Content Search Engine');
	}
	render() {
		return (
			<div id='index-window' className='column center'>
				<div className='column center w100p pad0-75'>
					<Feed />
				</div>
			</div>
		);
	}
}
