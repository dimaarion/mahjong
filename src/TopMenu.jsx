export default function TopMenu({score = 0, deck = 0}){
    return (
        <div className={"top-menu"}>
            <div className={"top-menu-title"}>
                Маджонг
            </div>
            <div className={"top-menu-score"}>
                Ваш счет: {score}
            </div>
            <div className={"top-menu-step"}>
                Колода {deck}
            </div>
        </div>
    )
}