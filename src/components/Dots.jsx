import React from 'react'

import styled from 'styled-components'

const StyledDots = styled.div`
	top: 0;
	left: 0;
	height: 250px;
	position: absolute;
	width: 100%;
`

const StyledDotsWrapper = styled.div`
	float: left;
	min-height: 1px;
	height: 250px;
	width: 7.6923%;
`

const EmptyDot = styled.div`
	height: 250px;
`

const SingleDot = styled.div`
	height: 100%;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${({ theme: { colors } }) => colors.dotColor };
		opacity: 0.4;
		margin-left: 3px;
		top: 50%;
	}
`

const DoubleDot = styled.div`
	height: 100%;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${({ theme: { colors } }) => colors.dotColor };
		opacity: 0.4;
		margin-left: 3px;
		top: 16%;
	}
	&:after {
		content: '';
		position: absolute;
		bottom: 8%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${({ theme: { colors } }) => colors.dotColor };
		opacity: 0.4;
		margin-left: 3px;
	}
`

function Dots() {
	const MAX_NUMBER_DOTS = 13
	const dots = [...Array(MAX_NUMBER_DOTS).keys()]

	const renderDot = i => {
		const isSingle = i !== 0 && i !== 1 && i !== 2 && i !== 11 && i % 2 === 1
		const isDouble = i === 12 
		
		if(isSingle) return (<SingleDot />)
		if(isDouble) return (<DoubleDot />)
		return (<EmptyDot />)
	}

  return (
		<StyledDots>
			<div className="row row--1-13">
				{dots.map((item, i) => 
					<StyledDotsWrapper>
						{renderDot(i)}
					</StyledDotsWrapper>
				)}
			</div>
		</StyledDots>
  )
}

export default Dots