import DatePicker from "react-datepicker";
import { renderMonthContent } from "../../../../utils/functions";

// import "./datepicker.module.css";
import "react-datepicker/dist/react-datepicker.css";
export default function DatePickerComponent({ year, setYear }) {
  console.log("year", year);

  return (
    <DatePicker
      onChange={(value) => {
        setYear(value);
      }}
      selected={year}
      renderMonthContent={renderMonthContent}
      showMonthYearPicker
      dateFormat="MM/yyyy"
      // id="datepicker"
    />
  );
}
