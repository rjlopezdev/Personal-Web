$(document).ready(function () {
    $.getJSON('../data/projects.json', function (projects) {

        // Iterate projects
        projects.forEach(function (project, index) {

            var container = (project.collaboration === 'true')
                ? $('#contributions-container')
                : $('#projects-container');

            var section_color = (project.collaboration === 'true')
                ? 'warning'
                : 'primary';
            var status = (project.status == 'success' )
                ? 'success'
                : 'warning';
            var status_text = (project.status == 'success')
                ? 'Release'
                : 'In progress';
            
            container.append(
                `
                <div class="card border border-${(project.collaboration === 'true') ? 'warning' : 'primary'}">
                    <div class="card-body">
        
                        <!-- Text info -->
                        <div class='row'>
                            <div class='col-sm-8'>
                                <!-- Project name -->
                                <h4 class="card-title">${project.name}
                                    <span class="text-white badge badge-${status}"> ${status_text} </span>
                                </h4>
                            </div>
                            <div class='col-sm-4'>
                                <!-- Latest version -->
                                <h6 class='text-right'>
                                    <span class="badge badge-primary"> v ${project.version} </span> 
                                </h6>
                                <!-- Latest modified -->
                                <h6 class='text-right'>
                                    Latest on <span class="badge badge-secondary"> 12/05/2343 </span> 
                                </h6>
                            </div>
                        </div>

                        <!-- Project subtitle -->
                        <h6 class="card-subtitle mb-2 text-muted">${project.subtitle}</h6>

                        <!-- Project description -->
                        <p class="card-text">${project.description}</p>
        
                        <!-- Technologies containers -->
                        <div id="tech-container-${index}" class="row"></div>

                        <br>

                        <div class="row justify-content-end">
                        
                            <!-- GitHub link -->
                            <a href="${project.github_repo}" role="button" class="btn btn-outline-${section_color} project-link">
                                GitHub repository
                                <i class="fab fa-github"></i>
                            </a>

                            <!-- View link -->
                            <a href="${project.web}" role="button" class="btn btn-outline-${section_color} project-link">
                                View
                                <i class="fas fa-eye"></i>
                            </a>
                            
                        </div>
        
                    </div>
                </div>
                <br>
                `
            );

            // Iterate technologies icons
            project.tech_icons.forEach( function (icon) {
                //Inject tech icon
                $(`#tech-container-${index}`).append(
                    `
                    <div class="col-6 col-sm-3 text-center">
                        <i class="fa-5x devicon-${icon}"></i>
                    </div>
                    `
                );
            });

            //Content loaded
            $('#projects-preloader').remove();
            $('#contributions-preloader').remove();
        })
    });
})