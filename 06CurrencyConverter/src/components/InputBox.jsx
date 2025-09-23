// Mala pahile he samzun ghyava lagel ki InputBox cha flow kasa ahe and Each ad every line kay sangtay, every variable cha kay upyog ahe and toh vairable kasa upyogat yeto
// Dusri goshta ha ek ach card ahe te mala dokyat thevla pahije and ha card mi generally kasa use karu shakto he mi vichar kela pahije

import React, { useId } from "react";
// do not call useId to generate keys in a list. Keys should be generated from your data
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId} //this generates a unique id which can be used for binding of two elements
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        {/*label will get repeated every time, with every run thats why some optimization is reqd and that optimization is the amountInputId */}
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value))
            //javascript takes e.target.value in string format but here we want this value in number format thats why we are encasing it inside "Number"
            // && is used as a checker
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={onCurrencyChange && onCurrencyChange((e) => e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          {/* if you want performance in loops pass key */}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
