import { useState } from "react";

const Card = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleOpen = () => {
        setIsVisible(true);
    };

    return (
        <div>
            <h2>Card</h2>

            <button onClick={handleOpen}>open</button>
            {isVisible && (
                <div role="main" data-testid="main">
                    <p>Content</p>
                </div>
            )}
        </div>
    );
};

export default Card;
