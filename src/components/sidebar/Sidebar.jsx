import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp, GroupAdd, Category, Receipt, Assessment, MailOutline, Feedback,   } from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebasarWrapper">
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">Dashboard</h3>
           <ul className="sidebarList">
            
           <li className="sidebarListItem active ">
               <LineStyle className="sidebarIcon"/>
               Home

             </li>
             <li className="sidebarListItem">
               <Timeline className="sidebarIcon"/>
               Analytics

             </li>
             <li className="sidebarListItem">
               <TrendingUp className="sidebarIcon"/>
               Sales

             </li>

           </ul>

         </div>
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">Quick Menu</h3>
           <ul className="sidebarList">
            
           <li className="sidebarListItem active">
               <GroupAdd/>
               Users

             </li>
             <li className="sidebarListItem">
               <Category/>
               Products

             </li>
             <li className="sidebarListItem">
               <Receipt/>
               Transactions

             </li>

           </ul>

         </div>
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">Notifications</h3>
           <ul className="sidebarList">
            
           <li className="sidebarListItem active">
               <Assessment/>
               Reports

             </li>
             <li className="sidebarListItem">
               <MailOutline/>
               Mail

             </li>
             <li className="sidebarListItem">
               <Feedback/>
               Feedback

             </li>

           </ul>

         </div>
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">Staff</h3>
           <ul className="sidebarList">
            
          
             <li className="sidebarListItem">
               <Feedback/>
               Chat

             </li>
             <li className="sidebarListItem">
               <TrendingUp/>
               Sales

             </li>

           </ul>

         </div>
       </div>
    </div>
  )
}
