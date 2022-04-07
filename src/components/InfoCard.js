import CardContainer from './CardContainer'

const InfoCard = ({heading, text, subtext, outline = false, invertText = false}) => {

    return (
        <CardContainer outline={outline}>
            <h1 className={`${invertText ? `text-gray-200` : `text-gray-800`} text-3xl`}>{ heading }</h1>
            <p className = {`${invertText ? `text-blue-300` : `text-blue-600`} text-sm pb-2`}>{ subtext }</p>
            <p className = {`${invertText ? `text-gray-300` : `text-gray-700`} pb-2`}>{ text }</p>
            <p className = {`${invertText ? `text-gray-300` : `text-gray-700`}`}>{ text }</p>
        </CardContainer>
    )
}

export default InfoCard