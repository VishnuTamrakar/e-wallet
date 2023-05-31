import Table from "react-bootstrap/Table";

function Transection() {
  return (
    <>
      <div className="container">
        <h2 className="Ttitle">Transaction</h2>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>From</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deposit</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>20000rs</td>
            </tr>
            <tr>
              <td>Withdraw</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>-1000rs</td>
            </tr>
            <tr>
              <td>Deposit</td>
              <td>Larry </td>
              <td>@twitter</td>
              <td>1000rs</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Transection;
