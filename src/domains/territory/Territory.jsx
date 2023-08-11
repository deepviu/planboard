 
import Territory_Componentss from "../territory/Territory_componentss";
import { Wgt_Depotwise_Data } from "../depot/Wgt_Depotwise_Data";
 

const Territory = () => {
  return (
    <div className=" main ">   
      <div class="w3-row w3-padding-16"></div>
      <Territory_Componentss
        depotsData={Wgt_Depotwise_Data}
        selectedDepot={"all"}
      />
      <div class="w3-row w3-padding-16"></div>
    </div>
  );
};
export default Territory;
