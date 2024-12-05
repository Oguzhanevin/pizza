import { Input } from "reactstrap";

export default function Thickness({ form, thickness, handleChange }) {
  return (
    <Input
      name="thickness"
      type="select"
      className="gray-text"
      value={form.thickness}
      onChange={handleChange}
      style={{ backgroundColor: "#faf7f2" }}
    >
      {thickness.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </Input>
  );
}
