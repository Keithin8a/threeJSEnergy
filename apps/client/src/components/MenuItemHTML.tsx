import { useThree } from "@react-three/fiber"

const Html = () => {

    return (
        <div
            style={{
            fontFamily: 'sans-serif',
            fontSize: '50px',
            lineHeight: 0.75,
            }}>
            <a href="/bob">
                <h1
                    style={{
                        position: 'absolute',
                        top: '30vh',
                        color: 'white',
                        margin: 0,
                    }}>
                    Discover Solar
                </h1>
        </a>
        <hr style={{
            position: "absolute",
            top: '75vh',
            color: "gold",
            width: '100vw'
        }}/>
            <h1
            style={{
                position: 'absolute',
                top: '90vh',
                left: '50vw',
                color: '#f4b677',
                margin: 0,
            }}>
            Discover Wind
            </h1>
      </div>
    )
}

export default Html