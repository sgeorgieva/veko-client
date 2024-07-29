import { DatePicker } from "gestalt-datepicker";

export default function DatePickerComponent({
  startDate,
  availableDates,
  hasDateValidationError,
  bg,
  setStartDate,
  label,
}: any) {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      includeDates={availableDates}
      label={label}
      placeholderText={`${new Date()}`}
      localeData={bg}
      idealDirection="down"
      minDate={new Date()}
      id="example-errorMessage"
      errorMessage={!hasDateValidationError ? undefined : "Моля, изберете дата"}
    />
  );
}
