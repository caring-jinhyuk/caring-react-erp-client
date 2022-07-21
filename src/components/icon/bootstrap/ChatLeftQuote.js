import * as React from 'react';

function SvgChatLeftQuote(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M14 1a1 1 0 011 1v8a1 1 0 01-1 1H4.414A2 2 0 003 11.586l-2 2V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z' />
			<path d='M7.066 4.76A1.665 1.665 0 004 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 008 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112z' />
		</svg>
	);
}

export default SvgChatLeftQuote;
