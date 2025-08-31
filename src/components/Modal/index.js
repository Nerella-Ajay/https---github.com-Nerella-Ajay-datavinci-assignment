import './index.css'

const Modal= ({ children, onClose }) => {
    return (
    <div className='modal-overlay'>
        <div className='modal-container'>
            
            <div className='umf-container'>
                <h1 className='title-text'><span className='title'>UMF</span> is the strength and purity rating of Manuka honey.</h1>
                <div className="umf-taste-section">
                    <div className="umf-scale-section">
                        <div className="umf-list">
                            {[10, 15, 20, 24, 26, 28, 30].map(umf => (
                            <div key={umf} className={`umf-item umf-${umf} `}>
                            {umf}+
                            </div>
                            ))}
                        </div>
                        <p className='subtitle-text'>The higher the number, the greater the potency and rarity of Manuka honey.</p>
                    </div>
                </div>
            </div>

            <div className='mgo-container'>
                <h1 className='title-text'><span className='title'>MGO </span>is the key natural compound that gives Manuka honey its special antibacterial strength.</h1>
                <div className="umf-taste-section">
                    <div className="umf-scale-section">
                        <div className="umf-list">
                            {[263, 514, 829, 1122, 1282, 1450, 1620].map(mgo => (
                            <div key={mgo} className={`umf-item umf-${mgo}`}>
                            {mgo}+
                            </div>
                            ))}
                        </div>
                        <p className='subtitle-text'>The higher the number, the higher the antibacterial properties in the honey.</p>
                    </div>
                    </div>
            </div>

            <div className='button-container'>
                <button className="modal-close" onClick={onClose}>Close</button>
            </div>

        </div>
    </div>
)
}
export default Modal