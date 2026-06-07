fetch("http://localhost:5000/projectsData")
.then(response => response.json())
.then(data => {

    const projectList =
    document.getElementById("projectList");

    data.forEach(item => {

        projectList.innerHTML += `
        <div class="card">
            <h3>${item.name}</h3>
            <p>${item.details}</p>
            <small>${item.technology}</small>
        </div>
        `;

    });

});
