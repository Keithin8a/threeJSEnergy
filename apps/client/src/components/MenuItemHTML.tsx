import { Link, NavLink } from "react-router"

const MenuItemHtml = () => {

    return (
        <div
            style={{
            fontFamily: 'sans-serif',
            fontSize: '50px',
            lineHeight: 0.75,
            }}>
            <a href="/Solar">
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
            <a href="/Wind">
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
            </a>
      </div>
    )
}

export default MenuItemHtml