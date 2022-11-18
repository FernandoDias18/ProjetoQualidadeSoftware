import { useEffect } from "react";
import { Chart } from "react-google-charts";
import { useModalContext } from "../../Context";
import { aderencia } from "./Dashboard.css";

export function Dashboard (){

  const {conforme,
    naoSeAplica,
    aderencia,
    naoConforme} =useModalContext()
 
  
  
 

  
  


    const data = [
        ["Task", "Hours per Day"],
        ["Não conforme", naoConforme],
        ["Não se", naoSeAplica],
        ["Conforme", conforme],
        
      ];

      const options = {
        title: "Porcentagem Auditoria",
        width: "100%",
        height: 400,
        colors: ["#FF3232","#ff9e1e","#359435"],
        
        
        
      }; 
     

    return (
        <>
       <div class="aderencia">
        <h3>Aderência</h3> 
       {aderencia}%
       </div>
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        />
        </>
       
    )
}
export default Dashboard