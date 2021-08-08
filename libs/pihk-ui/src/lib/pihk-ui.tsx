/* eslint-disable-next-line */
export interface PihkUiProps {
  test: boolean;
}

export function PihkUi(props: PihkUiProps) {
  return (
    <div>
      <h1>Welcome to PihkUi! helloss!{props.test.toString()}</h1>
    </div>
  );
}

export default PihkUi;
