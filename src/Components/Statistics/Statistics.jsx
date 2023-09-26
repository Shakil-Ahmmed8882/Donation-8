import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";
import { getDataFromLs } from "../../utils/LocalStorage";
// react icon
import { AiFillDollarCircle } from "react-icons/ai";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Statistics = () => {
  const savedCards = getDataFromLs();
  const selectedCards = savedCards.length;

  const percentage = ((selectedCards / 12) * 100).toFixed(2);

  const roundedPercentage = parseInt(Math.round(percentage));

  return (
    <div className="pb-11">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={[{ value: selectedCards }, { value: 12 - selectedCards }]}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={110}
            fill="#8884d8"
            labelLine={false} // Remove the label line
          >
            <Cell key="cell-0" fill="#00C49F" />
            <Cell key="cell-1" fill="#FF444A" />
            {/* Display the percentage as a label */}
            <Label
              value={`${percentage}%`}
              position="center"
              fill="white"
              fontWeight={"bolder"}
              fontSize={30}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-x-8 gap-y-4 flex-col px-2 items-center justify-center ">
        <div className="flex gap-3 items-center">
          <AiFillDollarCircle
            style={{ color: "#FF444A", fontSize: "20px" }}></AiFillDollarCircle>
          <p>Total Donation</p>
          <span className="w-[120px] h-[5px]  bg-[#FF444A]"></span>
        </div>
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="bg-[#00C49F] rounded-full p-1 text-[10px]"
            color="white"
          />
          <p>Your Donation</p>
          <div className="relative w-[120px] h-2 bg-[#00c4a021]">
            <span
              style={{ width: `${roundedPercentage}%` }}
              className="absolute left-0 h-[5px] bg-[#00C49F]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
