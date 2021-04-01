fetch('data.json')
  .then(response => response.json())
  .then(data => {
  	// Do something with your data
    JSON.stringify(data);
    function buildTable(data) {    
        let table = document.getElementById('myTable');
        for (let i = 0; i < data.length; i++) {
            let row = `<tr>
                            <td class="td-selected">
                            <label>
                            <input data-index="0" name="btSelectItem" type="checkbox">
                            ${data[i].id}
                            </label>
                            </td>
                            <td class="td-selected">${data[i].contact}</td>
                            <td class="td-selected">${data[i].country}</td>
                            <td class="td-selected">${data[i].company}</td>
                            <td class="td-selected">${data[i].job}</td>
                            <td class="td-selected">${data[i].media}</td>
                            <td class="td-selected">${data[i].interest}</td>
                      </tr>`
        table.innerHTML += row;
        }
    }
    buildTable(data);
  	console.log(data);
  });

