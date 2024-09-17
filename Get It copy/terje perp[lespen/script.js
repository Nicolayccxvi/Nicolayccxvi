function calculate() {
    let amountPaidPer =
        parseFloat(document.getElementById("amountPaidPer").value) || 0;
    let amountPaidPål =
        parseFloat(document.getElementById("amountPaidPål").value) || 0;
    let amountPaidEspen =
        parseFloat(document.getElementById("amountPaidEspen").value) || 0;

    let totalAmountPaid = amountPaidPer + amountPaidPål + amountPaidEspen;
    let costPerPerson = totalAmountPaid / 3;

    let owesPer = costPerPerson - amountPaidPer;
    let owesPål = costPerPerson - amountPaidPål;
    let owesEspen = costPerPerson - amountPaidEspen;

    document.getElementById("app").innerHTML = `
        <p>Per har betalt: ${amountPaidPer.toFixed(2)}</p>
        <p>Pål har betalt: ${amountPaidPål.toFixed(2)}</p>
        <p>Espen har betalt: ${amountPaidEspen.toFixed(2)}</p>
        <hr/>
        <p>Sum betalt: ${totalAmountPaid.toFixed(2)}</p>
        <p>Kostnad per person: ${costPerPerson.toFixed(2)}</p>
        <hr/>
        <p>Per skylder: ${owesPer.toFixed(2)}</p>
        <p>Pål skylder: ${owesPål.toFixed(2)}</p>
        <p>Espen skylder: ${owesEspen.toFixed(2)}</p>
    `;
}
