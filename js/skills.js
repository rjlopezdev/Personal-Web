$(document).ready(function () {
    $.getJSON("../data/skills.json", function (skills) {
        // Iterate skills
        skills.forEach( function (skill) {
            $('#skills-container').append(
                `
                <div class="col-4 text-center skill hvr-grow">
                    <i class="fa-5x devicon-${skill.icon}" data-toggle="tooltip" placement="top" title="${skill.tooltip}"></i>
                    <h3>
                        <span class="badge text-center">${skill.name}</span>
                    </h3>
                </div>
                `
            );
        });

        //Content loaded
        $('#skills-preloader').remove();
        
        // Activate skill tooltips
        $('[data-toggle="tooltip"]').tooltip();
    });
})