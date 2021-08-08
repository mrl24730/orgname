/* eslint-disable-next-line */
export interface PnUiProps {
  test: boolean;
}

export function PnUi(props: PnUiProps) {
  return (
    <div>
      <h1>Welcome to PnUi! helloss!{props.test.toString()}</h1>
    </div>
  );
}

export default PnUi;
