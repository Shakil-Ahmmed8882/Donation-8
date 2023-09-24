import { useData } from "../../API/useData";


const Statistics = () => {
      const {data,error} = useData()

      
      console.log(error)
      console.log(data)

      return (
            <div>
                  <h1 className="text-3xl">Statistics</h1>
            </div>
      );
};

export default Statistics;