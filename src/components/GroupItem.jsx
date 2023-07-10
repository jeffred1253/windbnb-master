import cuisine from "./../pictures/cuisine.png";
import chambre1 from "./../pictures/chambre1.png";
import escaliers from "./../pictures/escaliers.png";
import chambre2 from "./../pictures/chambre2.png";
import chambre3 from "./../pictures/chambre3.png";
import salon from "./../pictures/salon.png";

const List1 = [
    {
        image: cuisine,
        subtitle: (
            <span>
                <span className="host">SUPER HOST</span>Entire apartment . 2 beds
            </span>
        ),
        stare: 4.4,
        title: "Stylist apartment in center of the city",
    },
    {
        image: chambre1,
        subtitle: "Private room",
        stare: 4.25,
        title: "Cozy, peaceful and private room with...",
    },
    {
        image: escaliers,
        subtitle: "Entire house",
        stare: 4.96,
        title: "Mordern House in a remote area",
    },
];

const List2 = [
    {
        image: chambre2,
        subtitle: (
            <span>
                <span className="host">SUPER HOST</span>Entire apartment . 2 beds
            </span>
        ),
        stare: 4.85,
        title: "Stylist room in design district",
    },
    {
        image: chambre3,
        subtitle: "Private room",
        stare: 4.54,
        title: "Modern apartment close to nature",
    },
    {
        image: salon,
        subtitle: "Entire house",
        stare: 4.64,
        title: "House in a remote area",
    },
];

function Groupe() {
    return (
        <div className="groupes">
            <div className="groupe1">
                {List1.map((groupe, index) => (
                    <div key={`${groupe}/${index}`} className="groupe">
                        <div
                            className="img"
                            style={{ backgroundImage: `url(${groupe.image})` }}
                        ></div>
                        <div className="subtitle">
                            <span>{groupe.subtitle}</span>
                            <span className="stare">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_1_31)">
                                        <path
                                            d="M14.43 8.00001L12.96 3.16001C12.67 2.21001 11.33 2.21001 11.05 3.16001L9.56996 8.00001H5.11996C4.14996 8.00001 3.74996 9.25001 4.53996 9.81001L8.17996 12.41L6.74996 17.02C6.45996 17.95 7.53996 18.7 8.30996 18.11L12 15.31L15.69 18.12C16.46 18.71 17.54 17.96 17.25 17.03L15.82 12.42L19.46 9.82001C20.25 9.25001 19.85 8.01001 18.88 8.01001H14.43V8.00001Z"
                                            fill="#EB5757"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_31">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {groupe.stare}
                            </span>
                        </div>
                        <div>{groupe.title}</div>
                    </div>
                ))}
            </div>
            <div className="groupe2">
                {List2.map((groupe, index) => (
                    <div key={`${groupe}/${index}`} className="groupe">
                        <div
                            className="img"
                            style={{ backgroundImage: `url(${groupe.image})` }}
                        ></div>
                        <div className="subtitle">
                            <span>{groupe.subtitle}</span>
                            <span className="stare">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_1_31)">
                                        <path
                                            d="M14.43 8.00001L12.96 3.16001C12.67 2.21001 11.33 2.21001 11.05 3.16001L9.56996 8.00001H5.11996C4.14996 8.00001 3.74996 9.25001 4.53996 9.81001L8.17996 12.41L6.74996 17.02C6.45996 17.95 7.53996 18.7 8.30996 18.11L12 15.31L15.69 18.12C16.46 18.71 17.54 17.96 17.25 17.03L15.82 12.42L19.46 9.82001C20.25 9.25001 19.85 8.01001 18.88 8.01001H14.43V8.00001Z"
                                            fill="#EB5757"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_31">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {groupe.stare}
                            </span>
                        </div>
                        <div>{groupe.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Groupe