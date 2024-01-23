import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ fields }) {
  const results = calculateInvestmentResults(fields);

  let totalInterest = 0;

  const investedCapital = (valueEndOfYear, totalInterest) => {
    return valueEndOfYear - totalInterest;
  };

  if (!!fields.duration) {
    return (
      <>
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, i) => (
              <tr key={i}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(Math.round(result.interest))}</td>
                <td>{formatter.format((totalInterest += result.interest))}</td>
                <td>
                  {formatter.format(
                    investedCapital(result.valueEndOfYear, totalInterest)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  return (
    <>
      <h2 className="center">please enter a duration greater than zero</h2>
    </>
  );
}
