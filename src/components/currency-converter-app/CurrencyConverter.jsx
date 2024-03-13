import useCurrencyInfo from "./useCurrencyInfo";

function CurrencyConverter() {
  useCurrencyInfo("usd");

  return (
    <>
      <h1>Hello from CurrencyConverter</h1>
    </>
  );
}

export default CurrencyConverter;
