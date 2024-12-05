import { Col, Input, Label } from "reactstrap";

export default function Size({ form, sizes, handleChange }) {
  return (
    <div className="size-options">
      {sizes.map((size, index) => (
        <div className="size-option" key={index}>
          <Input
            id={`size-${size}`}
            name="size"
            type="radio"
            value={size}
            checked={form.size === size}
            onChange={handleChange}
            className="size-input"
          />
          <Label htmlFor={`size-${size}`} className="size-label">
            {size}
          </Label>
        </div>
      ))}
    </div>
  );
}
