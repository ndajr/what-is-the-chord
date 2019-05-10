import React from 'react'
import styled from 'styled-components/macro'
import { numberInRangeUpTo12 } from '../helpers'

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

function Dots({ dotsStyle, frets }) {
	const dotMap = {
		empty: () => (<EmptyDot />),
		single: () => (<SingleDot />),
		double: () => (<DoubleDot />),
	}

	const renderDot = i => {
		const fretNumber = numberInRangeUpTo12(i)
		const dotStyle = dotsStyle[fretNumber]
		return dotMap[dotStyle]()
	}

  return (
		<StyledDots>
			<div className="row row--1-13">
				{frets.map((item, i) => 
					<StyledDotsWrapper key={i}>
						{renderDot(i)}
					</StyledDotsWrapper>
				)}
			</div>
		</StyledDots>
  )
}

export default Dots