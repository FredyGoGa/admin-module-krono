import "./widgetSm.css";
import {Visibility} from "@material-ui/icons"

export default function widgetSm () {
  return (
    <div className="widgetSm">
     <span className="widgetSmTitle">New Join Members</span>
     <ul className="widgetSmList">
       <li className="widgetSmListItem">
         <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="imagen" className="widgetSmImg"></img>
         <div className="widgetSmUser">
           <span className="widgetSmUsername">Fredy  Gonzalez </span>
           <span className="widgetSmUserTitle">Software Enginner</span>
         </div>
         <button className="widgetSmUserButton">
            <Visibility className="widgetSmIcon"/>
            Display
         </button>
       </li>
       <li className="widgetSmListItem">
         <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="imagen" className="widgetSmImg"></img>
         <div className="widgetSmUser">
           <span className="widgetSmUsername">Fredy  Gonzalez</span>
           <span className="widgetSmUserTitle">Software Enginner</span>
         </div>
         <button className="widgetSmUserButton">
            <Visibility/>
            Display
         </button>
       </li>
       <li className="widgetSmListItem">
         <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="imagen" className="widgetSmImg"></img>
         <div className="widgetSmUser">
           <span className="widgetSmUsername">Fredy  Gonzalez</span>
           <span className="widgetSmUserTitle">Software Enginner</span>
         </div>
         <button className="widgetSmUserButton">
            <Visibility/>
            Display
         </button>
       </li>
       <li className="widgetSmListItem">
         <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="imagen" className="widgetSmImg"></img>
         <div className="widgetSmUser">
           <span className="widgetSmUsername">Fredy  Gonzalez</span>
           <span className="widgetSmUserTitle">Software Enginner</span>
         </div>
         <button className="widgetSmUserButton">
            <Visibility/>
            Display
         </button>
       </li>
       <li className="widgetSmListItem">
         <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="imagen" className="widgetSmImg"></img>
         <div className="widgetSmUser">
           <span className="widgetSmUsername">Fredy  Gonzalez</span>
           <span className="widgetSmUserTitle">Software Enginner</span>
         </div>
         <button className="widgetSmUserButton">
            <Visibility/>
            Display
         </button>
       </li>
     </ul>


    </div>
  )
}
