import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useModalContext } from "../../Context";
import "./Calendar.css";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});





export function Calendario() {

    const{arrayNaoConformidade,openModal,pegarNaoConformidade} = useModalContext()
 
 

    const abrirModal =(evento)=>{
        pegarNaoConformidade(evento.ID)
        console.log(evento.ID)
        openModal()
        }
    

    return (
        <div className="Evento">
           
            <Calendar 
               
                localizer={localizer} 
                events={arrayNaoConformidade} 
                startAccessor="dataResolucao" 
                endAccessor="dataResolucao" 
                style={{ height: 500, margin: "50px" }} 
                onSelectEvent={(evento) => abrirModal(evento)}
            />
        </div>
    );

    
}






