import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const PhoneNumber = ({
  onChange,
  error,
  value,
}: {
  onChange: (e: string) => void;
  error?: string;
  value?: string;
}) => {
  return (
    <div className="grid items-center gap-1.5 w-full" >
      <div>
        <PhoneInput
          country={"ma"}
          onChange={onChange}
          value={value}
          inputProps={{
            name: "phone",
            id: "phone",
          }}
          inputClass="!w-full flex h-9 w-full rounded-md !border !border-input bg-transparent px-3 !py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
        <span className={`text-red-500 text-sm pt-2`}>{error}</span>
      </div>
    </div>
  );
};

export default PhoneNumber;
