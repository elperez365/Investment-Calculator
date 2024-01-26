import Input from "./Input";

export default function UserInput({ handleChange, fields }) {
  return (
    <div id="user-input">
      <Input
        type={"number"}
        name={"initialInvestment"}
        label={"Initial Investment"}
        onChange={(e) => handleChange(e)}
        value={fields.initialInvestment}
      />
      <Input
        type={"number"}
        name={"annualInvestment"}
        label={"Annual Investment"}
        onChange={(e) => handleChange(e)}
        value={fields.annualInvestment}
      />
      <Input
        type={"number"}
        name={"expectedReturn"}
        label={"Expected Return"}
        onChange={(e) => handleChange(e)}
        value={fields.expectedReturn}
      />
      <Input
        type={"number"}
        name={"duration"}
        label={"Duration"}
        onChange={(e) => handleChange(e)}
        value={fields.duration}
      />
    </div>
  );
}
