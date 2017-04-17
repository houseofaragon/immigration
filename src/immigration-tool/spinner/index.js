import React from 'react';

export default class Spinner extends React.PureComponent {
	render() {
		return (
			<div className='spinner'>
			  <span style={{color: 'transparent'}}><p>Loading...</p></span>
	          <svg x='0px' y='0px' height='120px' viewBox='0 0 120 120' enableBackground='new 0 0 0 0'>
	            <circle fill='#fdda00' stroke='none' cx='16' cy='50' r='10'>
	              <animate
	                attributeName='opacity'
	                dur='1s'
	                values='0;1;0'
	                repeatCount='indefinite'
	                begin='-0.1'/>
	            </circle>
	            <circle fill='#fdda00' stroke='none' cx='56' cy='50' r='10'>
	              <animate
	                attributeName='opacity'
	                dur='1s'
	                values='0;1;0'
	                repeatCount='indefinite'
	                begin='-0.2'/>
	            </circle>
	            <circle fill='#fdda00' stroke='none' cx='96' cy='50' r='10'>
	              <animate
	                attributeName='opacity'
	                dur='1s'
	                values='0;1;0'
	                repeatCount='indefinite'
	                begin='-0.3'/>
	                </circle>
	          </svg>
	        </div>
		);
	}
}
