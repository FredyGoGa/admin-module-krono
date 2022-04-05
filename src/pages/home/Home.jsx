import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css"
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
     <FeaturedInfo/>
     <Chart data={userData} title="usersKronosAdmin Analitics" grid datakey="Active Users"/>
     <div className="homeWidgests">
       <WidgetSm/>
       <WidgetLg/>
       
     </div>
    </div>
  )
}
