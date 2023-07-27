import Groupe from "./GroupItem";

const Body = () => {
    return (
        <body className="body">
            <div className="title">
                <span>Stays in Finland</span>
                <span>12+ stays</span>
            </div>
            <Groupe />
            <div className="foot">
                created by <b>Jeffred</b> - devChallenges.io
            </div>
        </body>
    );
};

export default Body;