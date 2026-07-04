export default function Modal({
                                  currentLevel,
                                  setCurrentLevel,
                                  startGame
                              }) {
    return (
        <div className={"modal"}>
           <div className={"modal-bg"}/>
            <div className={"modal-content"}>
                <div className={"modal-title text-family"}>
                    Победа
                </div>
                <div className={"modal-body"}>
                    <div className={"text-family modal-body-text"}>
                        Общий счет: 100
                    </div>
                    <div className={"text-family modal-body-text"}>
                        Счет за уровень: 100
                    </div>
                    <div className={"text-family modal-body-text"}>
                        Комбо: 100
                    </div>
                    <div className={"modal-footer"}>
                        <div onPointerDown={()=>{
                            setCurrentLevel(currentLevel)
                            startGame()
                        }} className={"modal-btn"}>
                            <img src={"./img/btn-bg.png"} />
                            <div className={"modal-btn-text"}>Заново</div>
                        </div>
                        <div onPointerDown={()=>{
                            setCurrentLevel(currentLevel + 1)
                            startGame()
                        }} className={"modal-btn"}>
                            <img src={"./img/btn-bg.png"} />
                            <div className={"modal-btn-text"}>Продолжить</div>
                        </div>
                    </div>
                </div>
                <img src={"./img/modal.png"}/>
            </div>
        </div>
    )
}