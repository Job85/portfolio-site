import token from "../../assets/Token_Huntr.png";
import inventory from "../../assets/Restaurant-Inventory-App.png";
import qc from "../../assets/QCDetailing.png";
import { faHtml5, faCss3Alt, faSquareJs, faSass, faBootstrap, faVuejs, faReact, faNode, faPython } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as MongoDBSlateBlue } from '../../assets/MongoDB_SlateBlue.svg';
import { ReactComponent as PostgreSQL } from '../../assets/postgresql.svg';
import { ReactComponent as Sequelize } from '../../assets/sequelize.svg';

const text1 = "A web app for the adventerous to go Geo Caching. Using REST API's users have the ability to perform full CRUD of the locations model. \n Click to flip card"
const text2 = "A web app for the hospitality industry designed to streamline the inventory process. Using REST API's users have the ability to perform full CRUD of the items model. \n Click to flip card"
const text3 = "A website built for a client per their details and with UX and UI design standards per my suggestions. \n Click to flip card"

let newText1 = text1.split('\n').map(i => {
    return <span className="card-text" style={{ color: '#4ffb12' }}
    >
        {i}
    </span>
})
let newText2 = text2.split('\n').map(i => {
    return <span style={{ color: '#4ffb12' }}
    >
        {i}
    </span>
})
let newText3 = text3.split('\n').map(i => {
    return <span style={{ color: '#4ffb12' }}
    >
        {i}
    </span>
})

export const projectCards = [
    {
        id: "1",
        variant: "click",
        img: token,
        title: "Token Huntr",
        title2: "Technologies",
        text: newText1,
        site: "https://token-huntr-app.web.app/",
        gitHub: "https://github.com/Job85/token-huntr-app",
        gitHub2: "https://github.com/Job85/token-huntr",
        subTitle: "Languages",
        subTitle2: "Libraries & Environments",
        subTitle3: "Database",
        listGroup: ["CSS", "JavaScript"],
        listGroup2: ["React.js", "Styled-Components", "Validator.js", "Axios", "Font Awesome", "Node.js"],
        listGroup3: ["PostgreSQL"]
    },
    {
        id: "2",
        variant: "click",
        img: inventory,
        title: "Inventory App",
        title2: "Technologies",
        text: newText2,
        site: "https://restaurant-inventory-77229.web.app//",
        gitHub: "https://github.com/Job85/Restaurant-Inventory-App",
        gitHub2: "https://github.com/Job85/inventory-app-backend",
        subTitle: "Languages",
        subTitle2: "Libraries & Environments",
        subTitle3: "Database",
        listGroup: ["CSS", "JavaScript"],
        listGroup2: ["React.js", "React Redux", "Axios", "Mongoose", "Font Awesome", "Node.js"],
        listGroup3: ["MongoDB"]
    },
    {
        id: "3",
        variant: "click",
        img: qc,
        title: "QC Detailing",
        title2: "Technologies",
        text: newText3,
        site: "https://qcdetailing.net/",
        subTitle: "Languages",
        subTitle2: "Libraries",
        listGroup: ["CSS", "JavaScript"],
        listGroup2: ["React.js", "Styled-Components", "Email.js", "React-Icons", "React-Hook-Forms"],
        listGroup3: ["PostgreSQL"]
    },
];



export const skillsCard = [
    {
        id: "1",
        title: "Languages",
        icons: [faHtml5, faCss3Alt, faSquareJs, faPython],
        svgs: [],
        strings: []
    },
    {
        id: "2",
        title: "Frameworks",
        icons: [faSass, faBootstrap, faVuejs],
        svgs: [],
        strings: ["Django"]
    },
    {
        id: "3",
        title: "Libraries",
        icons: [faReact],
        svgs: [Sequelize],
        strings: ["Mongoose"]
    },
    {
        id: "4",
        title: "Environments",
        icons: [faNode],
        svgs: [],
        strings: []
    },
    {
        id: "5",
        title: "Databases",
        icons: [],
        svgs: [PostgreSQL, MongoDBSlateBlue],
        strings: []
    },
]