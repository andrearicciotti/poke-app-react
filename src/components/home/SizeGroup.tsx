import { useSelection } from "../../context/configurator/SelectionContext";

export interface SizeGroupProps {
  name: string,
  price: number,
  limits: Limits
}

type Limits = {
  [key: string]: number;
}

export function SizeGroup({ name, price, limits }: SizeGroupProps) {
  const { size, selectSize } = useSelection();
  const id = `size-${name}`;

  const selected = name === size ? 'selected' : '';

  return (
    <div className={`size-container${' ' + selected} min-w-200px bg-${Math.floor(Math.random() * 4)}`}>
      <label htmlFor={id}>
        <input
          type="radio"
          name="size"
          id={id}
          onClick={() => selectSize(name)}
        />
        <div className="inner-text flex flex-column flex-center gap-1">
          <span className="size-name text-large text-uppercase weight-bold">{name}</span>
          <span className="size-limits flex flex-column flex-center m-1">
            {renderLimits(limits)}
          </span>
          <span className="size-price text-large weight-bold">{price.toFixed(2)} €</span>
        </div>
      </label>
    </div>
  )
}


function renderLimits(limits: Limits) {
  return Object.entries(limits).map(limit => {
    const type: string = limit[0];
    const quantity: number = limit[1];

    return (
      <span key={type} className="limit text-normal">
        {quantity} {type} 
      </span>
    )
  })
}