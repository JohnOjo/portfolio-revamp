import './Footnote.css'

const Footnote = () => {
    return (
        <div className={'footnote-container'}>
            <div className={'footnote-ends'}>
                {'Privacy policy '}&nbsp;&nbsp;&nbsp;{`${(new Date()).getFullYear()}`}&nbsp;
                <div className={'footnote-end'}></div>
                <div className={'footnote-middle'}>{'JOHN OJO'}</div>
                {'. All rights reserved\r'}
            </div>
        </div>
    )
}

export default Footnote
