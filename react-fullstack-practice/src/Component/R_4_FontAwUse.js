import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function R_4_FontAwUse() {
    return (
        <div>
            <h1>
                Font Awesome Docs Icone Use

            </h1>
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faHouse} />
        </div>
    )

}


export default R_4_FontAwUse;


//  1. Add SVG Core
// npm i --save @fortawesome/fontawesome-svg-core
// 2. Add Icon Packages
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// 3. Add the React Component/
// npm i --save @fortawesome/react-fontawesome@latest