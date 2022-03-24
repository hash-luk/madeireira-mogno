import  "./styles";

interface opinionsProps {
    id?: number
    name: string
    content: string
}

export const Opinion = (opinion : opinionsProps) => {
    return(
        <div className="opinion">
            <p>{opinion.name}</p>
            <div id="line"></div>
            <p>{opinion.content}</p>
        </div>
    )
}