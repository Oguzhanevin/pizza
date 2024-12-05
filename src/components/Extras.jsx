import React from "react";
import { Col, Input, Label, Row } from "reactstrap";

export default function Extras(props) {
  const { form, extras, handleChange } = props;

  // Chunk extras into rows of 3
  const chunkedExtras = extras.reduce((result, item, index) => {
    const rowIndex = Math.floor(index / 3);
    if (!result[rowIndex]) result[rowIndex] = [];
    result[rowIndex].push(item);
    return result;
  }, []);

  return (
    <>
      {chunkedExtras.map((row, rowIndex) => (
        <Row key={rowIndex} className="g-0 my-2">
          {row.map((item, colIndex) => {
            const itemId = `extra${rowIndex * 3 + colIndex}`;
            return (
              <Col className="gray-text mx-2" check key={itemId}>
                <Input
                  id={itemId}
                  name="extras"
                  type="checkbox"
                  value={item}
                  checked={form.extras.includes(item)}
                  onChange={handleChange}
                />
                <Label htmlFor={itemId} check>
                  <span className="mx-2">{item}</span>
                </Label>
              </Col>
            );
          })}
        </Row>
      ))}
    </>
  );
}
