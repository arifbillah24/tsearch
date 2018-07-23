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
								<div className='row' style={{position: 'absolute', top: -65}}>
									<Tooltip hint={__('main settings')}>
										<svg className='clickable'
											onClick={() => {
												window.router('/config')
											}}
											fill='white' style={{height: 45, margin: 4}} viewBox="0 0 932.179 932.179">
											<g>
												
											</g>
										</svg>
									</Tooltip>
									<Tooltip hint={__('filters settings')}>
										<svg className='clickable'
											onClick={() => {
												window.router('/filters')
											}}
											fill='white' style={{height: 45, margin: 4}} viewBox="0 0 512 512">
											<g>
												<g>
													
												</g>
											</g>
											<g>
												<g>
													
												</g>
											</g>
											<g>
												<g>
													
												</g>
											</g>
											<g>
												<g>
													
												</g>
											</g>
											<g>
												<g>
													
												</g>
											</g>
										</svg>
									</Tooltip>
								</div>

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
							<RaisedButton
								label={__('Feed')}
								onClick={() => {
									window.router('/')
								}}
								backgroundColor='#69238c'
								labelColor='white'
								style={{height: 60, borderRadius: 6, margin: 5, zIndex: 1}}
								buttonStyle={{borderRadius: 5}}
								icon={<svg fill='white' style={{height: 28}} viewBox="0 0 64.051 64.051">
									<g>
										
									</g>
								</svg>
         
								}
							/>
							<RaisedButton
								label={__('Top')}
								onClick={() => {
									window.router('/top')
								}}
								backgroundColor='#B1CE57'
								labelColor='white'
								style={{height: 60, width: 120, borderRadius: 5, margin: 5, zIndex: 1}}
								buttonStyle={{borderRadius: 5}}
								icon={<svg fill='white' style={{height: 30}} viewBox="0 0 284.929 284.929">
									<g>
										
									</g>
								</svg>
								}
							/>
							<RaisedButton
								label={__('Downloads')}
								onClick={() => {
									window.router('/downloads')
								}}
								backgroundColor='#2080E4'
								labelColor='white'
								style={{height: 60, borderRadius: 6, margin: 5, zIndex: 1}}
								buttonStyle={{borderRadius: 5}}
								icon={<svg fill='white' style={{height: 30}} viewBox="0 0 548.176 548.176">
									
								</svg>
								}
							/>
							<RaisedButton
								label={__('Activity')}
								onClick={() => {
									window.router('/activity')
								}}
								backgroundColor='#2a5cba'
								labelColor='white'
								style={{height: 60, width: 160, borderRadius: 5, margin: 5, zIndex: 1}}
								buttonStyle={{borderRadius: 5}}
								icon={<svg fill='white' style={{height: 30}} viewBox="0 0 352.352 352.352">
									<g>
										
									</g>
								</svg>
								}
							/>
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
