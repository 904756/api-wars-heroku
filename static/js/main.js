

function planetTable(planets) {
    let bodyOfMainPage = document.getElementsByTagName('body')[0];
    let table = document.createElement('table');
    bodyOfMainPage.appendChild(table);
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let headerTitles = ['Name', 'Diameter', 'Climate','Terrain', 'Surface Water Percentage', 'Population', 'Residents', ''];
    for (let i=0; i<headerTitles.length; i++) {
        let headerCell = document.createElement('th');
        headerRow.appendChild(headerCell);
        headerCell.innerHTML =  headerTitles[i];
    }
    for (let r=0; r<10; r++){
        let rows = document.createElement('tr');
        table.append(rows);
        let name = document.createElement('td');
        name.innerHTML = planets[r]['name'];
        rows.append(name);
        let diameter = document.createElement('td');
        diameter.innerHTML = planets[r]['diameter'];
        rows.append(diameter);
        let climate = document.createElement('td');
        rows.append(climate);
        climate.innerHTML = planets[r]['climate'];
        let terrain = document.createElement('td');
        terrain.innerHTML = planets[r]['terrain'];
        rows.append(terrain);
        let surface_water = document.createElement('td');
        surface_water.innerHTML = planets[r]['surface_water'];
        rows.append(surface_water);
        let population = document.createElement('td');
        population.innerHTML = planets[r]['population'];
        rows.append(population);
        let residents = document.createElement('td');
        let residentButton = document.createElement('button');
        residents.appendChild(residentButton);
        let residentNumber =  planets[r]['residents'].length;
        residentButton.innerHTML = residentNumber
        rows.append(residents);
        let vote = document.createElement('td');
        let voteButton = document.createElement('button');
        voteButton.innerHTML = 'Vote';
        residentButton.addEventListener('click', () => residentTable(planets[r]['residents']));
        vote.appendChild(voteButton);
        rows.append(vote);
    }
}


function residentTable(residents) {
    let body = document.getElementsByTagName('body')[0];
    let resTable = document.createElement('table');
    let headers = ['Name', 'Height', 'Mass', 'Hair color', 'Skin Color', 'Eye color','Birth year', 'Gender']
    let headerRow = document.createElement('tr');
    resTable.append(headerRow);
    for (let h=0; h<headers.length; h++){
        let th = document.createElement('th');
        headerRow.append(th);
        th.innerHTML = headers[h];
    }

    for (let r=0; r<residents.length; r++) {
        getResidents(residents[r], function(res) {
            let rows = document.createElement('tr');
            resTable.append(rows);
            let name = document.createElement('td');
            name.innerHTML = res['name'];
            rows.append(name);
            let height = document.createElement('td');
            height.innerHTML =  res['height'];
            rows.append(height);
            let mass = document.createElement('td');
            mass.innerHTML = res['mass'];
            rows.append(mass);
            let hairC = document.createElement("td");
            hairC.innerHTML = res['hair_color']
            rows.append(hairC);
            let skinC = document.createElement("td");
            skinC.innerHTML = res['skin_color'];
            rows.append(skinC);
            let eyeC = document.createElement("td");
            eyeC.innerHTML = res['eye_color'];
            rows.append(eyeC);
            let birthY = document.createElement("td");
            birthY.innerHTML = res['birth_year'];
            rows.append(birthY);
            let gender = document.createElement("td");
            gender.innerHTML = res['gender'];
        })

    }
    modal(resTable);
}


function getTenPlanets() {
fetch('https://swapi.dev/api/planets')
.then((response) => response.json())
.then((planets) => {
    planetTable(planets.results);
})
}


getTenPlanets()


async function getResidents(resident, callback) {
    const resAsk = await fetch(resident);
    const res = await resAsk.json()
    console.log(res)
    callback(res);
}


function modal(resTable) {
    let body = document.getElementsByTagName('body')[0];
    let coverDiv = document.createElement('div');
    coverDiv.className = 'modals';
    let residentTableDiv = document.createElement('div');
    residentTableDiv.id = 'tableDiv'
    coverDiv.append(residentTableDiv);
    let h1OverTable = document.createElement('h2');
    h1OverTable.innerHTML = 'Residents';
    residentTableDiv.append(h1OverTable);
    let br = document.createElement('br');
    residentTableDiv.append(br);
    residentTableDiv.appendChild(resTable);
    let quitButton = document.createElement('button');
    quitButton.innerHTML = 'Quit';
    quitButton.id = 'quitButton';
    let modals = document.getElementsByClassName('modals');
    quitButton.addEventListener('click', function(){
        for (let m of modals) {
            m.style.display = 'none';
        }
    })
    residentTableDiv.append(br);
    residentTableDiv.append(quitButton);
    body.appendChild(coverDiv);
}



