import React, { useState, memo } from 'react'
import styled from 'styled-components'
import id from 'shortid'

const TITLE = styled.h2``

const CONTAINER = styled.div``

const PROJECT_IMAGE = styled.img``

const PROJECT_TITLE = styled.h4``

const data = [
	{
		title: 'cules tv',
		image: 'assets/front.png',
	},

	{
		title: 'super tv',
		image: 'assets/front.png',
	},

	{
		title: 'porn tv',
		image: 'assets/front.png',
	},
	{
		title: 'comedy tv',
		image: 'assets/front.png',
	},
]

const BUTTON = styled.button``

const WORK = () => {
	const [work_state, set_work_state] = useState(0)

	return (
		<div>
			<TITLE> I have one </TITLE>
		</div>
	)
}

export default WORK
