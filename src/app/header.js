import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Background from './images/pirate-mod.jpg'
import RaisedButton from 'material-ui/RaisedButton';
import Search from './search'
import Tooltip from './tooltip'

class Header extends React.Component {
	constructor(props)
	{
		super(props)
		this.header = React.createRef();
	}
	componentDidMount()
	{
		window.onscroll = () => {
			if (window.pageYOffset >= 15)
			{
				const scrollHeight = Math.max(
					document.body.scrollHeight, document.documentElement.scrollHeight,
					document.body.offsetHeight, document.documentElement.offsetHeight,
					document.body.clientHeight, document.documentElement.clientHeight
				);

				if(scrollHeight - 240 < document.documentElement.clientHeight)
				{
					return
				}

				if(!this.stickyHeader)
				{
					this.stickyHeader = true
					this.header.current.classList.add("sticky");
				}
			}
			else
			{
				if(this.stickyHeader)
				{
					this.stickyHeader = false
					this.header.current.classList.remove("sticky");
				}
			}
		};
	}
	componentWillUnmount()
	{
		window.onscroll = null
	}

	render()
	{
		return (
			<div ref={this.header} className='header'>
				<Card className='w100p header-main' style={{position: 'fixed', zIndex: 2}}>
					<CardMedia
						overlay={<CardTitle className='header-title' title={__('Local Torrent!')} style={{paddingTop: 2}} subtitle={
							<div>
								{__('Welcome to Local Torrent')} {__('This is file search engine based on the torrents from the internet')}. 
								{__('Here you can easily find torrent or file that you intrested for')}. {__('We are not responsible for any content')}:
								{__('this is only information about content that collected automatically')}!
							</div>} />}
					>
						<div className='row header-row' style={{
							padding: '15px',
							background: `url('${Background}') no-repeat`,
							backgroundSize: 'cover',
							transition: '1s'
						}}>
							
							
							<div className='fs0-85 pad0-75 column search-panel' style={{
								marginLeft: 'auto', 
								marginTop: '-10px',
								paddingLeft: 15,
								zIndex: 2
							}}>
								<Search />
							</div>
						</div>
					</CardMedia>
				</Card>
				<div className='clear-header-space' style={{transition: '1.0s'}} />
			</div>
		)

	}
}

export {Header}
